import React, { useEffect, useState } from 'react';
import TopBar from '../BusTopbar/BusTopbar';
import FilterOptions from '../BusFilter/BusFilter';
import BusCard from '../BusCard/BusCard';
import axios from 'axios';

// Get things from localStorage
const Source = localStorage.getItem("Source");
const Destination = localStorage.getItem("Destination");
const Date = localStorage.getItem("Date");
const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'x-access-token': token,
  },
});

function BusResultsPage() {
  const [buses, setBuses] = useState([]);
  const [filters, setFilters] = useState({
    isAC: false,
    isNonAC: false,
    isSleeper: false,
    isSitting: false,
    isDay:false,
    isNight:false,
    isFoodAvalible:false,
    isFoodNotAvaliabe:false
  });

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await api.post('/busdata', { Source, Destination });
        setBuses(response.data); // Update state with the fetched bus data
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusData();
  }, [Source, Destination]); // Re-run if `source` or `Destination` changes

  // Filter logic
  const filteredBuses = buses.filter((bus) => {
    return (
      (!filters.isAC || bus.Bus_type === 'AC') &&
      (!filters.isNonAC || bus.Bus_type === 'Non-AC') &&
      (!filters.isSleeper || bus.Bus_Class === 'Sleeper') &&
      (!filters.isDay || bus.Timing === 'Day') &&
      (!filters.isNight || bus.Timing === 'Sittingz') &&
      (!filters.isSitting || bus.Bus_Class === 'Sitting') &&
      (!filters.isSitting || bus.Bus_Class === 'Sitting')

    );
  });

  // Inline styles to hide vertical scrollbar
  const hideScrollbarStyle = {
    overflowY: 'scroll',
    scrollbarWidth: 'none', // For Firefox
  };

  const hideScrollbarWebkit = {
    overflowY: 'scroll',
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 p-2">
      {/* Top Bar */}
      <TopBar source={Source} destination={Destination} date={Date} />

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
          {filteredBuses.map((bus) => (
            <BusCard key={bus._id} bus={bus} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BusResultsPage;
