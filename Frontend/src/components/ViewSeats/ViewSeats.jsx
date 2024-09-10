import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom
import SeatMap from './SeatMap';
import SeatLegend from './SeatLegend';
import TopBar from '../SearchBus/BusTopbar';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setSeatNumPrice } from '../../Features/SeatNumPriceSlice';


const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedClass = useSelector((state) => state.businfo.busClass)
  const price = useSelector((state) => state.businfo.price)

  

  const Source = useSelector(state => state.filter.source);
  const Destination = useSelector(state => state.filter.destination);
  const Date = useSelector(state => state.filter.date);

  

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      setMessage('');
    } else {
      if (selectedSeats.length < 5) {
        setSelectedSeats([...selectedSeats, seat]);
        setMessage('');
      } else {
        setMessage('Maximum 5 seats allowed at one time');
      }
    }
  };

  const handleBooking = () => {
    console.log(selectedClass)
    dispatch(setSeatNumPrice({ seatNum : selectedSeats, totalPrice : totalPrice}))
    
    if (selectedSeats.length === 0) {
      setMessage('Please select at least one seat to proceed');
    } else {
      navigate('/searchBus/viewSeats/Form', {
        state: { selectedSeats }, // Passing selected seats to the next page
      });
    }
  };
  

  const pricePerSeat = 50;
  const totalPrice = selectedSeats.length * price;

  return (
    <div className="mt-28 flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <TopBar source={Source} destination={Destination} date={Date} />
      <div className="flex flex-grow items-center justify-center p-4 mt-2">
        <div className={`flex flex-col w-full max-w-4xl bg-white p-6 rounded-lg shadow-xl relative overflow-auto `}>


          <SeatLegend />
          <SeatMap
            selectedSeats={selectedSeats}
            onSeatSelect={handleSeatSelect}
            busType={selectedClass}
          />
        </div>

        <div className="w-80 bg-white shadow-lg p-6 flex-none rounded-lg border border-gray-300 ml-6 transition-transform duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Selected Seats</h2>
          <div className="mb-4">
            {message && <p className="text-red-600 mb-3">{message}</p>}
            {selectedSeats.length === 0 ? (
              <p className="text-gray-600">No seats selected</p>
            ) : (
              <div className="flex flex-wrap gap-2">
                {selectedSeats.map((seat) => (
                  <div key={seat} className="bg-gradient-to-r from-green-500 to-green-700 text-white px-3 py-2 rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    {seat}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-gray-800">Total Price:</h3>
            <p className="text-lg font-bold text-gray-800">${totalPrice}</p>
          </div>
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            onClick={handleBooking}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeatSelection;
