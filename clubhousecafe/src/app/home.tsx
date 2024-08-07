import Image from "next/image";

// CenteredTitle.js
import React from 'react';

// App.js
import './App.css'; // Assuming Tailwind CSS is imported in App.css or index.css

function App() {
  return (
    <div className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <title> ClubHouse Cafe</title>
        <h1 className="text-2xl font-bold text-gray-800">Centered Container</h1>
        <p className="mt-4 text-gray-600">This container is centered both horizontally and vertically using Tailwind CSS.</p>
      </div>
    </div>
  );
}

