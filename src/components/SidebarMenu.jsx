import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes, FaChevronDown } from 'react-icons/fa';

const SidebarMenu = ({ isOpen, toggleSidebar }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white text-black transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } transition-transform duration-300 ease-in-out shadow-xl z-50`}
    >
      {/* Close Button */}
      <div className="p-4 text-xl font-semibold border-b border-gray-400 flex justify-end items-center">
        <button onClick={toggleSidebar} className="text-black p-2 hover:text-red-500 transition duration-300">
          <FaTimes size={24} />
        </button>
      </div>

      {/* Sidebar Links */}
      <ul className="p-4 space-y-2">
        {/* Static Links */}
        {['Home', 'About'].map((item) => (
          <li key={item} className="hover:bg-gray-100 p-2 rounded transition duration-300">
            <Link
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              onClick={toggleSidebar}
              className="block w-full"
            >
              {item}
            </Link>
          </li>
        ))}

        {/* Dropdown: Properties */}
        <li className="hover:bg-gray-100 p-2 rounded transition duration-300">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown('Properties')}
          >
            Properties <FaChevronDown className={`${activeDropdown === 'Properties' ? 'rotate-180' : ''} transition-transform duration-300`} />
          </div>
          {activeDropdown === 'Properties' && (
            <ul className="pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              {['Simplex', 'Duplex', 'Bungalow', 'Land/Plot', 'Apartment'].map((item) => (
                <li key={item} className="hover:bg-gray-200 p-2 rounded transition duration-300">
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    onClick={toggleSidebar}
                    className="block w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Dropdown: Location */}
        <li className="hover:bg-gray-100 p-2 rounded transition duration-300">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown('Location')}
          >
            Location <FaChevronDown className={`${activeDropdown === 'Location' ? 'rotate-180' : ''} transition-transform duration-300`} />
          </div>
          {activeDropdown === 'Location' && (
            <ul className="pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              {['Puri', 'Cuttack', 'Bhubaneswar'].map((item) => (
                <li key={item} className="hover:bg-gray-200 p-2 rounded transition duration-300">
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    onClick={toggleSidebar}
                    className="block w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Static Links */}
        {[ 'Blog'].map((item) => (
          <li key={item} className="hover:bg-gray-100 p-2 rounded transition duration-300">
            <Link
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              onClick={toggleSidebar}
              className="block w-full"
            >
              {item}
            </Link>
          </li>
        ))}

        {/* Dropdown: Events */}
        <li className="hover:bg-gray-100 p-2 rounded transition duration-300">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleDropdown('Events')}
          >
            Events <FaChevronDown className={`${activeDropdown === 'Events' ? 'rotate-180' : ''} transition-transform duration-300`} />
          </div>
          {activeDropdown === 'Events' && (
            <ul className="pl-4 mt-2 space-y-1 transition-all duration-300 ease-in-out">
              {['Upcoming Events', 'Past Events'].map((item) => (
                <li key={item} className="hover:bg-gray-200 p-2 rounded transition duration-300">
                  <Link
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    onClick={toggleSidebar}
                    className="block w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Remaining Static Links */}
        {['Career', 'Contact', 'Login/SignUp'].map((item) => (
          <li key={item} className="hover:bg-gray-100 p-2 rounded transition duration-300">
            <Link
              to={`/${item.toLowerCase().replace(' ', '-')}`}
              onClick={toggleSidebar}
              className="block w-full"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarMenu;

