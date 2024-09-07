import React, { useState } from 'react';
import UPIPayment from './UPIPayment';
import CardPayment from './CardPayment';

const PaymentMethod = () => {
  const [paymentMode, setPaymentMode] = useState('');

  const handlePaymentModeChange = (mode) => {
    setPaymentMode(mode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-purple-300">
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        {paymentMode === '' ? (
          <div className="flex flex-col items-center w-full">
            <div className="flex items-center mb-8 w-full">
              {/* Header */}
              <h1 className="text-4xl font-bold text-gray-800 flex-grow text-center">Select Payment Method</h1>
            </div>

            {/* Payment Mode Buttons */}
            <div className="flex flex-col space-y-6 w-full">
              <button 
                className={`transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-indigo-600 text-white py-6 px-10 rounded-2xl font-semibold text-2xl ${paymentMode === 'UPI' && 'bg-indigo-800'}`}
                onClick={() => handlePaymentModeChange('UPI')}
              >
                UPI
              </button>
              <button 
                className={`transition-all duration-300 transform hover:scale-105 hover:shadow-lg bg-green-600 text-white py-6 px-10 rounded-2xl font-semibold text-2xl ${paymentMode === 'Card' && 'bg-green-800'}`}
                onClick={() => handlePaymentModeChange('Card')}
              >
                Card
              </button>
            </div>
          </div>
        ) : (
          <div 
            className={`transition-all duration-500 w-full rounded-lg p-8 bg-white shadow-xl`}
          >
            {paymentMode === 'UPI' && <UPIPayment />}
            {paymentMode === 'Card' && <CardPayment />}
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentMethod;
