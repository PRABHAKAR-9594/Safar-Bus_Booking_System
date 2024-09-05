import React, { useState } from 'react';
import axios from 'axios';
const EditBusForm = () => {
  const [busSearch, setBusSearch] = useState('');
  const [formData, setFormData] = useState(null);

  const handleSearchChange = (e) => {
    setBusSearch(e.target.value);
  };

  const token = localStorage.getItem('token');
  const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
      'x-access-token': token,
    },
  });


  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    // Simulate searching for the bus by number or name
    // Replace this with actual logic to fetch the bus data
    const foundBus = await api.post('/businfo',{'Bus_number':busSearch})
    const busDetails = foundBus.data
    setFormData(busDetails); // Set the bus details in form
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async(e) => {
    e.preventDefault();
   
    const ModifyBus = await api.post('/modifybus',{...formData})
    console.log('Edited bus details:', ModifyBus.data);
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?bus,city')" }}>
      <div className="bg-black bg-opacity-50 p-4 min-h-screen flex flex-col justify-center items-center">
        <div className="bg-white p-8 shadow-lg rounded-2xl max-w-lg w-full">
          <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Search for Bus to Edit</h2>
          <form onSubmit={handleSearchSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Bus Number </label>
              <input
                type="text"
                value={busSearch}
                onChange={handleSearchChange}
                placeholder="Enter Bus Number"
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
                    name="Busnumber"
                    value={formData.Bus_number}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bus Name</label>
                  <input
                    type="text"
                    name="Bus_name"
                    value={formData.Bus_name}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Number of Seats</label>
                  <input
                    type="number"
                    name="Number_seat"
                    value={formData.Number_seat}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Price Per Seat</label>
                  <input
                    type="number"
                    name="Seat_price"
                    value={formData.Seat_price}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Source</label>
                  <input
                    type="text"
                    name="Source"
                    value={formData.Source}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Destination</label>
                  <input
                    type="text"
                    name="Destination"
                    value={formData.Destination}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Source Time</label>
                  <input
                    type="time"
                    name="Source_time"
                    value={formData.Source_time}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Destination Time</label>
                  <input
                    type="time"
                    name="Destination_time"
                    value={formData.Destination_time}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">Bus Type</label>
                  <select
                    name="Bus_type"
                    value={formData.Bus_type}
                    onChange={handleFormChange}
                    className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>Select Bus Type</option>
                    <option value="AC">AC</option>
                    <option value="Non-AC">Non-AC</option>
                  </select>
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
