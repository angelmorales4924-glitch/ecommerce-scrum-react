import { useState } from 'react';
import Carrito from './components/Carrito.jsx';
import useAuth from './hooks/useAuth.js';

export default function App() {
  const { usuario, iniciarSesion, cerrarSesion } = useAuth();

  const productoPrueba = {
    id: 1,
    nombre: 'Audífonos',
    precio: 599
  };

  const [carrito, setCarrito] = useState([]);

  function agregarAlCarrito(producto) {
    const existe = carrito.find(
      (item) => item.id === producto.id
    );

    if (existe) {
      setCarrito(
        carrito.map((item) =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([
        ...carrito,
        { ...producto, cantidad: 1 }
      ]);
    }
  }

  function aumentarCantidad(id) {
    setCarrito(
      carrito.map((item) =>
        item.id === id
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      )
    );
  }

  function disminuirCantidad(id) {
    setCarrito(
      carrito
        .map((item) =>
          item.id === id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
        .filter((item) => item.cantidad > 0)
    );
  }

  function eliminarDelCarrito(id) {
    setCarrito(
      carrito.filter((item) => item.id !== id)
    );
  }

  return (
    <main>
      <h1>NovaShop</h1>

      <hr />

      <h2>Prueba de H01 - Login / Registro</h2>

      {usuario ? (
        <div>
          <p>
            Sesión iniciada como: <strong>{usuario.nombre}</strong>
          </p>

          <p>
            Correo: {usuario.correo}
          </p>

          <button onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        </div>
      ) : (
        <button
          onClick={() =>
            iniciarSesion(
              'Angel',
              'angel@correo.com'
            )
          }
        >
          Probar inicio de sesión
        </button>
      )}

      <hr />

      <h2>Prueba de H04 - Carrito</h2>

      <button
        onClick={() => agregarAlCarrito(productoPrueba)}
      >
        Agregar Audífonos
      </button>

      <Carrito
        carrito={carrito}
        onAumentar={aumentarCantidad}
        onDisminuir={disminuirCantidad}
        onEliminar={eliminarDelCarrito}
      />
    </main>
  );
}