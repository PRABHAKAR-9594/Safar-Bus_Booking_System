import React, { useState } from 'react';

const DeleteBusForm = () => {
  const [busSearch, setBusSearch] = useState('');
  const [busDetails, setBusDetails] = useState(null);

  const handleSearchChange = (e) => {
    setBusSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Simulate searching for the bus by number or name
    // Replace this with actual logic to fetch the bus data
    const foundBus = {
      busNumber: '12345',
      busName: 'Express Bus',
      seats: 40,
      pricePerSeats: 200,
      source: 'City A',
      destination: 'City B',
      sourceTime: '08:00',
      destinationTime: '12:00',
      busType: 'AC',
    };
    setBusDetails(foundBus); // Set the bus details
  };

  const handleDelete = () => {
    // Handle the deletion logic here
    console.log('Bus deleted:', busDetails.busNumber);
    // Clear form after deletion
    setBusDetails(null);
    setBusSearch('');
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?bus,road')" }}>
      <div className="bg-black bg-opacity-50 p-4 min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 shadow-lg rounded-2xl max-w-lg w-full">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Search Bus to Delete</h2>
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Bus Number or Name</label>
              <input
                type="text"
                value={busSearch}
                onChange={handleSearchChange}
                placeholder="Enter Bus Number or Name"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-2 px-4 rounded-lg shadow-md hover:from-red-600 hover:to-orange-600"
              >
                Search Bus
              </button>
            </div>
          </form>
        </div>

        {busDetails && (
          <div className="bg-white mt-10 p-8 shadow-lg rounded-2xl max-w-6xl w-full">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Confirm Delete Bus</h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Bus Number</label>
                <input
                  type="text"
                  value={busDetails.busNumber}
                  readOnly
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Bus Name</label>
                <input
                  type="text"
                  value={busDetails.busName}
                  readOnly
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Number of Seats</label>
                <input
                  type="number"
                  value={busDetails.seats}
                  readOnly
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Price Per Seat</label>
                <input
                  type="number"
                  value={busDetails.pricePerSeats}
                  readOnly
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Source</label>
                <input
                  type="text"
                  value={busDetails.source}
                  readOnly
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Destination</label>
                <input
                  type="text"
                  value={busDetails.destination}
                  readOnly
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Source Time</label>
                <input
                  type="time"
                  value={busDetails.sourceTime}
                  readOnly
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Destination Time</label>
                <input
                  type="time"
                  value={busDetails.destinationTime}
                  readOnly
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Bus Type</label>
                <input
                  type="text"
                  value={busDetails.busType}
                  readOnly
                  className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100"
                />
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                onClick={handleDelete}
                className="bg-gradient-to-r from-red-600 to-red-800 text-white py-2 px-6 rounded-lg shadow-md hover:from-red-700 hover:to-red-900"
              >
                Delete Bus
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteBusForm;
