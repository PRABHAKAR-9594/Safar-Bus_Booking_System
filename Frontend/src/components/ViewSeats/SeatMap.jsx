import React from 'react';
import Seat from './Seat';

const SeatMap = ({ selectedSeats, onSeatSelect, busType }) => {
  // Example seat layout for a sitting bus
  const sittingSeats = {
    row1: ['S1', 'S2', 'S3', 'S4'],
    row2: ['S5', 'S6', 'S7', 'S8'],
    row3: ['S9', 'S10', 'S11', 'S12'],
    row4: ['S13', 'S14', 'S15', 'S16']
  };

  // Example seat layout for a sleeper bus (lower and upper decks)
  const lowerDeckSeats = {
    left: [['L1', 'L2', 'L3', 'L4'], ['L5', 'L6', 'L7', 'L8']],
    right: [['R1', 'R2', 'R3', 'R4'], ['R5', 'R6', 'R7', 'R8']]
  };

  const upperDeckSeats = {
    left: [['U1', 'U2', 'U3', 'U4'], ['U5', 'U6', 'U7', 'U8']],
    right: [['U9', 'U10', 'U11', 'U12'], ['U13', 'U14', 'U15', 'U16']]
  };

  const renderSeatRow = (seats) => (
    <div className="flex mb-2">
      {seats.map((seat, index) => (
        seat ? (
          <Seat
            key={seat}
            seat={seat}
            isSelected={selectedSeats.includes(seat)}
            onSeatSelect={onSeatSelect}
          />
        ) : (
          <div key={index} className="w-12 h-12"></div> // Empty space for aisle
        )
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      {busType === 'sitting' && (
        <div className="flex flex-col items-center">
          {/* Combine rows S1 and S5, S9 and S13 with gaps */}
          <div className="flex items-center">
            {renderSeatRow(sittingSeats.row1)}
            <div className="w-16 h-16"></div> {/* Gap */}
            {renderSeatRow(sittingSeats.row2)}
          </div>
          <div className="flex items-center mt-2">
            {renderSeatRow(sittingSeats.row3)}
            <div className="w-16 h-16"></div> {/* Gap */}
            {renderSeatRow(sittingSeats.row4)}
          </div>
        </div>
      )}
      {busType === 'sleeper' && (
        <div className="flex flex-col items-center">
          {/* Lower Deck */}
          <div className="relative w-full max-w-4xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="/path/to/circle-icon.png" // Replace with your circle icon path
                alt="Circle Icon"
                className="w-10 h-10"
              />
            </div>
            <div className="flex">
              <div className="flex flex-col w-1/2 pr-2">
                {lowerDeckSeats.left.map((row, index) => (
                  <div key={index} className={`flex mb-2 ${index === 1 ? 'mt-8' : ''}`}>
                    {renderSeatRow(row)}
                  </div>
                ))}
              </div>
              <div className="flex flex-col w-1/2 pl-2">
                {lowerDeckSeats.right.map((row, index) => (
                  <div key={index} className={`flex mb-2 ${index === 1 ? 'mt-8' : ''}`}>
                    {renderSeatRow(row)}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 border-t border-dashed border-gray-500"></div>
          </div>
          
          {/* Upper Deck */}
          <div className="relative w-full max-w-4xl mt-8">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <img
                src="/path/to/circle-icon.png" // Replace with your circle icon path
                alt="Circle Icon"
                className="w-10 h-10"
              />
            </div>
            <div className="flex">
              <div className="flex flex-col w-1/2 pr-2">
                {upperDeckSeats.left.map((row, index) => (
                  <div key={index} className={`flex mb-2 ${index === 1 ? 'mt-8' : ''}`}>
                    {renderSeatRow(row)}
                  </div>
                ))}
              </div>
              <div className="flex flex-col w-1/2 pl-2">
                {upperDeckSeats.right.map((row, index) => (
                  <div key={index} className={`flex mb-2 ${index === 1 ? 'mt-8' : ''}`}>
                    {renderSeatRow(row)}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-20 border-t border-dashed border-gray-500"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SeatMap;
