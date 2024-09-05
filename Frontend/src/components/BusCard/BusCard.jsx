import React from 'react';
import { FaBus, FaClock, FaRupeeSign, FaArrowRight, FaCheckCircle, FaMapMarkerAlt, FaUtensils } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BusCard({ bus }) {
  // Provide default values to avoid errors
  const timing = Array.isArray(bus.timing) ? bus.timing : [];
  const foodFacility = typeof bus.foodFacility === 'boolean' ? bus.foodFacility : false;

  return (
    <div className="bg-white p-4 rounded-xl shadow-lg transition-shadow duration-300 mb-2 border border-gray-200 hover:shadow-md hover:bg-gray-50">

      {/* Top Section: Bus Name and Number */}
      <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2 mb-2">
        <div className="flex items-center space-x-3">
          <FaBus className="text-blue-700 text-4xl" />
          <div>
            <div className="text-xl font-bold text-blue-900">{bus.name}</div>
            <div className="text-md text-gray-600 font-bold">Bus Number : <b className='text-blue-800'>{bus.number}</b></div>
          </div>
        </div>
        <div className="text-lg font-bold text-green-700 flex items-center">
          <FaRupeeSign className="text-xl" /> 
          <span className="text-lg ml-2">{bus.price}</span>
        </div>
      </div>

      {/* Center Section: Source and Destination */}
      <div className="flex items-center justify-between mb-2 border-b-2 border-gray-200 pb-2">
        <div className="flex-none text-md">
          <div className="font-semibold text-gray-500 flex items-center mb-1">
            <FaMapMarkerAlt className="text-blue-500 mr-1" /> Source :
          </div> 
          <div className="text-blue-800 text-xl font-bold mb-1">{bus.source}</div>
          <div className="text-gray-500 text-xs font-bold">{bus.sourceTime}</div>
        </div>

        {/* Centered Arrow */}
        <div className="mx-24 flex-shrink-0 flex-none">
          <FaArrowRight className="text-3xl text-gray-400" />
        </div>

        <div className="flex-none text-md">
          <div className="font-semibold text-gray-500 flex items-center mb-1">
            <FaMapMarkerAlt className="text-red-500 mr-1" /> Destination :
          </div> 
          <div className="text-blue-800 text-xl font-bold mb-1">{bus.destination}</div>
          <div className="text-gray-500 text-xs font-bold">{bus.destinationTime}</div>
        </div>

        {/* Call to Action */}
        
        <div className="text-right mt-1">
        <Link to="/viewSeats">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold text-lg shadow-md hover:bg-red-600 transition-colors duration-300">
            Book Now
          </button>
          </Link>
        </div>
        

      </div>

      {/* Bottom Section: Additional Info */}
      <div className="flex justify-between items-center text-md">
        <div className="flex-1 flex items-center">
          <FaClock className="inline text-yellow-500 mr-1 text-xl" />
          <span className="font-semibold text-indigo-700">Total Time: {bus.totalTime}</span>
        </div>
        <div className="flex-1 text-center font-semibold">
          <span className={`font-semibold text-md ${bus.isAC ? 'text-green-600' : 'text-red-600'}`}>
            {bus.isAC ? 'AC' : 'Non-AC'}
          </span> | {bus.classType} | <span className='text-green-600'>Food Available</span>
        </div>
        <div className="flex-1 text-right flex items-center justify-end">
          <FaCheckCircle className="text-green-600 mr-1 text-xl" />
          <span className="font-bold text-blue-900 text-md">Seats Available: {bus.seatsAvailable}</span>
        </div>
      </div>

    </div>
  );
}

export default BusCard;
