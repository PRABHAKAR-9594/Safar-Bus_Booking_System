import React, { useState } from 'react';
import SeatMap from './SeatMap';
import SeatLegend from './SeatLegend';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [busType, setBusType] = useState('sitting'); // Can be 'sitting' or 'sleeper'

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBusTypeChange = (type) => {
    setBusType(type);
    setSelectedSeats([]); // Reset selected seats when changing bus type
  };

  const pricePerSeat = 50; // Example price per seat
  const totalPrice = selectedSeats.length * pricePerSeat;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left rectangle for seat layout */}
      <div className="flex-1 bg-white p-4 relative overflow-auto">
        <div className="absolute top-4 left-4 w-16 h-16">
          <img
            src="/path/to/steering-image.png" // Replace with your steering wheel image path
            alt="Steering Wheel"
            className="w-full h-full"
          />
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center">Select Your Seats</h1>
        
        {/* Bus Type Selection */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-4 py-2 mx-2 ${busType === 'sitting' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleBusTypeChange('sitting')}
          >
            Sitting Bus
          </button>
          <button
            className={`px-4 py-2 mx-2 ${busType === 'sleeper' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
            onClick={() => handleBusTypeChange('sleeper')}
          >
            Sleeper Bus
          </button>
        </div>

        <SeatLegend />
        <SeatMap
          selectedSeats={selectedSeats}
          onSeatSelect={handleSeatSelect}
          busType={busType}
        />
      </div>

      {/* Right sidebar for selected seats and booking details */}
      <div className="w-80 bg-white shadow-md p-4 flex-none">
        <h2 className="text-2xl font-semibold mb-4">Selected Seats</h2>
        <div className="mb-4">
          {selectedSeats.length === 0 ? (
            <p>No seats selected</p>
          ) : (
            <ul>
              {selectedSeats.map(seat => (
                <li key={seat} className="mb-2">{seat}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="mb-4">
          <h3 className="text-xl font-semibold">Total Price:</h3>
          <p className="text-lg">${totalPrice}</p>
        </div>
        <button className="w-full bg-blue-500 text-white py-2 rounded">Book Now</button>
      </div>
    </div>
  );
};

export default SeatSelection;
