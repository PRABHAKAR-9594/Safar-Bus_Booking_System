import React, { useState } from 'react';
import bus_background_logo from '../../assets/bus_background_logo.jpg'; // Import the bus image
import { Link } from 'react-router-dom';

function BusBookingForm() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState('');
  
  const [reviews, setReviews] = useState([
    { id: 1, name: 'John Doe', feedback: 'Great service!' },
    { id: 2, name: 'Jane Smith', feedback: 'Very comfortable ride.' },
    { id: 3, name: 'Alex Johnson', feedback: 'On time and clean buses.' },
  ]);

  const handleSwap = () => {
    setSource(destination);
    setDestination(source);
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 p-6"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${bus_background_logo})` }}
        aria-hidden="true"
      ></div>

      {/* Form and Content */}
      <div className="relative z-10 bg-gradient-to-r from-white to-blue-100 p-8 rounded-lg shadow-2xl w-full max-w-7.5xl">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-6 text-center">Book Your Bus</h1>

        <div className="flex space-x-6 items-center justify-center mb-8">
          {/* Source Input */}
          <div className="relative w-1/4">
            <label className="block text-gray-700 mb-2">Source</label>
            <input
              type="text"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              placeholder="Enter source location"
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-blue-300 focus:outline-none focus:border-purple-500 shadow-md bg-white"
            />
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition duration-300 text-white font-semibold py-2 px-4 rounded-full mt-7 shadow-lg"
          >
            Swap
          </button>

          {/* Destination Input */}
          <div className="relative w-1/4">
            <label className="block text-gray-700 mb-2">Destination</label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Enter destination"
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-blue-300 focus:outline-none focus:border-purple-500 shadow-md bg-white"
            />
          </div>

          {/* Date Input */}
          <div className="relative w-1/4">
            <label className="block text-gray-700 mb-2">Date of Travel</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 text-lg rounded-lg border-2 border-blue-300 focus:outline-none focus:border-purple-500 shadow-md bg-white"
            />
          </div>

          {/* Search Button */}
          <Link to="/searchBus">
          <button
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg mt-7"
          >
            Search
          </button>
          </Link>
        </div>
      </div>

      {/* Horizontal Scrollable Customer Reviews */}
      <div className="relative z-10 mt-10 w-full max-w-xl">
        <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">Customer Reviews</h2>
        <div className="flex space-x-4 animate-slide-in justify-center">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="flex-none w-64 bg-gradient-to-br from-white to-blue-100 p-6 rounded-lg shadow-xl text-center transform hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold text-blue-700">{review.name}</h3>
              <p className="text-gray-600 mt-2">{review.feedback}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusBookingForm;
