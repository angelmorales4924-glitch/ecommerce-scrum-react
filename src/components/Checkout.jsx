import { useState } from 'react';

export default function Checkout({
  usuario,
  carrito,
  onConfirmar
}) {
  const [direccion, setDireccion] = useState('');
  const [pago, setPago] = useState('Tarjeta (simulación)');
  const [mensaje, setMensaje] = useState('');

  function confirmar(event) {
    event.preventDefault();

    if (!usuario) {
      setMensaje(
        'Inicia sesión antes de confirmar el pedido.'
      );
      return;
    }

    if (carrito.length === 0) {
      setMensaje(
        'Agrega al menos un producto al carrito.'
      );
      return;
    }

    if (!direccion.trim()) {
      setMensaje(
        'Escribe una dirección de entrega para continuar.'
      );
      return;
    }

    if (!pago) {
      setMensaje(
        'Selecciona un método de pago.'
      );
      return;
    }

    const pedido =
      `PED-${Date.now().toString().slice(-6)}`;

    onConfirmar();

    setDireccion('');

    setMensaje(
      `Pedido ${pedido} confirmado correctamente. Pago simulado.`
    );
  }

  return (
    <section>
      <h2>H05 - Checkout</h2>

      <p>
        Confirmación académica de compra.
        No se procesan pagos reales.
      </p>

      <form onSubmit={confirmar}>
        <textarea
          placeholder="Dirección de entrega"
          value={direccion}
          onChange={(event) =>
            setDireccion(event.target.value)
          }
        />

        <select
          value={pago}
          onChange={(event) =>
            setPago(event.target.value)
          }
        >
          <option>
            Tarjeta (simulación)
          </option>

          <option>
            Transferencia (simulación)
          </option>

          <option>
            Pago contra entrega (simulación)
          </option>
        </select>

        <button type="submit">
          Confirmar pedido
        </button>
      </form>

      {mensaje && (
        <p>{mensaje}</p>
      )}
    </section>
  );
}