import React, { useState } from 'react';
import CheckoutStepper from './CheckoutStepper';
import ShippingStep from './ShippingStep';
import PaymentStep from './PaymentStep';
import ReviewStep from './ReviewStep';

export default function Checkout({ usuario, carrito, onConfirmar }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingData, setShippingData] = useState({ address: '', method: 'standard' });
  const [paymentData, setPaymentData] = useState({ method: 'card' });
  const [isCompleted, setIsCompleted] = useState(false);

  if (carrito.length === 0 && !isCompleted) {
    return (
      <section className="checkout-section">
        <h2>H08-H10 - Checkout por pasos</h2>
        <p>Tu carrito está vacío. Agrega productos para iniciar el proceso de compra.</p>
      </section>
    );
  }

  if (isCompleted) {
    return (
      <section className="checkout-section success-box">
        <h2>¡Compra Confirmada con Éxito!</h2>
        <p>Gracias por tu compra, <strong>{usuario ? usuario.nombre : 'Cliente'}</strong>.</p>
        <p>Hemos enviado los detalles de tu pedido y guía de envío a tu correo registrado.</p>
        <button 
          className="btn-primary" 
          onClick={() => {
            setIsCompleted(false);
            setCurrentStep(1);
            onConfirmar();
          }}
        >
          Regresar al Catálogo
        </button>
      </section>
    );
  }

  return (
    <section className="checkout-section">
      <h2>H08-H10 - Proceso de Compra (Checkout)</h2>
      
      <CheckoutStepper currentStep={currentStep} />

      {currentStep === 1 && (
        <ShippingStep 
          onNext={() => setCurrentStep(2)} 
          shippingData={shippingData} 
          setShippingData={setShippingData} 
        />
      )}

      {currentStep === 2 && (
        <PaymentStep 
          onNext={() => setCurrentStep(3)} 
          onBack={() => setCurrentStep(1)} 
          paymentData={paymentData} 
          setPaymentData={setPaymentData} 
        />
      )}

      {currentStep === 3 && (
        <ReviewStep 
          cartItems={carrito} 
          shippingData={shippingData} 
          paymentData={paymentData} 
          onBack={() => setCurrentStep(2)} 
          onConfirm={() => setIsCompleted(true)} 
        />
      )}
    </section>
  );
}