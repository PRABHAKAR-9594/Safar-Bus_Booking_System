import React, { useState } from 'react';

export default function PNRStatus() {
    const [pnrNumber, setPnrNumber] = useState('');
    const [ticketStatus, setTicketStatus] = useState('');

    const handleCheckStatus = (e) => {
        e.preventDefault();
        // Mock API call to check the PNR status, in a real application it would be an API call
        if (pnrNumber === '1234567890') {
            setTicketStatus('Confirmed');
            setPnrNumber("")
        
        } else {
            setTicketStatus('Waiting List');
            setPnrNumber("")
        }
        
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

                {ticketStatus && (
                    <div className="mt-8 p-4 bg-white border border-blue-700 rounded-lg shadow-lg text-center transition duration-300 ease-in-out transform hover:scale-105">
                        <h2 className="text-2xl font-bold text-gray-800">Current Status</h2>
                        <p className={`mt-4 text-xl font-semibold ${ticketStatus === 'Confirmed' ? 'text-green-600' : 'text-red-600'} transition-colors duration-300 ease-in-out`}>
                            {ticketStatus}
                        </p>
                    </div>
                )}

                {/* Additional content like FAQ or Info */}
                <div className="mt-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
                    <ul className="list-disc pl-6 text-gray-600">
                        <li className="mt-2">
                            <strong>How to check PNR status?</strong> - Enter your PNR number in the box above and click "Check Status" to see your current ticket status.
                        </li>
                        <li className="mt-2">
                            <strong>What does "Waiting List" mean?</strong> - It indicates that your ticket is not yet confirmed. You may need to wait for confirmation.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
