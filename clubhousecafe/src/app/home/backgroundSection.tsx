// BackgroundSection.tsx
import React from 'react';

const BackgroundSection: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(./Capture.svg)', height: '50-vh' }}></div>
      {/* Content */}
      <div className=" p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800 items-center">Clubhouse Cafe</h1>
      </div>
    </div>
  );
};

export default BackgroundSection;
