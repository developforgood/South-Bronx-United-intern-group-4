'use client';
import React from 'react';
import './About.css'; // Import the CSS file for styling
import { useRouter } from 'next/navigation';

const About: React.FC = () => {
    const router = useRouter();

    const handleInfoClick = () => {
        router.push('/infoandlinks');
    };

    const handleStudentsClick = () => {
        router.push('/studentfeatures');
    };

    return (
        <>
        <div style={{"backgroundColor": "white", "padding": "10px 10px 10px 10px"}}>
            <h1>About</h1>
        </div>
        <div style={{"display":"flex", "backgroundColor":"grey"}}>
        <button style={{"width":"30%"}}>Mission</button><button style={{"width":"30%"}} onClick={handleInfoClick} >Info/Links</button><button style={{"width":"30%"}} onClick={handleStudentsClick} >Students</button>
        </div>
        <div className="about-page">
            <section className="statistics">
            <div style={{"backgroundColor": "white"}}>
                </div>
                <br />
                <h2><b>Our Mission</b></h2>
                <div style={{"backgroundColor": "white", "padding":"5px 5px 5px 5px", "fontSize": "1.1em"}}>
                    <p>
                    South Bronx United uses soccer as a tool for social change aiming to help youth build character, teamwork,
                    and leadership so that they can succeed in high school, college, careers, their community, and beyond.
                    We strive to promote educational achievement, health and wellness, and character development
                    through activities on and off the soccer field and unite a diverse community toward common positive goals.
                    </p>
            </div>
            </section>
            <section className="statistics">
                <h2>Our Impact</h2>
                <p>
                    <strong>SB United </strong> ----------------- <strong> South Bronx</strong> <br />
                    <strong>100%</strong>&emsp; 5-year HS Graduation Rate<strong> &emsp;59%</strong> <br />
                    <strong>93%</strong> &emsp;4-year HS Graduation Rate<strong> &emsp;56%</strong> <br />
                    <strong>93%</strong> &emsp;College Matriculation Rate <strong> &emsp;56%</strong> <br />
                    <strong>55%</strong> &emsp;Earning Bachelors Degrees&emsp;<strong>&emsp;11%</strong> <br />
                </p>
            </section>
        </div>
        </>


    );
};

export default About;
