import React, { useState } from "react";
import { FaBus, FaRoute, FaUsers, FaDollarSign, FaCalendarAlt, FaComments } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  const [selectedAction, setSelectedAction] = useState(null);

  const handleActionChange = (action) => {
    setSelectedAction(action);
  };

  return (
    <div className="min-h-[76vh] bg-gradient-to-r from-purple-300 to-blue-400 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center p-8">
        <p className="text-xl font-medium text-gray-700 mb-8 text-center animate-fade-in-down animation-delay-500">
          Manage bus operations efficiently with the following options.
        </p>

        {/* Admin Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mb-12 animate-fade-in-up animation-delay-1000">
          <Link to="/admin/addbus" className="hover:scale-105">
            <button     
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-6 px-8 w-full h-full rounded-lg shadow-lg transition-transform duration-300 flex items-center justify-center space-x-2"
            >
              <FaBus className="text-3xl" />
              <span>Add New Bus</span>
            </button>
          </Link>

          <Link to="/admin/modifybus" className="hover:scale-105">
            <button
              onClick={() => handleActionChange("modifyBus")}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-6 px-8 w-full h-full rounded-lg shadow-lg transition-transform duration-300 flex items-center justify-center space-x-2"
            >
              <FaRoute className="text-3xl" />
              <span>Modify Existing Bus</span>
            </button>
          </Link>

          <Link to="/admin/deletebus" className="hover:scale-105">
            <button
              onClick={() => handleActionChange("deleteBus")}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-6 px-8 w-full h-full rounded-lg shadow-lg transition-transform duration-300 flex items-center justify-center space-x-2"
            >
              <FaUsers className="text-3xl" />
              <span>Delete Bus</span>
            </button>
          </Link>

          <Link to="/admin/viewrevenue" className="hover:scale-105">
            <button
              onClick={() => handleActionChange("viewRevenue")}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-6 px-8 w-full h-full rounded-lg shadow-lg transition-transform duration-300 flex items-center justify-center space-x-2"
            >
              <FaDollarSign className="text-3xl" />
              <span>View Revenue</span>
            </button>
          </Link>

          <Link to="/admin/viewbookings" className="hover:scale-105">
            <button
              onClick={() => handleActionChange("viewBookings")}
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-6 px-8 w-full h-full rounded-lg shadow-lg transition-transform duration-300 flex items-center justify-center space-x-2"
            >
              <FaCalendarAlt className="text-3xl" />
              <span>View Bookings & Reports</span>
            </button>
          </Link>

          <Link to="/admin/handlecomplaints" className="hover:scale-105">
            <button
              onClick={() => handleActionChange("handleComplaints")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-6 px-8 w-full h-full rounded-lg shadow-lg transition-transform duration-300 flex items-center justify-center space-x-2"
            >
              <FaComments className="text-3xl" />
              <span>Handle Complaints</span>
            </button>
          </Link>
        </div>

        {/* Admin Action Content */}
        <div className="bg-gradient-to-br from-white to-blue-100 p-10 rounded-lg shadow-xl w-full max-w-4xl text-center">
          <h3 className="text-2xl font-semibold text-gray-700">
            Please select an action to proceed.
          </h3>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
