
"use client";

import React, { useState, useEffect } from 'react';

const calculateProcessingFee = (amount: number): number => {
  return 0.0656 * amount + 0.32;
};

interface DonationFormData {
  amount: number;
  isMonthly: boolean;
  coverFees: boolean;
  name: string;
  email: string;
  isCompany: boolean;
  message: string;
}

const DonationsPage: React.FC = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    amount: 0,
    isMonthly: false,
    coverFees: false,
    name: '',
    email: '',
    isCompany: false,
    message: '',
  });

  const [step, setStep] = useState<number>(1); // To manage form steps

  // Effect to update processing fees when amount or coverFees changes
  const processingFee = formData.amount > 0 
    ? calculateProcessingFee(formData.amount) 
    : 0;

  useEffect(() => {
    if (formData.amount === 0) {
      setFormData((prevData) => ({ ...prevData, coverFees: false }));
    }
  }, [formData.amount]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : name === 'amount' ? Number(value) : value,
    }));
  };

  const handleAmountClick = (amount: number) => {
    setFormData((prevData) => ({ ...prevData, amount }));
  };

  const handleNext = () => {
    // You can implement logic to save the data or validate it here
    setStep(2); // Go to the next step
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      {step === 1 && (
        <>
          <h1>Donate to Our Cause</h1>
          <p>Thank you for supporting our cause!</p>
          <div style={{ marginBottom: '20px' }}>
            <h2>Donation Amount</h2>
            <div style={{ marginBottom: '15px' }}>
              <button onClick={() => handleAmountClick(10)}>$10</button>
              <button onClick={() => handleAmountClick(25)}>$25</button>
              <button onClick={() => handleAmountClick(50)}>$50</button>
            </div>
            <input
              type="number"
              name="amount"
              value={formData.amount > 0 ? formData.amount : ''}
              onChange={handleChange}
              min="0"
              placeholder="Enter amount (USD)"
              style={{ width: '100%', padding: '8px' }}
            />
            <div style={{ marginTop: '10px' }}>
              <label>
                <input
                  type="checkbox"
                  name="isMonthly"
                  checked={formData.isMonthly}
                  onChange={handleChange}
                />
                Make this a monthly donation
              </label>
            </div>
            <div style={{ marginTop: '10px' }}>
              <label>
                <input
                  type="checkbox"
                  name="coverFees"
                  checked={formData.coverFees}
                  onChange={handleChange}
                />
                Please charge me an additional ${processingFee.toFixed(2)} to cover processing fees
              </label>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h2>Your Information</h2>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
                placeholder="Name"
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
                placeholder="Email"
              />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label>
                <input
                  type="checkbox"
                  name="isCompany"
                  checked={formData.isCompany}
                  onChange={handleChange}
                />
                This is a company donation
              </label>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px', minHeight: '100px' }}
                placeholder="Donation Message"
              />
            </div>
          </div>

          <button
            onClick={handleNext}
            style={{ padding: '10px 20px' }}
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <div>
          {/* Display summary or next steps here */}
          <h2>Thank you for your donation!</h2>
          {/* You can render a summary of the donation or redirect to a confirmation page */}
        </div>
      )}
    </div>
  );
};

export default DonationsPage;