import React from 'react'
import './Top.css'

const PricingPlan = () => {
  const plans = [
    {
      id: 1,
      name: 'Basic Plan',
      price: '$9.99/month',
      features: ['5 Users', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      id: 2,
      name: 'Standard Plan',
      price: '$19.99/month',
      features: ['15 Users', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
    {
      id: 3,
      name: 'Premium Plan',
      price: '$29.99/month',
      features: ['Unlimited Users', 'Feature 2', 'Feature 3', 'Feature 4'],
    },
  ];

  return (
    <div className="pricing-plans">
      {plans.map(plan => (
        <div key={plan.id} className="pricing-plan">
          <h2>{plan.name}</h2>
          <p>{plan.price}</p>
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button>Get Plan</button>
        </div>
      ))}
    </div>
  );
};

export default PricingPlan;