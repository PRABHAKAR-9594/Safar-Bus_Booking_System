import React, { useState } from 'react';
import axios from 'axios';

export default function PNRStatus() {
    const [pnrNumber, setPnrNumber] = useState('');
    const [passengerDetails, setPassengerDetails] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleCheckStatus = async (e) => {
        e.preventDefault();
        
        try {
            // Post request to fetch passenger details
            const response = await axios.post('http://localhost:8080/Ticketstatus', { PnrNumber: pnrNumber });
            console.log(response.data);
            if (response) {
                const passengerArray = response.data;
                const passengerData = passengerArray.PassangerDetails;
                setPassengerDetails(passengerData || []); // Default to an empty array if no passenger details are found
                setErrorMessage(''); // Clear any previous error messages
            } else {
                setPassengerDetails([]); // Clear passenger details if no valid response
                setErrorMessage('No passenger details found.');
            }
        } catch (error) {
            // Handle 400 error for invalid PNR number
            if (error.response && error.response.status === 400) {
                setErrorMessage('Please enter a valid PNR number!');
            } else {
                console.error(error);
                setErrorMessage('An error occurred while fetching the details. Please try again.');
            }
        }

        setPnrNumber("");
    };

    return (
        <div className="min-h-[800px] flex flex-col justify-center bg-gray-50">
            <div className="max-w-4xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-3xl text-gray-800 font-extrabold text-center mb-8">
                    Check Your PNR Status
                </h1>
                <form onSubmit={handleCheckStatus} className="flex flex-col items-center">
                    <div className="w-full max-w-lg">
                        <label htmlFor="pnr" className="text-lg font-semibold text-gray-700">
                            Enter your Ticket/Pnr Number:
                        </label>
                        <input
                            type="text"
                            id="pnr"
                            name="pnr"
                            value={pnrNumber}
                            onChange={(e) => setPnrNumber(e.target.value)}
                            placeholder="Enter PNR Number"
                            className="mt-2 py-3 px-3 w-full rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-orange-500 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg mt-7"
                    >
                        Check Status
                    </button>
                </form>

                {/* Error Message */}
                {errorMessage && (
                    <div className="mt-8 p-4 bg-red-100 border border-red-500 rounded-lg text-red-700 text-center">
                        {errorMessage}
                    </div>
                )}

                {/* Display Passenger Details */}
                {Array.isArray(passengerDetails) && passengerDetails.length > 0 && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {passengerDetails.map((passenger, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
                            >
                                <h2 className="text-xl font-bold text-blue-600 mb-2">
                                    Passenger {index + 1}
                                </h2>
                                <p className="text-lg text-gray-800 font-semibold">
                                    <span className="text-gray-600">Name:</span> {passenger.Fullname}
                                </p>
                                <p className="text-lg text-gray-800 font-semibold">
                                    <span className="text-gray-600">Seat Number:</span> {passenger.SeatNo}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
