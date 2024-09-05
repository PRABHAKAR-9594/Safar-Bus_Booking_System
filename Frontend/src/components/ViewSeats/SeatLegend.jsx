import React from 'react';

const SeatLegend = () => {
  return (
    <div className="flex justify-around w-full max-w-lg mb-6">
      <div className="flex items-center">
        <div className="w-8 h-8 bg-green-500 rounded mr-2"></div>
        <span>Selected</span>
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-gray-200 rounded mr-2"></div>
        <span>Available</span>
      </div>
      <div className="flex items-center">
        <div className="w-8 h-8 bg-yellow-300 rounded mr-2"></div>
        <span>Reserved</span>
      </div>
    </div>
  );
};

export default SeatLegend;
