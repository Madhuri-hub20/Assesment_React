import React from "react";
import Sidebar from "./Components/SideBar";
import Header from "./Components/Header";
import ModelTable from "./Components/ModelTable";
import CreateNewModel from "./Components/CreateNewModel";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow bg-gray-100">
        {/* Header */}
        <Header />

        {/* Main Content Section */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            {/* Create New Model Button */}
            <CreateNewModel />
          </div>

          {/* Model Table */}
          <ModelTable />
        </div>
      </div>
    </div>
  );
};

export default App;
