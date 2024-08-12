'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../bar';

interface StudentProps {
  name: string;
  photoUrl: string;
  description: string;
}

// Create the Student component
const Student: React.FC<StudentProps> = ({ name, photoUrl, description }) => {
  return (
    <div className="student-card">
      <img src={photoUrl} alt={`${name}'s photo`} className="student-photo" />
      <h2 className="student-name">{name}</h2>
      <p className="student-description">{description}</p>
    </div>
  );
};

const InfoAndLinks: React.FC = () => {
    const router = useRouter();

    const handleMissionClick = () => {
        router.push('/about');
    };

    const handleInfoClick = () => {
        router.push('/infoandlinks');
    };

    return (
    <>
    <div style={{"backgroundColor": "white", "padding": "10px 10px 10px 10px"}}>
        <h1>Student Features</h1>
    </div>
    <div style={{"display":"flex", "backgroundColor":"grey"}}>
        <button style={{"width":"30%"}} onClick={handleMissionClick} >Mission</button><button style={{"width":"30%"}} onClick={handleInfoClick}>Info/Links</button><button style={{"width":"30%"}} >Students</button>
      </div>
      <div style={{"padding":"10px 30px 10px 30px"}}>
      <Student
        name="John Doe"
        photoUrl="https://via.placeholder.com/430"
        description="John is a computer science major who loves coding and playing video games."
      />
      <br/>
      <br/>
      <Student
        name="Jane Smith"
        photoUrl="https://via.placeholder.com/430"
        description="Jane is a graphic designer with a passion for digital art and animation."
      />
      <br/>
      <br/>
      <Student
        name="JohnJane DoeSmith"
        photoUrl="https://via.placeholder.com/430"
        description="JaneJohn is a graphiccompouter designerscience with a passionwho for digitalplaying art and gamesanimation."
      />
    </div>
    <NavBar />
      </>
    );
  };

export default InfoAndLinks;
