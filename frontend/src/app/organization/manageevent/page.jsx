"use client";

import React, { useState } from 'react';

export default function ManageEvent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      {/* Header */}
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-4xl font-bold text-gray-900">Manage Events</h1>
      </header>

      {/* Search Bar and Create Event Button */}
      <div className="mb-8 flex items-center justify-between">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search events..."
          className="w-full max-w-md p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-200"
          style={{ height: '2.75rem' }} // Adjust height to match button
        />

        {/* Create Event Button */}
        <button
          onClick={handleOpenModal}
          className="ml-4 bg-lime-700 text-white py-3 px-6 rounded-md shadow hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-200"
          style={{ height: '2.75rem' }} // Matches height of search bar
        >
          + Create Event
        </button>
      </div>

      {/* Event Table */}
      <div className="bg-white p-8 rounded-md shadow-lg">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-sm uppercase tracking-wider">
              <th className="py-4 px-6 border-b">Event Name</th>
              <th className="py-4 px-6 border-b">Date</th>
              <th className="py-4 px-6 border-b">Location</th>
              <th className="py-4 px-6 border-b">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            <tr>
              <td className="py-4 px-6 border-b">Community Clean-Up</td>
              <td className="py-4 px-6 border-b">September 10, 2024</td>
              <td className="py-4 px-6 border-b">City Park</td>
              <td className="py-4 px-6 border-b">
                <button className="text-lime-600 hover:underline transition duration-200">Edit</button>
                <button className="text-red-600 hover:underline ml-4 transition duration-200">Delete</button>
              </td>
            </tr>
            <tr>
              <td className="py-4 px-6 border-b">Food Drive</td>
              <td className="py-4 px-6 border-b">September 5, 2024</td>
              <td className="py-4 px-6 border-b">Community Center</td>
              <td className="py-4 px-6 border-b">
                <button className="text-lime-600 hover:underline transition duration-200">Edit</button>
                <button className="text-red-600 hover:underline ml-4 transition duration-200">Delete</button>
              </td>
            </tr>
            {/* Add more event rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Create Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-md shadow-lg max-w-lg w-full">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Create Event</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="eventName" className="block text-gray-700 mb-2">Event Name</label>
                <input
                  id="eventName"
                  type="text"
                  placeholder="Enter event name"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="eventDate" className="block text-gray-700 mb-2">Date</label>
                <input
                  id="eventDate"
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="eventLocation" className="block text-gray-700 mb-2">Location</label>
                <input
                  id="eventLocation"
                  type="text"
                  placeholder="Enter event location"
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md shadow hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 mr-3 transition ease-in-out duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-lime-700 text-white py-2 px-4 rounded-md shadow hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-200"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
