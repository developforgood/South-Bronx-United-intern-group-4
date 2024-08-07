import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="h-screen relative">
      {/* Background Image Section */}
      <div className="absolute inset-0 h-[45%]">
        <img
          src="./Capture.svg" // Replace with the path to your image
          alt="Clubhouse Cafe Background"
          className="absolute inset-0 object-cover w-full h-full"
        />
      </div>

      {/* Title Box */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="absolute top-[40%] left-0 right-0 flex justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-50hh text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Clubhouse Cafe
            </h1>
          </div>
        </div>
      </div>

      {/* Main Content Below the Title Box */}
      <div className="pt-[30%] h-[70%] bg-gray-100 flex items-center justify-center">
        {/* Additional content goes here */}
        <p className="text-gray-700">Welcome to Clubhouse Cafe. Enjoy your stay!</p>
      </div>
    </div>
  );
};

export default HomePage;
