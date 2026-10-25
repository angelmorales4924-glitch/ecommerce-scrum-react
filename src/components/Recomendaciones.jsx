import { useMemo } from 'react';

export default function Recomendaciones({
  productos,
  productoActual,
  onSeleccionar,
  onAgregar
}) {
  const recomendaciones = useMemo(() => {
    if (!productoActual) {
      return [];
    }

    return productos
      .filter(
        (producto) =>
          producto.id !== productoActual.id
      )
      .sort((a, b) => {
        const aMismaCategoria =
          a.categoria === productoActual.categoria;

        const bMismaCategoria =
          b.categoria === productoActual.categoria;

        return (
          Number(bMismaCategoria) -
          Number(aMismaCategoria)
        );
      })
      .slice(0, 3);
  }, [productos, productoActual]);

  return (
    <section>
      <h2>H06 - Personalización</h2>

      {!productoActual ? (
        <p>
          Selecciona un producto para obtener recomendaciones.
        </p>
      ) : (
        <>
          <p>
            Recomendaciones relacionadas con{' '}
            <strong>{productoActual.nombre}</strong>
          </p>

          <div>
            {recomendaciones.map((producto) => (
              <article key={producto.id}>
                <p>{producto.icono}</p>

                <h3>{producto.nombre}</h3>

                <p>{producto.categoria}</p>

                <p>${producto.precio}</p>

                <button
                  onClick={() =>
                    onSeleccionar(producto)
                  }
                >
                  Ver detalle
                </button>

                <button
                  onClick={() =>
                    onAgregar(producto)
                  }
                >
                  Agregar al carrito
                </button>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}