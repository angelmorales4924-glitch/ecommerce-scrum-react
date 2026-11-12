import React, { useState } from 'react';

export default function ShippingStep({ onNext, shippingData, setShippingData }) {
  const [address, setAddress] = useState(shippingData.address || '');
  const [method, setMethod] = useState(shippingData.method || 'standard');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!address.trim()) {
      alert('Por favor ingresa una dirección de envío.');
      return;
    }
    setShippingData({ address, method });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="shipping-form">
      <h3>Datos de Envío</h3>
      <div className="form-group">
        <label>Dirección completa:</label>
        <input 
          type="text" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          placeholder="Calle, número, ciudad, C.P." 
          required 
        />
      </div>
      <div className="form-group">
        <label>Método de entrega:</label>
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="standard">Envío Estándar (3-5 días hábiles) - Gratis</option>
          <option value="express">Envío Express (24-48 horas) - $99.00</option>
        </select>
      </div>
      <button type="submit" className="btn-primary">Continuar al Pago</button>
    </form>
  );
}