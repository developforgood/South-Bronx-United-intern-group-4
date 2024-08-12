import React from 'react';
import NavBar from '../bar';

const ProfilePage: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <header style={styles.header}>
          {/* <img src="/path/to/logo.png" alt="Logo" style={styles.logo} /> */}
          <h1 style={styles.title}>Profile</h1>
        </header>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>My Events</h2>
          <div style={styles.sectionContent}>events here</div>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>My Orders</h2>
          <div style={styles.sectionContent}>events here</div>
        </div>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>My Rewards</h2>
          <div style={styles.sectionContent}>events here</div>
        </div>
      </div>
      <nav style={styles.navbar}>
        <a href="/home" style={styles.navItem}>Home</a>
        <a href="/order" style={styles.navItem}>Order</a>
        <a href="/events" style={styles.navItem}>Events</a>
        <a href="/about" style={styles.navItem}>About</a>
      </nav>
      <NavBar />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  content: {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '60px',
    height: '60px',
    marginBottom: '10px',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold' as 'bold',
    margin: '0',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    fontSize: '18px',
    fontWeight: 'bold' as 'bold',
    marginBottom: '10px',
  },
  sectionContent: {
    padding: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#f7f7f7',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#777',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    position: 'absolute' as 'absolute',
    bottom: '0',
    backgroundColor: '#fff',
    padding: '10px 0',
    borderTop: '1px solid #ccc',
  },
  navItem: {
    textDecoration: 'none',
    color: '#555',
    fontSize: '14px',
  }
};

export default ProfilePage;
