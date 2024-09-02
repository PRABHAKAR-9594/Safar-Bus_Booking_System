import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../authcontext';
import logo from '../../assets/logo.png';
import help_logo from '../../assets/help_logo.jpg';
import search_logo from '../../assets/search_logo.png';
import about_logo from '../../assets/about_logo.png';
import ts_logo from '../../assets/ts_logo.png';
import mybooking_logo from '../../assets/mybooking_logo.jpg';
import contact_logo from '../../assets/contact_logo.jpeg';
import { selectUser, logout} from '../../Features/Slice';
import { useSelector, useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function Header( {userName="Ram"}) {
  // const { user, logout } = useAuth();
  // console.log('User:', user);
  // console.log('Logout:', logout);
  const user = useSelector(selectUser)
  const locUser = localStorage.getItem('user')
  console.log(locUser)
  
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout()); // Update Redux state
    localStorage.removeItem('user'); // Clear local storage
    localStorage.removeItem('role'); // Clear role from local storage
    navigate('/'); // Redirect to home page
  };

  return (
    
    <header className="fixed top-0 left-0 w-full z-50">
      
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-blue-800 bg-yellow-300 hover:bg-yellow-200 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none flex items-center"
            >
              <img src={mybooking_logo} alt="My Bookings Icon" className="w-5 h-5 mr-2" />
              My Bookings Page
            </Link>
            
            
           { locUser ? 
           (
              <div className="flex items-center">
                
                <span className="text-blue-800 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">
                  
                  Welcome, {locUser}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
                >
                  Logout
                </button>
              </div>
            ) : 
            (
              
              <Link
                to="/loginandreg"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2"
              >
  
                Login / Register
              </Link>
              
            ) }
          
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `flex items-center py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  <img src={search_logo} alt="Search Icon" className="w-5 h-5 mr-2" />
                  Search
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `flex items-center py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  <img src={about_logo} alt="About Us Icon" className="w-5 h-5 mr-2" />
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/status"
                  className={({ isActive }) =>
                    `flex items-center py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  <img src={ts_logo} alt="Ticket Status Icon" className="w-5 h-5 mr-2" />
                  Ticket Status
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `flex items-center py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  <img src={contact_logo} alt="Contact Us Icon" className="w-5 h-5 mr-2" />
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/help"
                  className={({ isActive }) =>
                    `flex items-center py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  <img src={help_logo} alt="Help Icon" className="w-5 h-5 mr-2" />
                  Help
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
