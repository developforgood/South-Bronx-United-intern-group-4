import React from 'react';
import { FaBell, FaCheck, FaSearch, FaUpload, FaThumbsUp } from 'react-icons/fa'; // Import the necessary icons
import NavBar from '../bar';

// EventWidget component
const EventWidget: React.FC = () => {
  return (
      <div className="bg-white p-4 rounded-lg shadow-md flex items-start mb-3 max-w-3xl mx-auto">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">Event Name</h2>
          <p className="text-gray-600 text-sm">Description...</p>
        </div>
        <div className="flex flex-col space-y-2 ml-3">
          <button className="flex items-center text-blue-500 border border-blue-500 px-3 py-1 rounded-lg text-xs hover:bg-blue-100 focus:outline-none">
            <FaCheck className="mr-1" /> Register
          </button>
          <button className="flex items-center text-yellow-500 border border-yellow-500 px-3 py-1 rounded-lg text-xs hover:bg-yellow-100 focus:outline-none">
            <FaBell className="mr-1" /> Notify Me
          </button>
        </div>
      </div>
  );
};

// ActionWidget component
const ActionWidget: React.FC = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-start mb-3 max-w-3xl mx-auto">
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Action Item</h2>
        <p className="text-gray-600 text-sm">Details about the action...</p>
      </div>
      <div className="flex flex-col space-y-2 ml-3">
        <button className="flex items-center text-green-500 border border-green-500 px-3 py-1 rounded-lg text-xs hover:bg-green-100 focus:outline-none">
          <FaUpload className="mr-1" /> Upload
        </button>
        <button className="flex items-center text-blue-500 border border-blue-500 px-3 py-1 rounded-lg text-xs hover:bg-blue-100 focus:outline-none">
          <FaThumbsUp className="mr-1" /> Vote
        </button>
      </div>
    </div>
  );
};

const EventsCalendar: React.FC = () => {
  return (
    <div>
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="sticky top-0 bg-gray-100 p-4 z-10 shadow-md">
        <h1 className="text-2xl font-bold text-gray-800 text-center">Events Calendar</h1>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Upcoming Events near me</h2>
        <button className="flex items-center text-blue-500 border border-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100 focus:outline-none mx-auto mb-6 block">
          <FaSearch className="mr-2" /> Search all events
        </button>
        <div>
          <EventWidget />
          <EventWidget />
          <EventWidget />
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Get Involved Online</h2>
        <ActionWidget /> {/* Use the new ActionWidget here */}
      </div>
      
    </div>
    <NavBar />
    </div>
  );
};

export default EventsCalendar;
