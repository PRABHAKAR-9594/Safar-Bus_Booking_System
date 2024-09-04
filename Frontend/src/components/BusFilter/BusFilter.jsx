import React from 'react';

function FilterOptions({ filters, setFilters }) {
  const handleCheckboxChange = (e) => {
    const { name, checked, value } = e.target;

    if (name === 'timing') {
      setFilters((prevFilters) => {
        const newTiming = checked
          ? [...(prevFilters.timing || []), value]
          : (prevFilters.timing || []).filter((item) => item !== value);

        return {
          ...prevFilters,
          timing: newTiming,
        };
      });
    } else {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [name]: checked,
      }));
    }
  };

  const handleClearFilters = () => {
    setFilters({
      isAC: false,
      isNonAC: false,
      isSleeper: false,
      isSitting: false,
      timing: [],
      foodFacility: false,
    });
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow-lg border border-gray-200 relative h-[calc(100vh-64px)] overflow-y-auto">
      <button 
        onClick={handleClearFilters} 
        className="absolute top-4 right-4 text-sm text-blue-600 hover:underline"
      >
        Clear Filters
      </button>
      
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Filter Options</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Bus Type</h3>
        <div className="space-y-2">
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="isAC"
              checked={filters.isAC}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300"
            />
            <span className="ml-3 text-lg">AC</span>
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="isNonAC"
              checked={filters.isNonAC}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300"
            />
            <span className="ml-3 text-lg">Non-AC</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Bus Class</h3>
        <div className="space-y-2">
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="isSleeper"
              checked={filters.isSleeper}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300"
            />
            <span className="ml-3 text-lg">Sleeper</span>
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="isSitting"
              checked={filters.isSitting}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300"
            />
            <span className="ml-3 text-lg">Sitting</span>
          </label>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Timing</h3>
        <div className="space-y-2">
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="timing"
              value="Day"
              checked={(filters.timing || []).includes('Day')}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300"
            />
            <span className="ml-3 text-lg">Day</span>
          </label>
          <label className="flex items-center text-gray-700">
            <input
              type="checkbox"
              name="timing"
              value="Night"
              checked={(filters.timing || []).includes('Night')}
              onChange={handleCheckboxChange}
              className="form-checkbox h-5 w-5 text-blue-600 border-gray-300"
            />
            <span className="ml-3 text-lg">Night</span>
          </label>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Food Facility</h3>
        <label className="flex items-center text-gray-700">
          <input
            type="checkbox"
            name="foodFacility"
            checked={filters.foodFacility}
            onChange={handleCheckboxChange}
            className="form-checkbox h-5 w-5 text-blue-600 border-gray-300"
          />
          <span className="ml-3 text-lg">Available</span>
        </label>
      </div>
    </div>
  );
}

export default FilterOptions;
