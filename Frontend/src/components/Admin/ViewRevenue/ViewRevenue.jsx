import React, { useState } from 'react';

const ViewRevenueForm = () => {
  const [formData, setFormData] = useState({
    busNumber: '',
    startDate: '',
    endDate: ''
  });

  const [revenueData, setRevenueData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock Data (You would fetch this from your backend or database)
    const mockRevenueData = {
      seatsBooked: 50, // Mock number of seats booked
      pricePerSeat: 500, // Mock price per seat
    };

    // Calculate total amount
    const totalRevenue = mockRevenueData.seatsBooked * mockRevenueData.pricePerSeat;

    // Set the data to display
    setRevenueData({
      ...mockRevenueData,
      totalRevenue,
    });
  };

  return (
    <div className="p-6 mt-8 mb-8 max-w-4xl mx-auto bg-gradient-to-r from-green-400 to-blue-500 shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold text-white mb-6 text-center">View Revenue</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div>
            <label htmlFor="busNumber" className="block text-sm font-semibold text-white">Bus Number / Name</label>
            <input
              type="text"
              id="busNumber"
              name="busNumber"
              value={formData.busNumber}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="startDate" className="block text-sm font-semibold text-white">Start Date</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>

          <div>
            <label htmlFor="endDate" className="block text-sm font-semibold text-white">End Date</label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-gray-900"
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
          >
            View Revenue
          </button>
        </div>
      </form>

      {revenueData && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-extrabold text-gray-800 mb-4">Revenue Details</h3>
          <p className="text-lg text-gray-700">
            <strong>Seats Booked:</strong> {revenueData.seatsBooked}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Price per Seat:</strong> ₹{revenueData.pricePerSeat}
          </p>
          <p className="text-lg text-gray-700">
            <strong>Total Revenue:</strong> ₹{revenueData.totalRevenue}
          </p>
        </div>
      )}
    </div>
  );
};

export default ViewRevenueForm;
