import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full">
      <div className="px-4 py-4 flex justify-between items-center">
        {/* Left Section: Application Title */}
        <div className="flex items-center space-x-4">
          {/* Logo Alternative: App Name */}
          <h1 className="text-2xl font-bold ">
            AI/ML Model Builder
          </h1>
        </div>

        {/* Right Section: Search, Notification, and User */}
        <div className="flex items-center space-x-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search models..."
              className="w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button className="absolute right-3 top-2 text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m1.26-5.11A7.5 7.5 0 1112 4.5a7.5 7.5 0 016.91 10.26z"
                />
              </svg>
            </button>
          </div>

          {/* Notification Icon */}
          <button className="text-gray-600 hover:text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.5V11a6 6 0 10-12 0v3.5c0 .415-.162.815-.455 1.095L4 17h5m6 0a3 3 0 01-6 0m6 0H9"
              />
            </svg>
          </button>

          {/* User Avatar and Info */}
          <div className="flex items-center space-x-3">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <span className="text-sm font-medium text-gray-800 block">
                Neurotic Spy
              </span>
              <span className="text-xs text-gray-600">neurotic@taildo.com</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
