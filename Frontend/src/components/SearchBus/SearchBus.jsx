import React, { useState } from 'react';
import TopBar from '../BusTopbar/BusTopbar';
import FilterOptions from '../BusFilter/BusFilter';
import BusCard from '../BusCard/BusCard';


// Inline styles to hide vertical scrollbar
const hideScrollbarStyle = {
  overflowY: 'scroll',
  scrollbarWidth: 'none', // For Firefox
};

const hideScrollbarWebkit = {
  overflowY: 'scroll',
};

function BusResultsPage() {
  // Sample data for buses
  const [buses, setBuses] = useState([
    {
      name: 'Express Line',
      number: 'EXP123',
      isAC: false,
      classType: 'Sitting',
      source: 'Mumbai',
      destination: 'Pune',
      sourceTime: '10:00 AM',
      destinationTime: '2:00 PM',
      totalTime: '4 hrs',
      price: 500,
      seatsAvailable: 20
    },

    {
      name: 'Express Line',
      number: 'EXP123',
      isAC: false,
      classType: 'Sitting',
      source: 'Mumbai',
      destination: 'Pune',
      sourceTime: '10:00 AM',
      destinationTime: '2:00 PM',
      totalTime: '4 hrs',
      price: 500,
      seatsAvailable: 20
    },

    {
      name: 'Express Line',
      number: 'EXP123',
      isAC: false,
      classType: 'Sitting',
      source: 'Mumbai',
      destination: 'Pune',
      sourceTime: '10:00 AM',
      destinationTime: '2:00 PM',
      totalTime: '4 hrs',
      price: 500,
      seatsAvailable: 20
    },

    {
      name: 'Express Line',
      number: 'EXP123',
      isAC: false,
      classType: 'Sitting',
      source: 'Mumbai',
      destination: 'Pune',
      sourceTime: '10:00 AM',
      destinationTime: '2:00 PM',
      totalTime: '4 hrs',
      price: 500,
      seatsAvailable: 20
    },

    {
      name: 'Express Line',
      number: 'EXP123',
      isAC: false,
      classType: 'Sitting',
      source: 'Mumbai',
      destination: 'Pune',
      sourceTime: '10:00 AM',
      destinationTime: '2:00 PM',
      totalTime: '4 hrs',
      price: 500,
      seatsAvailable: 20
    },
    // Add more buses as needed
  ]);

  const [filters, setFilters] = useState({
    isAC: false,
    isNonAC: false,
    isSleeper: false,
    isSitting: false,
  });

  // Filter logic
  const filteredBuses = buses.filter((bus) => {
    return (
      (!filters.isAC || bus.isAC) &&
      (!filters.isNonAC || !bus.isAC) &&
      (!filters.isSleeper || bus.classType === 'Sleeper') &&
      (!filters.isSitting || bus.classType === 'Sitting')
    );
  });

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 p-2">
      {/* Top Bar */}
      <TopBar source="Mumbai" destination="Pune" date="2024-09-01" />

      <div className="flex mt-32 h-[calc(100vh-64px)]"> {/* Adjust the height according to the header height */}
        {/* Left Section (Filters) */}
        <div className="w-1/4 pr-4 relative h-full">
          <div 
            style={{ ...hideScrollbarStyle, ...hideScrollbarWebkit }}
            className="sticky top-0 bottom-0"
          >
            <FilterOptions filters={filters} setFilters={setFilters} />
          </div>
        </div>

        {/* Right Section (Bus Cards) */}
        <div 
          className="w-3/4 flex flex-col space-y-4"
          style={{ ...hideScrollbarStyle, ...hideScrollbarWebkit }}
        >
          {filteredBuses.map((bus, index) => (
            <BusCard key={index} bus={bus} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusResultsPage;
