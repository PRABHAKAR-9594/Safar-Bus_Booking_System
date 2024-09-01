import React, { useState } from 'react';
import ModifyBusForm from './ModifyBusForm';

const ParentComponent = () => {
  const [busDetails, setBusDetails] = useState(null);

  const handleUpdate = (updatedBusDetails) => {
    console.log('Updated Bus Details:', updatedBusDetails);
  };

  // Simulate loading bus details after an API call
  useEffect(() => {
    const fetchBusDetails = async () => {
      const fetchedDetails = {
        busNumber: '123',
        busName: 'Express Bus',
        seats: 40,
        route: 'Downtown - Uptown',
        departureTime: '08:00',
        arrivalTime: '10:00',
        image: null
      };
      setBusDetails(fetchedDetails);
    };
    fetchBusDetails();
  }, []);

  return (
    <div>
      <ModifyBusForm busDetails={busDetails} onUpdate={handleUpdate} />
    </div>
  );
};

export default ParentComponent;
