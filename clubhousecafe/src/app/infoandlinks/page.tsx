'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../bar';

// Define the type for event data
interface Event {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
  }

  // Sample data for events
  const events: Event[] = [
    {
      id: 1,
      title: 'SBU Event 1',
      description: 'A day of fun and freshness!',
      imageUrl: 'https://via.placeholder.com/150?text=Happy+Day',
    },
    {
      id: 2,
      title: 'SBU Event 2',
      description: 'Enjoy delicious food and happy dancing!',
      imageUrl: 'https://via.placeholder.com/150?text=Epic+Food+Event',
    },
    {
      id: 3,
      title: 'SBU Event 3',
      description: 'Explore a range of activities!',
      imageUrl: 'https://via.placeholder.com/150?text=Fun+Event+Three',
    },
    {
        id: 4,
        title: 'SBU Event 4',
        description: 'Explore every activity in the world yes!',
        imageUrl: 'https://via.placeholder.com/150?text=Fun+Event+Four',
      },
    {
        id: 5,
        title: 'SBU Event 5',
        description: 'Wow! so many activities in this list',
        imageUrl: 'https://via.placeholder.com/150?text=Fun+Event+Five',
      },
  ];

  const InfoAndLinks: React.FC = () => {
    const router = useRouter();

    const handleMissionClick = () => {
        router.push('/about');
    };

    const handleStudentsClick = () => {
        router.push('/studentfeatures');
    };

    return (
    <>
    <div style={{"backgroundColor": "white", "padding": "10px 10px 10px 10px"}}>
        <h1>Events</h1>
    </div>
    <div style={{"display":"flex", "backgroundColor":"grey"}}>
        <button style={{"width":"30%"}} onClick={handleMissionClick} >Mission</button><button style={{"width":"30%"}}>Info/Links</button><button style={{"width":"30%"}} onClick={handleStudentsClick} >Students</button>
        </div>
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', overflow:'scroll' }}>
          {events.map(event => (
            <div key={event.id} style={{ display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid #ddd', padding: '10px', borderRadius: '8px' }}>
              <img
                src={event.imageUrl}
                alt={event.title}
                style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
              />
              <div>
                <h2 style={{ margin: '0 0 10px 0' }}>{event.title}</h2>
                <p style={{ margin: '0' }}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NavBar />
      </>
    );
  };

export default InfoAndLinks;
