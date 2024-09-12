import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MyBooking() {
    const [bookings, setBookings] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    // Fetch bookings on component mount
    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:8080/mybookings');
                setBookings(response.data);
            } catch (error) {
                console.error('Error fetching bookings:', error);
                setErrorMessage('Failed to load bookings. Please try again.');
            }
        };
        fetchBookings();
    }, []);

    // Handle passenger cancellation
    const handleCancelPassenger = async (bookingId, passengerId) => {
        try {
            await axios.delete(`http://localhost:8080/cancelbooking/${bookingId}/${passengerId}`);
            // Filter out the canceled passenger
            setBookings(prevBookings =>
                prevBookings.map(booking =>
                    booking._id === bookingId
                        ? { ...booking, PassangerDetails: booking.PassangerDetails.filter(p => p._id !== passengerId) }
                        : booking
                )
            );
        } catch (error) {
            console.error('Error canceling passenger:', error);
            setErrorMessage('Failed to cancel the passenger. Please try again.');
        }
    };

    return (
        <div className="min-h-[800px] flex flex-col justify-center bg-gray-50">
            <div className="max-w-6xl mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-3xl text-gray-800 font-extrabold text-center mb-8">
                    My Bookings
                </h1>
                
                {/* Error Message */}
                {errorMessage && (
                    <div className="mb-4 p-4 bg-red-100 border border-red-500 rounded-lg text-red-700 text-center">
                        {errorMessage}
                    </div>
                )}

                {/* Display Bookings */}
                {Array.isArray(bookings) && bookings.length > 0 ? (
                    bookings.map((booking, index) => (
                        <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Booking ID: {booking._id}
                            </h2>
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">
                                Bus: {booking.BusName} | Date: {new Date(booking.TravelDate).toLocaleDateString()}
                            </h3>
                            <ul className="mb-4">
                                {booking.PassangerDetails.map((passenger, passengerIndex) => (
                                    <li key={passengerIndex} className="flex justify-between items-center mb-3 p-4 bg-gray-50 rounded-lg shadow-sm">
                                        <div>
                                            <p className="text-lg font-semibold text-gray-800">
                                                Name: {passenger.Fullname}
                                            </p>
                                            <p className="text-gray-600">Seat No: {passenger.SeatNo}</p>
                                        </div>
                                        <button
                                            onClick={() => handleCancelPassenger(booking._id, passenger._id)}
                                            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
                                        >
                                            Cancel Ticket
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <div className="text-center text-lg text-gray-700">
                        No bookings found.
                    </div>
                )}
            </div>
        </div>
    );
}
