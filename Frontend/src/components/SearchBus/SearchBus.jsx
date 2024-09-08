import React, { useEffect, useState } from 'react';
import TopBar from '../BusTopbar/BusTopbar';
import FilterOptions from '../BusFilter/BusFilter';
import BusCard from '../BusCard/BusCard';
import axios from 'axios';
import { useSelector } from 'react-redux';

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'x-access-token': token,
  },
});

function BusResultsPage() {
  const Source = useSelector(state => state.filter.source);
  const Destination = useSelector(state => state.filter.destination);
  const Date = useSelector(state => state.filter.date);

  const [buses, setBuses] = useState([]);
  const [filters, setFilters] = useState({
    isAC: false,
    isNonAC: false,
    isSleeper: false,
    isSitting: false,
    isDay: false,
    isNight: false,
    isFoodAvailable: false,
    isFoodNotAvailable: false
  });

  useEffect(() => {
    const fetchBusData = async () => {
      try {
        const response = await api.post('/busdata', { Source, Destination });
        setBuses(response.data);
      } catch (error) {
        console.error('Error fetching bus data:', error);
      }
    };

    fetchBusData();
  }, [Source, Destination]);

  const calculateTotalTime = (buses) => {
    return buses.reduce((total, bus) => {
      try {
        // Ensure the Source_time and Destination_time are valid date strings
        const sourceTimeStr = bus.Source_time;
        const destinationTimeStr = bus.Destination_time;
        
        // Log the date strings for debugging
        console.log(`Source Time String: ${sourceTimeStr}`);
        console.log(`Destination Time String: ${destinationTimeStr}`);
        
        const sourceTime = new Date(sourceTimeStr);
        const destinationTime = new Date(destinationTimeStr);
  
        // Check for invalid dates
        if (isNaN(sourceTime) || isNaN(destinationTime)) {
          console.warn(`Invalid date encountered: ${sourceTimeStr} or ${destinationTimeStr}`);
          return total;
        }
  
        const travelTime = (destinationTime - sourceTime) / (1000 * 60 * 60); // Convert milliseconds to hours
        return total + travelTime;
      } catch (error) {
        console.error('Error calculating travel time:', error);
        return total;
      }
    }, 0);
  };

  const filteredBuses = buses.filter((bus) => {
    const matchesAC = filters.isAC && bus.Bus_type === 'AC';
    const matchesNonAC = filters.isNonAC && bus.Bus_type === 'Non-AC';
    const matchesACOrNonAC = (!filters.isAC && !filters.isNonAC) || matchesAC || matchesNonAC;

    const matchesSleeper = filters.isSleeper && bus.Bus_Class === 'Sleeper';
    const matchesSitting = filters.isSitting && bus.Bus_Class === 'Sitting';
    const matchesSleeperorSitting = (!filters.isSleeper && !filters.isSitting) || matchesSleeper || matchesSitting;

    const matchesDay = filters.isDay && bus.Timing === 'Day';
    const matchesNight = filters.isNight && bus.Timing === 'Night';
    const matchesDayorNight = (!filters.isDay && !filters.isNight) || matchesDay || matchesNight;

    const matchesFoodAvailable = filters.isFoodAvailable && bus.Food_Facility === 'Available';
    const matchesFoodNotAvailable = filters.isFoodNotAvailable && bus.Food_Facility === 'Not Available';
    const matchesFoodAvailableOrNot = (!filters.isFoodAvailable && !filters.isFoodNotAvailable) || matchesFoodAvailable || matchesFoodNotAvailable;

    return (
      matchesACOrNonAC &&
      matchesSleeperorSitting &&
      matchesFoodAvailableOrNot &&
      matchesDayorNight
    );
  });

  const totalTravelTime = calculateTotalTime(filteredBuses);

  const hideScrollbarStyle = {
    overflowY: 'scroll',
    scrollbarWidth: 'none', // For Firefox
  };

  const hideScrollbarWebkit = {
    overflowY: 'scroll',
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 to-blue-400 p-2">
      <TopBar source={Source} destination={Destination} date={Date} />

      <div className="flex mt-32 h-[calc(100vh-64px)]">
        <div className="w-1/4 pr-4 relative h-full">
          <div 
            style={{ ...hideScrollbarStyle, ...hideScrollbarWebkit }}
            className="sticky top-0 bottom-0"
          >
            <FilterOptions filters={filters} setFilters={setFilters} />
          </div>
        </div>

        <div 
          className="w-3/4 flex flex-col space-y-4"
          style={{ ...hideScrollbarStyle, ...hideScrollbarWebkit }}
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Total Travel Time: {totalTravelTime.toFixed(2)} hours</h3>
          </div>
          {filteredBuses.length > 0 ? (
            filteredBuses.map((bus) => (
              <BusCard key={bus._id} bus={bus} />
            ))
          ) : (
            <div>No buses match the selected filters</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BusResultsPage;
