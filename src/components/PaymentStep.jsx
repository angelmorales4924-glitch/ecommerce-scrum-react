import React, { useState } from 'react';

export default function PaymentStep({ onNext, onBack, paymentData, setPaymentData }) {
  const [method, setMethod] = useState(paymentData.method || 'card');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPaymentData({ method });
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="payment-form">
      <h3>Método de Pago Simulado</h3>
      <div className="form-group">
        <label>
          <input 
            type="radio" 
            name="payment" 
            value="card" 
            checked={method === 'card'} 
            onChange={(e) => setMethod(e.target.value)} 
          />
          Tarjeta de Crédito / Débito (Simulado)
        </label>
      </div>
      <div className="form-group">
        <label>
          <input 
            type="radio" 
            name="payment" 
            value="paypal" 
            checked={method === 'paypal'} 
            onChange={(e) => setMethod(e.target.value)} 
          />
          PayPal (Simulado)
        </label>
      </div>
      <div className="button-group">
        <button type="button" onClick={onBack} className="btn-secondary">Regresar</button>
        <button type="submit" className="btn-primary">Revisar Pedido</button>
      </div>
    </form>
  );
}