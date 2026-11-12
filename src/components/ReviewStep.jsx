import React from 'react';

export default function ReviewStep({ cartItems, shippingData, paymentData, onBack, onConfirm }) {
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingCost = shippingData.method === 'express' ? 99 : 0;
  const total = subtotal + shippingCost;

  return (
    <div className="review-container">
      <h3>Resumen del Pedido</h3>
      <div className="review-section">
        <p><strong>Dirección:</strong> {shippingData.address}</p>
        <p><strong>Método de envío:</strong> {shippingData.method === 'express' ? 'Express ($99.00)' : 'Estándar (Gratis)'}</p>
        <p><strong>Método de pago:</strong> {paymentData.method === 'card' ? 'Tarjeta simulación' : 'PayPal simulación'}</p>
      </div>
      <div className="review-items">
        <h4>Artículos en el carrito:</h4>
        {cartItems.map((item, index) => (
          <div key={index} className="review-item-row">
            <span>{item.name} (x{item.quantity})</span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div className="review-totals">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Envío: ${shippingCost.toFixed(2)}</p>
        <h4>Total a pagar: ${total.toFixed(2)}</h4>
      </div>
      <div className="button-group">
        <button type="button" onClick={onBack} className="btn-secondary">Regresar</button>
        <button type="button" onClick={onConfirm} className="btn-primary">Confirmar Compra</button>
      </div>
    </div>
  );
}