import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Features/Slice';

export default function Register({ currUser = "" }) {
  const [isLogin, setLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('PASSENGER');
  const [register, setRegister] = useState({
    name: '',
    email: '',
    number: '',
    password: '',
    role: 'PASSENGER'
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    });
  };

  const handleRoleChange = (e) => {
    const roleValue = e.target.value;
    setSelectedRole(roleValue);
    setRegister({ ...register, role: roleValue });
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();

    // Client-side validations
    if (register.name.length < 3 || register.name.length > 50) {
      alert("Name must be between 3 and 50 characters.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(register.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!/^\d{10}$/.test(register.number)) {
      alert("Please enter a valid 10-digit contact number.");
      return;
    }

    if (register.password.length < 8 || register.password.length > 128) {
      alert("Password must be between 8 and 128 characters.");
      return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/.test(register.password)) {
      alert("Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/register', register);
      alert("User registered successfully");
      navigate('/'); 
    } catch (error) {
      alert("Registration failed: " + error.response.data.message);
    }
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(loginEmail)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (loginPassword.length < 8 || loginPassword.length > 128) {
      alert("Password must be between 8 and 128 characters.");
      return;
    }

    try {
      const response = await axios.post('http://localhost:8080/login', {
        email: loginEmail,
        password: loginPassword,
        userType: selectedRole,
      });

      const token = response.data.AccessToken;
      const loginUser = response.data.name;
      const role = response.data.userType;

      localStorage.setItem("role", role);
      localStorage.setItem('token', token);

      dispatch(login(loginUser));

      alert("Login Successful");

      if (role === 'ADMIN') {
        navigate('/admin');
      } else {
        navigate('/');
      }
    } catch (error) {
      alert("Failed to login user: " + error.response.data.message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm z-50">
      <div className="relative w-full max-w-md p-8 bg-gray-100 rounded-lg border border-gray-300 shadow-lg">
        <button
          onClick={() => navigate('/')}  // Navigate to home page
          className="absolute top-4 left-4 text-blue-800 text-2xl font-bold hover:text-blue-600 transition-colors"
        >
          &larr;
        </button>

        <div className="mt-12">
          <div className="flex border-b border-gray-300 mb-6">
            <button className={`w-1/2 py-3 text-lg font-semibold text-center ${isLogin ? 'bg-blue-800 text-white border-b-4 border-blue-800' : 'bg-gray-200 text-gray-700'} rounded-t-lg transition-colors`} onClick={() => setLogin(true)}>
              Login
            </button>
            <button className={`w-1/2 py-3 text-lg font-semibold text-center ${!isLogin ? 'bg-blue-800 text-white border-b-4 border-blue-800' : 'bg-gray-200 text-gray-700'} rounded-t-lg transition-colors`} onClick={() => setLogin(false)}>
              Register
            </button>
          </div>

          {isLogin ? (
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
              <h2 className="text-3xl font-extrabold text-center mb-4 text-blue-800">Login</h2>
              <div className="flex items-center mb-4 space-x-4">
                <label className="flex items-center text-gray-800 font-semibold">
                  <input
                    type="radio"
                    value="PASSENGER"
                    checked={selectedRole === 'PASSENGER'}
                    onChange={handleRoleChange}
                    className="mr-2 h-5 w-5 text-blue-700 focus:ring-blue-500 border-gray-300"
                  />
                  Passenger
                </label>
                <label className="flex items-center text-gray-800 font-semibold">
                  <input
                    type="radio"
                    value="ADMIN"
                    checked={selectedRole === 'ADMIN'}
                    onChange={handleRoleChange}
                    className="mr-2 h-5 w-5 text-blue-700 focus:ring-blue-500 border-gray-300"
                  />
                  Admin
                </label>
              </div>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              <button type="submit" className="w-full py-3 text-lg font-semibold text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-900 transition-colors">LOGIN</button>
              <p className="text-center mt-4 text-gray-700">
                <a href="/ForgetPassword" className="text-blue-600 hover:underline">Forgot Password?</a>
              </p>
              <p className="text-center mt-4 text-gray-700">Not a member? <a href="#" className="text-blue-600 hover:underline" onClick={() => setLogin(false)}>Register Now</a></p>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleRegSubmit}>
              <h2 className="text-3xl font-extrabold text-center mb-4 text-blue-800">Register</h2>
              <div className="flex items-center mb-4 space-x-4">
                <label className="flex items-center text-gray-800 font-semibold">
                  <input
                    type="radio"
                    value="PASSENGER"
                    checked={register.role === 'PASSENGER'}
                    onChange={handleRoleChange}
                    className="mr-2 h-5 w-5 text-blue-700 focus:ring-blue-500 border-gray-300"
                  />
                  Passenger
                </label>
                <label className="flex items-center text-gray-800 font-semibold">
                  <input
                    type="radio"
                    value="ADMIN"
                    checked={register.role === 'ADMIN'}
                    onChange={handleRoleChange}
                    className="mr-2 h-5 w-5 text-blue-700 focus:ring-blue-500 border-gray-300"
                  />
                  Admin
                </label>
              </div>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={register.name}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={register.email}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              <input
                type="text"
                placeholder="Contact Number"
                name="number"
                value={register.number}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={register.password}
                onChange={handleChange}
                className="w-full p-3 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 transition-shadow"
                required
              />
              <button type="submit" className="w-full py-3 text-lg font-semibold text-white bg-blue-800 rounded-lg shadow-md hover:bg-blue-900 transition-colors">REGISTER</button>
              <p className="text-center mt-4 text-gray-700">Already a member? <a href="#" className="text-blue-600 hover:underline" onClick={() => setLogin(true)}>Login Now</a></p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
