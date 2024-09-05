import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddBusForm = () => {
  const [formData, setFormData] = useState({
    Bus_number: '',
    Bus_name: '',
    Number_seat: '',
    Seat_price: '',
    Source: '',
    Destination: '',
    Source_time: '',
    Destination_time: '',
    Bus_type: '',
    Bus_Class: '',
    Timing: '',
    Food_Facility: ''
  });

  const [alert, setAlert] = useState({ message: '', type: '', countdown: 5 });
  const [countdown, setCountdown] = useState(5);

  const token = localStorage.getItem('token');
  const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'x-access-token': token,
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/addbus', formData);
      console.log(response);
      const message=response.status
      console.log(message)
      setAlert({ message: "Bus Added Successfully!", type: 'success', countdown: 5 });
      setCountdown(5);  // Reset countdown for each new alert
    } catch (error) {
      setAlert({ message: "Bus number already exists!", type: 'error', countdown: 5 });
      setCountdown(5);  // Reset countdown for each new alert
    }
  };

  // Handle auto-dismiss of alert and countdown
  useEffect(() => {
    if (alert.message) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        setAlert({ message: '', type: '', countdown: 5 });
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [alert.message]);

  return (
    <div className="relative p-4 mt-1 mb-2 max-w-6xl mx-auto bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 shadow-lg rounded-3xl">
      <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Add New Bus</h2>

      {/* Alert Message in the top-right corner with countdown */}
      {alert.message && (
        <div
          className={`absolute top-4 right-4 p-4 text-sm text-white rounded-lg shadow-lg transition-opacity duration-300 ${
            alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
          role="alert"
        >
          {alert.message} — Disappearing in {countdown} seconds
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <label htmlFor="busNumber" className="block text-sm font-semibold text-gray-100">Bus Number</label>
            <input
              type="text"
              id="busNumber"
              name="Bus_number"
              value={formData.Bus_number}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="busName" className="block text-sm font-semibold text-gray-100">Bus Name</label>
            <input
              type="text"
              id="busName"
              name="Bus_name"
              value={formData.Bus_name}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="seats" className="block text-sm font-semibold text-gray-100">Number of Seats</label>
            <input
              type="number"
              id="seats"
              name="Number_seat"
              value={formData.Number_seat}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="pricePerSeats" className="block text-sm font-semibold text-gray-100">Price Per Seat</label>
            <input
              type="number"
              id="pricePerSeats"
              name="Seat_price"
              value={formData.Seat_price}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="source" className="block text-sm font-semibold text-gray-100">Source</label>
            <input
              type="text"
              id="source"
              name="Source"
              value={formData.Source}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="sourceTime" className="block text-sm font-semibold text-gray-100">Source Time</label>
            <input
              type="time"
              id="sourceTime"
              name="Source_time"
              value={formData.Source_time}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="destination" className="block text-sm font-semibold text-gray-100">Destination</label>
            <input
              type="text"
              id="destination"
              name="Destination"
              value={formData.Destination}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="destinationTime" className="block text-sm font-semibold text-gray-100">Destination Time</label>
            <input
              type="time"
              id="destinationTime"
              name="Destination_time"
              value={formData.Destination_time}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          {/* Bus Type Field */}
          <div>
            <label htmlFor="busType" className="block text-sm font-semibold text-gray-100">Bus Type</label>
            <select
              id="busType"
              name="Bus_type"
              value={formData.Bus_type}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            >
              <option value="" disabled>Select Bus Type</option>
              <option value="AC">AC</option>
              <option value="Non-AC">Non-AC</option>
            </select>
          </div>

          <div>
            <label htmlFor="busClass" className="block text-sm font-semibold text-gray-100">Bus Class</label>
            <select
              id="BusClass"
              name="Bus_Class"
              value={formData.Bus_Class}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            >
              <option value="" disabled>Select Bus Class</option>
              <option value="Sleeper">Sleeper</option>
              <option value="Sitting">Sitting</option>
            </select>
          </div>
          <div>
            <label htmlFor="busType" className="block text-sm font-semibold text-gray-100">Timing</label>
            <select
              id="Timing"
              name="Timing"
              value={formData.Timing}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            >
              <option value="" disabled>Select Bus Timing</option>
              <option value="Day">Day</option>
              <option value="Night">Night</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="busType" className="block text-sm font-semibold text-gray-100">Food Facility</label>
            <select
              id="Food_Facility"
              name="Food_Facility"
              value={formData.Food_Facility}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            >
              <option value="" disabled>Food Facility</option>
              <option value="Avaliable">Avaliable</option>
              <option value="Not-Avalible">Not-Avalible</option>
            </select>
          </div>


        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          >
            Add Bus
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBusForm;
