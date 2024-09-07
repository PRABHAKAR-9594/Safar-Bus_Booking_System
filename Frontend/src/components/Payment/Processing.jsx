import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Processing = () => {
  const [seconds, setSeconds] = useState(30); // Initialize with 30 seconds
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (seconds === 0) {
      // Navigate to the desired URL when the timer ends
      navigate('/searchBus/viewSeats/Form/payment/receipt');
      return;
    }

    // Set up a timer to count down every second
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    // Clean up timer on component unmount
    return () => clearInterval(timer);
  }, [seconds, navigate]); // Add navigate as a dependency

  // Calculate the percentage of completion
  const progress = ((30 - seconds) / 30) * 100;

  return (
    <div className="bg-gradient-to-br from-purple-400 to-blue-400">
      <div className="bg-white">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">
          Payment Processing .....
        </h2>
        <p className="text-xl font-semibold text-gray-600 mb-6">
          Please hold on while we complete your transaction.
        </p>
        <p className="text-lg font-medium text-gray-700 mb-4">
          Time remaining: <span className="font-bold text-purple-600">{seconds}</span> seconds
        </p>

        {/* Progress Bar */}
        <div className="relative w-full h-4 bg-gray-300 rounded-full overflow-hidden mb-6">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Spinner */}
        <div className="flex justify-center items-center mt-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-600 border-opacity-75 border-solid"></div>
        </div>

        {/* Additional Message */}
        <p className="text-gray-500 mt-6">
          We appreciate your patience!
        </p>
      </div>
    </div>
  );
};

export default Processing;
