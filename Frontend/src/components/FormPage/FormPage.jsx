import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TopBar from '../BusTopbar/BusTopbar';

const PassengerDetailsForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectedSeats } = location.state || {};

  if (!selectedSeats || selectedSeats.length === 0) {
    return <p>No seats selected. Please go back and select seats.</p>;
  }

  const [passengerDetails, setPassengerDetails] = useState(
    selectedSeats.map(() => ({
      name: '',
      age: '',
      gender: '',
      mobile: '',
      address: '',
      errors: {
        name: '',
        age: '',
        gender: '',
        mobile: '',
        address: ''
      }
    }))
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (index, field, value) => {
    const updatedDetails = [...passengerDetails];
    updatedDetails[index][field] = value;
    updatedDetails[index].errors = validateField(field, value, updatedDetails[index].errors);
    setPassengerDetails(updatedDetails);
  };

  const validateField = (field, value, errors) => {
    switch (field) {
      case 'name':
        errors.name = value.length < 3 ? 'Full name must be at least 3 characters' : '';
        break;
      case 'age':
        errors.age = value < 1 || value > 120 ? 'Age must be between 1 and 120' : '';
        break;
      case 'gender':
        errors.gender = value === '' ? 'Gender is required' : '';
        break;
      case 'mobile':
        errors.mobile = !/^\d{10}$/.test(value) ? 'Mobile number must be a valid 10-digit number' : '';
        break;
      case 'address':
        errors.address = value.length < 10 ? 'Address must be at least 10 characters' : '';
        break;
      default:
        break;
    }
    return errors;
  };

  const scrollToError = () => {
    const firstErrorField = document.querySelector('.error');
    if (firstErrorField) {
      firstErrorField.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields before submission
    let isValid = true;
    const updatedDetails = [...passengerDetails];

    updatedDetails.forEach((passenger, index) => {
      const { name, age, gender, mobile, address, errors } = passenger;

      updatedDetails[index].errors = {
        ...validateField('name', name, errors),
        ...validateField('age', age, errors),
        ...validateField('gender', gender, errors),
        ...validateField('mobile', mobile, errors),
        ...validateField('address', address, errors)
      };

      if (
        updatedDetails[index].errors.name ||
        updatedDetails[index].errors.age ||
        updatedDetails[index].errors.gender ||
        updatedDetails[index].errors.mobile ||
        updatedDetails[index].errors.address
      ) {
        isValid = false;
      }
    });

    setPassengerDetails(updatedDetails);

    if (!isValid) {
      scrollToError();
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      alert('Details submitted successfully!');
      console.log(passengerDetails);
      setIsSubmitting(false);

      // Navigate to the payment page or next step
      navigate('/payment', { state: { passengerDetails } });
    }, 2000);
  };

  const isFormValid = () => {
    return passengerDetails.every(passenger => {
      return Object.values(passenger.errors).every(error => !error);
    });
  };

  const renderInputField = (type, index, field, placeholder) => (
    <input
      type={type}
      placeholder={placeholder}
      value={passengerDetails[index][field]}
      onChange={(e) => handleChange(index, field, e.target.value)}
      className={`block w-full mb-2 p-3 border-2 rounded-md focus:outline-none focus:border-blue-600 transition-all shadow-sm ${
        passengerDetails[index].errors[field] ? 'border-red-500 error' : 'border-gray-300'
      }`}
      required
    />
  );

  return (
    <div className="p-8 bg-gradient-to-r from-indigo-50 to-purple-50 min-h-screen animate-fadeIn">
      <TopBar source="Mumbai" destination="Pune" date="2024-09-01" />
      <h2 className="text-4xl font-semibold text-indigo-800 mb-8">Passenger Details</h2>

      <form onSubmit={handleSubmit} className="space-y-10">
        {selectedSeats.map((seat, index) => (
          <div key={seat} className="p-6 bg-white rounded-xl shadow-md transition-transform hover:scale-105 animate-fadeInSlow">
            <h3 className="text-2xl font-medium text-indigo-700 mb-4">Seat {seat}:</h3>

            {/* Grid Layout for Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name Field */}
              {renderInputField('text', index, 'name', 'Full Name')}
              {passengerDetails[index].errors.name && (
                <p className="text-red-500">{passengerDetails[index].errors.name}</p>
              )}

              {/* Age Field */}
              {renderInputField('number', index, 'age', 'Age')}
              {passengerDetails[index].errors.age && (
                <p className="text-red-500">{passengerDetails[index].errors.age}</p>
              )}

              {/* Gender Field */}
              <select
                value={passengerDetails[index].gender}
                onChange={(e) => handleChange(index, 'gender', e.target.value)}
                className="block w-full mb-2 p-3 border-2 rounded-md focus:outline-none focus:border-blue-600 transition-all shadow-sm"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {passengerDetails[index].errors.gender && (
                <p className="text-red-500">{passengerDetails[index].errors.gender}</p>
              )}

              {/* Mobile Field */}
              {renderInputField('tel', index, 'mobile', 'Mobile Number')}
              {passengerDetails[index].errors.mobile && (
                <p className="text-red-500">{passengerDetails[index].errors.mobile}</p>
              )}

              {/* Address Field */}
              {renderInputField('text', index, 'address', 'Address')}
              {passengerDetails[index].errors.address && (
                <p className="text-red-500">{passengerDetails[index].errors.address}</p>
              )}
            </div>
          </div>
        ))}

        <button
          type="submit"
          className="bg-indigo-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-transform transform hover:scale-105 active:scale-95"
          disabled={!isFormValid() || isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Details'}
        </button>
      </form>
    </div>
  );
};

export default PassengerDetailsForm;
