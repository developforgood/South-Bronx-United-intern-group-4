import Image from "next/image";

// CenteredTitle.js
import React from 'react';
import BackgroundSection from './backgroundSection';


// App.js
//import '../App.css'; // Assuming Tailwind CSS is imported in App.css or index.css

export default function App() {
  return (

    <div className="bg-gray-100 h-screen flex items-start justify-center">
        <Image
              src="/./Capture.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
        <BackgroundSection/>

    </div>
  );
}


