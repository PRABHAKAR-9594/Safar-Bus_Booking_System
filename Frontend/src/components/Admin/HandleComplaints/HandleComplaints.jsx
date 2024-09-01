import React, { useState } from 'react';

const HandleComplaintsPage = () => {
  const [formData, setFormData] = useState({
    busNumber: '',
    startDate: '',
    endDate: ''
  });

  const [complaintData, setComplaintData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock Data (You would replace this with real API data)
    const mockComplaintData = [
      {
        date: '2024-08-15',
        user: 'John Doe',
        complaint: 'Bus arrived late by 30 minutes.',
        status: 'Pending'
      },
      {
        date: '2024-08-16',
        user: 'Jane Smith',
        complaint: 'AC was not working properly.',
        status: 'Resolved'
      },
      {
        date: '2024-08-17',
        user: 'Tom Johnson',
        complaint: 'Seats were uncomfortable.',
        status: 'Pending'
      }
    ];

    setComplaintData(mockComplaintData);
  };

  return (
    <div className="p-6 mt-8 mb-8 max-w-4xl mx-auto bg-gradient-to-r from-red-400 to-purple-500 shadow-lg rounded-lg">
      <h2 className="text-3xl font-extrabold text-white mb-6 text-center">Handle Complaints</h2>
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
            View Complaints
          </button>
        </div>
      </form>

      {complaintData && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-extrabold text-gray-800 mb-4">Complaints Report</h3>

          <div className="space-y-4">
            {complaintData.map((complaint, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
                <p className="text-lg text-gray-800">
                  <strong>Date:</strong> {complaint.date}
                </p>
                <p className="text-lg text-gray-800">
                  <strong>User:</strong> {complaint.user}
                </p>
                <p className="text-lg text-gray-800">
                  <strong>Complaint:</strong> {complaint.complaint}
                </p>
                <p className="text-lg text-gray-800">
                  <strong>Status:</strong> {complaint.status}
                </p>
                <div className="flex justify-between mt-4">
                  {complaint.status === 'Pending' && (
                    <button
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400"
                      onClick={() => handleResolve(index)}
                    >
                      Mark as Resolved
                    </button>
                  )}
                  <button
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400"
                    onClick={() => handleDelete(index)}
                  >
                    Delete Complaint
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  function handleResolve(index) {
    // Update complaint status to 'Resolved'
    setComplaintData((prevData) =>
      prevData.map((complaint, i) =>
        i === index ? { ...complaint, status: 'Resolved' } : complaint
      )
    );
  }

  function handleDelete(index) {
    // Remove complaint from the list
    setComplaintData((prevData) => prevData.filter((_, i) => i !== index));
  }
};

export default HandleComplaintsPage;
