import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex items-center justify-center">
      <header className="flex items-center space-x-4">
        <img src="/logo.jpeg" alt="Logo" className="h-18 w-40" />
        <NavLink
          to="/men"
          className={({ isActive }) =>
            isActive ? "text-pink-400 font-bold" : "text-gray-600 hover:text-gray-900"
          }
        >
          Men
        </NavLink>
        <NavLink
          to="/women"
          className={({ isActive }) =>
            isActive ? "text-pink-400 font-bold" : "text-gray-600 hover:text-gray-900"
          }
        >
          Women
        </NavLink>
        <NavLink
          to="/kids"
          className={({ isActive }) =>
            isActive ? "text-pink-400 font-bold" : "text-gray-600 hover:text-gray-900"
          }
        >
          Kids
        </NavLink>
        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            isActive ? "text-pink-400 font-bold" : "text-gray-600 hover:text-gray-900"
          }
        >
          Calendar
        </NavLink>

        <NavLink
          to="/contest"
          className={({ isActive }) =>
            isActive ? "text-pink-400 font-bold" : "text-gray-600 hover:text-gray-900"
          }
        >
          BitMoji Contest
        </NavLink>
      </header>
    </div>
  );
}

export default Header;
