import React, { useState } from 'react';

const EditBusForm = () => {
  const [busSearch, setBusSearch] = useState('');
  const [formData, setFormData] = useState(null);

  const handleSearchChange = (e) => {
    setBusSearch(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Simulate searching for the bus by number or name
    // Replace this with actual logic to fetch the bus data
    const busDetails = {
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
    setFormData(busDetails); // Set the bus details in form
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission
    console.log('Edited bus details:', formData);
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?bus,city')" }}>
      <div className="bg-black bg-opacity-50 p-4 min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 shadow-lg rounded-2xl max-w-lg w-full">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Search for Bus to Edit</h2>
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Bus Number or Name</label>
              <input
                type="text"
                value={busSearch}
                onChange={handleSearchChange}
                placeholder="Enter Bus Number or Name"
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600"
              >
                Search Bus
              </button>
            </div>
          </form>
        </div>

        {formData && (
          <div className="bg-white mt-10 p-8 shadow-lg rounded-2xl max-w-6xl w-full">
            <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Edit Bus Details</h2>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Bus Number</label>
                  <input
                    type="text"
                    name="busNumber"
                    value={formData.busNumber}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bus Name</label>
                  <input
                    type="text"
                    name="busName"
                    value={formData.busName}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Seats</label>
                  <input
                    type="number"
                    name="seats"
                    value={formData.seats}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Price Per Seat</label>
                  <input
                    type="number"
                    name="pricePerSeats"
                    value={formData.pricePerSeats}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Source</label>
                  <input
                    type="text"
                    name="source"
                    value={formData.source}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Destination</label>
                  <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Source Time</label>
                  <input
                    type="time"
                    name="sourceTime"
                    value={formData.sourceTime}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Destination Time</label>
                  <input
                    type="time"
                    name="destinationTime"
                    value={formData.destinationTime}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bus Type</label>
                  <select
                    name="busType"
                    value={formData.busType}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>Select Bus Type</option>
                    <option value="AC">AC</option>
                    <option value="Non-AC">Non-AC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bus Image</label>
                  <input
                    type="file"
                    name="image"
                    onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
                    className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-lg file:text-sm file:font-medium file:bg-gray-100 hover:file:bg-gray-200"
                  />
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:from-green-600 hover:to-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditBusForm;
