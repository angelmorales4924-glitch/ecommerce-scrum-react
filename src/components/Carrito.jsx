export default function Carrito({
  carrito,
  onAumentar,
  onDisminuir,
  onEliminar
}) {

  const total = carrito.reduce(
    (suma, producto) =>
      suma + producto.precio * producto.cantidad,
    0
  );

  return (
    <section>
      <h2>Carrito</h2>

      {carrito.length === 0 && (
        <p>El carrito está vacío.</p>
      )}

      {carrito.map((producto) => (
        <div key={producto.id}>
          <h3>{producto.nombre}</h3>

          <p>
            ${producto.precio} x {producto.cantidad}
          </p>

          <button
            onClick={() => onDisminuir(producto.id)}
          >
            -
          </button>

          <span>
            {producto.cantidad}
          </span>

          <button
            onClick={() => onAumentar(producto.id)}
          >
            +
          </button>

          <button
            onClick={() => onEliminar(producto.id)}
          >
            Eliminar
          </button>
        </div>
      ))}

      <h3>Total: ${total}</h3>
    </section>
  );
}