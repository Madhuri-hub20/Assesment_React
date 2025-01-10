import React from "react";
import {
  FiDatabase,
  FiBox,
  FiLayers,
  FiSettings,
  FiHeadphones,
} from "react-icons/fi";

const Sidebar = () => {
  const menuSections = [
    {
      title: "Model Library",
      items: [
        { name: "Model Library", icon: <FiDatabase />, active: true },
      ],
    },
    {
      title: "Extraction Builder",
      items: [
        { name: "Label Data", icon: <FiBox />, active: false },
        { name: "Model", icon: <FiLayers />, active: false },
        { name: "Test", icon: <FiLayers />, active: false },
      ],
    },
    {
      title: "Help",
      items: [
        { name: "Setting", icon: <FiSettings />, active: false },
        { name: "Support", icon: <FiHeadphones />, active: false },
      ],
    },
  ];

  return (
    <div className="w-64 h-screen bg-white text-black shadow-md flex flex-col">
      {/* Logo Section */}
      <div className="px-6 py-4 flex items-center border-b bg-gray-100">
        <img
          src="/src/assets/Aventisia.png" // Path to your logo
          alt="Company Logo"
          className="h-10 w-auto " // Adjust the size as needed
        />
   
      </div>

      {/* Menu Sections */}
      <nav className="flex-grow mt-4">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            {/* Section Title */}
            <h2 className="px-4 py-2 text-sm font-semibold text-gray-500">
              {section.title}
            </h2>

            {/* Menu Items */}
            <ul>
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg cursor-pointer ${
                    item.active
                      ? "bg-indigo-600 text-white"
                      : "text-gray-600 hover:bg-gray-100 hover:text-black"
                  }`}
                >
                  <span className="text-xl mr-3">{item.icon}</span>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
