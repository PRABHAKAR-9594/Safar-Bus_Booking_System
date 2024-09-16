import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Features/Slice';
import { useEffect } from 'react';

export default function Register() {
  const [isLogin, setLogin] = useState(true);
  const [alert, setAlert] = useState({ message: '', type: '', countdown: 5 });
  const [countdown, setCountdown] = useState(5);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [register, setRegister] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Handling input changes for Register
  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
    setValidationErrors({ ...validationErrors, [e.target.name]: '' });
  };

  // Form validation
  const validateForm = () => {
    let errors = {};
    // Name validation
    if (register.name.length < 3 || register.name.length > 50) {
      errors.name = 'Name must be between 3 and 50 characters.';
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(register.email)) {
      errors.email = 'Please enter a valid email address.';
    }

    // Contact number validation
    if (!/^\d{10}$/.test(register.number)) {
      errors.number = 'Please enter a valid 10-digit contact number.';
    }

    // Password length validation
    if (register.password.length < 8 || register.password.length > 128) {
      errors.password = 'Password must be between 8 and 128 characters.';
    }

    // Password strength validation
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(
        register.password
      )
    ) {
      errors.password =
        'Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await axios.post('http://localhost:8080/register', register);
      setAlert({ message: "Registered Successfull , Now Login !", type: 'success', countdown: 5 });
      setCountdown(5)
      navigate('/');
    } catch (error) {
      setAlert({ message: 'Registration failed ' , type: 'success', countdown: 5 });
      setCountdown(5)
      alert();
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com)$/.test(loginEmail)) {
      setValidationErrors({ email: 'Please enter a valid email address.' });
      return;
    }

    if (loginPassword.length < 8 || loginPassword.length > 128) {
      setValidationErrors({
        password: 'Password must be between 8 and 128 characters.',
      });
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: loginEmail,
        password: loginPassword,
      });
      const token = response.data.AccessToken;
      const loginUser = response.data.name;
      const role = response.data.userType;
      const userId = response.data.userId;
      const Gmail= response.data.email
      console.log(Gmail);
      
            localStorage.setItem('username', loginUser);
            localStorage.setItem('role', role);
            localStorage.setItem('token', token);
            localStorage.setItem('ID',userId)
            localStorage.setItem('Gmail',Gmail)

      dispatch(login(loginUser));

      if (role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/');
      }
      setAlert({ message: "Login Successfull !", type: 'success', countdown: 5 });
      setCountdown(5)
    } catch (error) {
      setAlert({ message: 'Invalid Email or Password !' , type: 'error', countdown: 5 });
      setCountdown(5)
    }
  };
  useEffect(() => {
    if (alert.message) {
      const interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const timeout = setTimeout(() => {
        setAlert({ message: '', type: '', countdown: 5 });
      }, 5000);

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [alert.message]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50">
      <div className="relative w-full max-w-md p-8 bg-gray-100 rounded-lg border border-gray-300 shadow-lg">
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 left-4 text-blue-800 text-2xl font-bold hover:text-blue-600 transition-colors"
        >
          &larr;
        </button>
        {alert.message && (
        <div
          className={`absolute top-2 right-0 p-4 text-sm text-white rounded-lg shadow-lg transition-opacity duration-300 ${
            alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          }`}
          role="alert"
        >
          {alert.message} — Disappearing in {countdown} seconds
        </div>
      )}

        <div className="mt-12">
          <div className="flex border-b border-gray-300 mb-6">
            <button
              className={`w-1/2 py-3 text-lg font-semibold text-center ${
                isLogin
                  ? 'bg-blue-800 text-white border-b-4 border-blue-800'
                  : 'bg-gray-200 text-gray-700'
              } rounded-t-lg transition-colors`}
              onClick={() => setLogin(true)}
            >
              Login
            </button>
            <button
              className={`w-1/2 py-3 text-lg font-semibold text-center ${
                !isLogin
                  ? 'bg-blue-800 text-white border-b-4 border-blue-800'
                  : 'bg-gray-200 text-gray-700'
              } rounded-t-lg transition-colors`}
              onClick={() => setLogin(false)}
            >
              Register
            </button>
          </div>

          {isLogin ? (
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
              <h2 className="text-3xl font-extrabold text-center mb-4 text-blue-800">Login</h2>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              {validationErrors.email && <small className="text-red-600">{validationErrors.email}</small>}
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              {validationErrors.password && <small className="text-red-600">{validationErrors.password}</small>}
              <button type="submit" className="w-full py-3 text-lg font-semibold text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-900 transition-colors">
                LOGIN
              </button>
              <p className="text-center mt-4 text-gray-700">
                <a href="/ForgetPassword" className="text-blue-600 hover:underline">
                  Forgot Password?
                </a>
              </p>
              <p className="text-center mt-4 text-gray-700">
                Not a member?{' '}
                <a href="#" className="text-blue-600 hover:underline" onClick={() => setLogin(false)}>
                  Register Now
                </a>
              </p>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleRegSubmit}>
              <h2 className="text-3xl font-extrabold text-center mb-4 text-blue-800">Register</h2>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={register.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              {validationErrors.name && <small className="text-red-600">{validationErrors.name}</small>}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={register.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              {validationErrors.email && <small className="text-red-600">{validationErrors.email}</small>}
              <input
                type="text"
                name="number"
                placeholder="Contact Number"
                value={register.number}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              {validationErrors.number && <small className="text-red-600">{validationErrors.number}</small>}
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={register.password}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              {validationErrors.password && <small className="text-red-600">{validationErrors.password}</small>}
              <button type="submit" className="w-full py-3 text-lg font-semibold text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-900 transition-colors">
                REGISTER
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
