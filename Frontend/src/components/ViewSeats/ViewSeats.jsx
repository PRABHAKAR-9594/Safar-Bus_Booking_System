import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom
import SeatMap from './SeatMap';
import SeatLegend from './SeatLegend';
import TopBar from '../BusTopbar/BusTopbar';

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [busType, setBusType] = useState('sitting');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      setMessage('');
    } else {
      if (selectedSeats.length < 5) {
        setSelectedSeats([...selectedSeats, seat]);
        setMessage('');
      } else {
        setMessage('Maximum 5 seats allowed at one time');
      }
    }
  };

  const handleBusTypeChange = (type) => {
    setBusType(type);
    setSelectedSeats([]);
  };

  const handleBooking = () => {
    if (selectedSeats.length === 0) {
      setMessage('Please select at least one seat to proceed');
    } else {
      navigate('/searchBus/viewSeats/Form', {
        state: { selectedSeats }, // Passing selected seats to the next page
      });
    }
  };
  

  const pricePerSeat = 50;
  const totalPrice = selectedSeats.length * pricePerSeat;

  return (
    <div className="mt-32 flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <TopBar source="Mumbai" destination="Pune" date="2024-09-01" />
      <div className="flex flex-grow items-center justify-center p-4">
        <div className={`flex flex-col w-full max-w-4xl bg-white p-6 rounded-lg shadow-xl relative overflow-auto ${busType === 'sleeper' ? 'space-y-6' : ''}`}>
          <div className="flex justify-center mb-6 space-x-6">
            <button
              className={`px-5 py-3 rounded-lg font-semibold transition-all duration-300 transform ${busType === 'sitting' ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg scale-105' : 'bg-gray-300 text-gray-800 shadow-sm'}`}
              onClick={() => handleBusTypeChange('sitting')}
              aria-pressed={busType === 'sitting'}
            >
              Sitting Bus
            </button>
            <button
              className={`px-5 py-3 rounded-lg font-semibold transition-all duration-300 transform ${busType === 'sleeper' ? 'bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg scale-105' : 'bg-gray-300 text-gray-800 shadow-sm'}`}
              onClick={() => handleBusTypeChange('sleeper')}
              aria-pressed={busType === 'sleeper'}
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

        <div className="w-80 bg-white shadow-lg p-6 flex-none rounded-lg border border-gray-300 ml-6 transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Selected Seats</h2>
          <div className="mb-4">
            {message && <p className="text-red-600 mb-3">{message}</p>}
            {selectedSeats.length === 0 ? (
              <p className="text-gray-600">No seats selected</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {selectedSeats.map((seat) => (
                  <div key={seat} className="bg-gradient-to-r from-green-500 to-green-700 text-white px-3 py-2 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    {seat}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Total Price:</h3>
            <p className="text-lg font-bold text-gray-800">${totalPrice}</p>
          </div>
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
