export default function DetalleProducto({
  producto,
  onAgregar
}) {
  if (!producto) {
    return (
      <section>
        <h2>H03 - Detalle de producto</h2>

        <p>
          Selecciona un producto del catálogo para consultar su información.
        </p>
      </section>
    );
  }

  return (
    <section>
      <h2>H03 - Detalle de producto</h2>

      <article>
        <p>{producto.icono}</p>

        <p>
          Categoría: {producto.categoria}
        </p>

        <h3>{producto.nombre}</h3>

        <p>{producto.descripcion}</p>

        <p>
          <strong>
            Precio: ${producto.precio}
          </strong>
        </p>

        <p>
          Stock disponible: {producto.stock}
        </p>

        <button
          onClick={() => onAgregar(producto)}
        >
          Agregar al carrito
        </button>
      </article>
    </section>
  );
}