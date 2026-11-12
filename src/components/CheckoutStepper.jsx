import React from 'react';

export default function CheckoutStepper({ currentStep }) {
  const steps = ['Envío', 'Pago', 'Revisión'];

  return (
    <div className="checkout-stepper">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;

        return (
          <div key={step} className={`step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}>
            <span className="step-circle">{isCompleted ? '✓' : stepNumber}</span>
            <span className="step-label">{step}</span>
          </div>
        );
      })}
    </div>
  );
}