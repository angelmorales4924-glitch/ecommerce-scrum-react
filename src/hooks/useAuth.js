import { useEffect, useState } from 'react';

export default function useAuth() {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const usuarioGuardado = localStorage.getItem('novashop_usuario');

    if (usuarioGuardado) {
      setUsuario(JSON.parse(usuarioGuardado));
    }
  }, []);

  function iniciarSesion(nombre, correo) {
    if (!nombre.trim() || !correo.trim()) {
      return false;
    }

    const datosUsuario = {
      nombre,
      correo
    };

    setUsuario(datosUsuario);

    localStorage.setItem(
      'novashop_usuario',
      JSON.stringify(datosUsuario)
    );

    return true;
  }

  function cerrarSesion() {
    setUsuario(null);
    localStorage.removeItem('novashop_usuario');
  }

  return {
    usuario,
    iniciarSesion,
    cerrarSesion
  };
}