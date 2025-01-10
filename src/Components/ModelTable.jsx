import React, { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import CreateNewModel from "./CreateNewModel"; 
import { AiOutlineCalendar, AiOutlineSearch, AiOutlineFilter } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { BsCardText } from "react-icons/bs";
import { MdOutlineAccessTime, MdOutlineMoreHoriz } from "react-icons/md";

const ModelTable = () => {
  const [data] = useState([
    {
      id: "4514246",
      name: "Blonde Drizzle",
      type: "Extraction",
      description: "Edit Customer ...",
      createdOn: "29/02/2024",
      lastTrainedOn: "29/02/2024",
      status: "Active",
    },
    ...Array(97).fill({
      id: "4514246",
      name: "Blonde Drizzle",
      type: "Extraction",
      description: "Edit Customer ...",
      createdOn: "29/02/2024",
      lastTrainedOn: "29/02/2024",
      status: "Active",
    }),
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5; // Changed to 5 rows per page
  const totalPages = Math.ceil(data.length / rowsPerPage);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getVisiblePages = () => {
    const maxVisible = 5;
    let start = Math.max(currentPage - Math.floor(maxVisible / 2), 1);
    let end = Math.min(start + maxVisible - 1, totalPages);

    if (end - start < maxVisible - 1) {
      start = Math.max(end - maxVisible + 1, 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const currentData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Model Library</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            + Create New Model
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center flex-grow bg-gray-100 rounded-lg px-3">
          <AiOutlineSearch className="text-gray-500 text-xl mr-2" />
          <input
            type="text"
            placeholder="Search by Name, ID"
            className="p-2 w-full bg-transparent border-none focus:outline-none"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
          <AiOutlineFilter className="text-gray-500 text-xl" />
          <span>Filters</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition">
          <AiOutlineCalendar className="text-gray-500" />
          <span>April 11 - April 24</span>
        </button>
      </div>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <HiOutlineDocumentText className="text-gray-600" />
                  Model Name
                </div>
              </th>
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <BiCategory className="text-gray-600" />
                  Model Type
                </div>
              </th>
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <BsCardText className="text-gray-600" />
                  Description
                </div>
              </th>
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <AiOutlineCalendar className="text-gray-600" />
                  Created On
                </div>
              </th>
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <MdOutlineAccessTime className="text-gray-600" />
                  Last Trained On
                </div>
              </th>
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <AiOutlineFilter className="text-gray-600" />
                  Status
                </div>
              </th>
              <th className="py-3 px-4">
                <div className="flex items-center gap-2">
                  <MdOutlineMoreHoriz className="text-gray-600" />
                  Action
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item, index) => (
              <tr
                key={index}
                className="border-b hover:bg-gray-50 transition duration-200"
              >
                <td className="py-3 px-4">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-gray-500">ID: {item.id}</div>
                </td>
                <td className="py-3 px-4">{item.type}</td>
                <td className="py-3 px-4">{item.description}</td>
                <td className="py-3 px-4">{item.createdOn}</td>
                <td className="py-3 px-4">{item.lastTrainedOn}</td>
                <td className="py-3 px-4">
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <FiMoreVertical className="text-gray-600 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-6">
        <p className="text-sm text-gray-600">
          Showing {rowsPerPage * (currentPage - 1) + 1} to{" "}
          {Math.min(rowsPerPage * currentPage, data.length)} of {data.length}{" "}
          results
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            Previous
          </button>
          {getVisiblePages().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-3 py-1 rounded-lg ${
                currentPage === page
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <CreateNewModel isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default ModelTable;
