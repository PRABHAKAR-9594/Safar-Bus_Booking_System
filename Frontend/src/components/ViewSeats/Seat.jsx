import React from 'react';
import classNames from 'classnames';

const Seat = ({ seat, isSelected, onSeatSelect }) => {
  const seatClass = classNames(
    'w-16 h-16 flex items-center justify-center border rounded cursor-pointer',
    {
      'bg-green-500 text-white': isSelected,
      'bg-gray-200': !isSelected,
    }
  );

  return (
    <div className={seatClass} onClick={() => onSeatSelect(seat)}>
      {seat}
    </div>
  );
};

export default Seat;
