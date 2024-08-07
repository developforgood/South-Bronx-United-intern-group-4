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
  address: string;
  apt: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  cardName: string;
  cardNumber: string;
  cardMM: string;
  cardYYYY: string;
  cardCVV: string;
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
    address: '',
    apt: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    cardName: '',
    cardNumber: '',
    cardMM: '',
    cardYYYY: '',
    cardCVV: '',
  });

  const [step, setStep] = useState<number>(1); // To manage form steps

  // Ensure amount is a number
  const amount = Number(formData.amount);
  const processingFee = amount > 0 ? calculateProcessingFee(amount) : 0;
  const total = formData.coverFees ? amount + processingFee : amount;

  useEffect(() => {
    if (amount === 0) {
      setFormData((prevData) => ({ ...prevData, coverFees: false }));
    }
  }, [amount]);

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
    setStep((prevStep) => prevStep + 1); // Increment step to navigate to the next step
  };

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <img
        src="/img/sbu.png" // Path to your image
        alt="Logo"
        className="logo"
      />
      <h1>Donate to Our Cause</h1>
      <p>Thank you for supporting our cause!</p>

      {step === 1 && (
        <>
          <div style={{ marginBottom: '20px' }}>
            <h2>Donation Amount</h2>
            <div style={{ marginBottom: '15px' }}>
              <button onClick={() => handleAmountClick(10)}>$10</button>
              <button onClick={() => handleAmountClick(25)}>$25</button>
              <button onClick={() => handleAmountClick(50)}>$50</button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ marginRight: '10px' }}>$</span>
              <input
                type="number"
                name="amount"
                value={amount > 0 ? amount : ''}
                onChange={handleChange}
                min="0"
                placeholder="Enter amount (USD)"
                style={{ width: '100%', padding: '8px' }}
              />
            </div>
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
          <h2>Payment Info</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <h3>Address</h3>
            <div style={{ display: 'flex', marginBottom: '15px' }}>
              <div style={{ flex: '1', marginRight: '10px' }}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px' }}
                  placeholder="Address"
                />
              </div>
              <div style={{ flex: '1' }}>
                <label htmlFor="apt">Apt/Suite</label>
                <input
                  type="text"
                  id="apt"
                  name="apt"
                  value={formData.apt}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px' }}
                  placeholder="Apt/Suite"
                />
              </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '15px' }}>
              <div style={{ flex: '1', marginRight: '10px' }}>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px' }}
                  placeholder="City"
                />
              </div>
              <div style={{ flex: '1', marginRight: '10px' }}>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px' }}
                  placeholder="State"
                />
              </div>
              <div style={{ flex: '1' }}>
                <label htmlFor="zip">Zip/Postal</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px' }}
                  placeholder="Zip/Postal"
                />
              </div>
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label htmlFor="country">Country</label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                style={{ width: '100%', padding: '8px' }}
              >
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="GB">United Kingdom</option>
                <option value="AU">Australia</option>
                {/* Add more countries as needed */}
              </select>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3>Card Information</h3>
            <div style={{ display: 'flex', marginBottom: '15px' }}>
              <div style={{ flex: '1', marginRight: '10px' }}>
                <label htmlFor="cardName">Name on Card</label>
                <input
                  type="text"
                  id="cardName"
                  name="cardName"
                  value={formData.cardName}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px' }}
                  placeholder="Name"
                />
              </div>
              <div style={{ flex: '2' }}>
                <label htmlFor="cardNumber">Card Number</label>
                <input
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px' }}
                  placeholder="Card #"
                />
              </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '15px' }}>
              <div style={{ flex: '1', marginRight: '10px' }}>
                <label htmlFor="cardMM">Month</label>
                <input
                  type="text"
                  id="cardMM"
                  name="cardMM"
                  value={formData.cardMM}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px' }}
                  placeholder="MM"
                />
              </div>
              <div style={{ flex: '1', marginRight: '10px' }}>
                <label htmlFor="cardYYYY">Year</label>
                <input
                  type="text"
                  id="cardYYYY"
                  name="cardYYYY"
                  value={formData.cardYYYY}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px' }}
                  placeholder="YYYY"
                />
              </div>
              <div style={{ flex: '1' }}>
                <label htmlFor="cardCVV">Security Code</label>
                <input
                  type="text"
                  id="cardCVV"
                  name="cardCVV"
                  value={formData.cardCVV}
                  onChange={handleChange}
                  style={{ width: '100%', padding: '8px' }}
                  placeholder="CVV"
                />
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3>Donation Summary</h3>
            <p>Amount: ${amount.toFixed(2)}</p>
            {formData.coverFees && <p>Processing Fee: ${processingFee.toFixed(2)}</p>}
            <p>Total: ${total.toFixed(2)}</p>
          </div>

          <button
            onClick={handleNext}
            style={{ padding: '10px 20px' }}
          >
            Donate
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2>Thank you for your donation!</h2>
          {/* You can render a confirmation message or redirect to a thank you page */}
        </div>
      )}
    </div>
  );
};

export default DonationsPage;