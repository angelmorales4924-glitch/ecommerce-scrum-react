import { useMemo, useState } from 'react';

export default function Catalogo({
  productos,
  onSeleccionar,
  onAgregar
}) {
  const [busqueda, setBusqueda] = useState('');
  const [categoria, setCategoria] = useState('Todas');

  const categorias = [
    'Todas',
    ...new Set(productos.map((producto) => producto.categoria))
  ];

  const productosFiltrados = useMemo(() => {
    return productos.filter((producto) => {
      const coincideNombre = producto.nombre
        .toLowerCase()
        .includes(busqueda.toLowerCase());

      const coincideCategoria =
        categoria === 'Todas' ||
        producto.categoria === categoria;

      return coincideNombre && coincideCategoria;
    });
  }, [productos, busqueda, categoria]);

  return (
    <section>
      <h2>H02 - Catálogo</h2>

      <input
        type="search"
        placeholder="Buscar producto..."
        value={busqueda}
        onChange={(event) => setBusqueda(event.target.value)}
      />

      <select
        value={categoria}
        onChange={(event) => setCategoria(event.target.value)}
      >
        {categorias.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div>
        {productosFiltrados.map((producto) => (
          <article key={producto.id}>
            <p>{producto.icono}</p>

            <h3>{producto.nombre}</h3>

            <p>{producto.categoria}</p>

            <p>${producto.precio}</p>

            <button
              onClick={() => onSeleccionar(producto)}
            >
              Ver detalle
            </button>

            <button
              onClick={() => onAgregar(producto)}
            >
              Agregar al carrito
            </button>
          </article>
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <p>No se encontraron productos.</p>
      )}
    </section>
  );
}