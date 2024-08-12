"use client";

import React, { useState } from 'react';

type Language = 'English' | 'Spanish' | 'Creole' | 'Yoruba';

// Language data
const translations: Record<Language, {
  profile: string;
  myEvents: string;
  myOrders: string;
  myRewards: string;
  home: string;
  order: string;
  events: string;
  about: string;
}> = {
  English: {
    profile: 'Profile',
    myEvents: 'My Events',
    myOrders: 'My Orders',
    myRewards: 'My Rewards',
    home: 'Home',
    order: 'Order',
    events: 'Events',
    about: 'About',
  },
  Spanish: {
    profile: 'Perfil',
    myEvents: 'Mis Eventos',
    myOrders: 'Mis Pedidos',
    myRewards: 'Mis Recompensas',
    home: 'Inicio',
    order: 'Ordenar',
    events: 'Eventos',
    about: 'Acerca de',
  },
  Creole: {
    profile: 'Pwofil',
    myEvents: 'Evènman mwen yo',
    myOrders: 'Lòd mwen yo',
    myRewards: 'Rekonpans mwen yo',
    home: 'Kay',
    order: 'Lòd',
    events: 'Evènman',
    about: 'Sou',
  },
  Yoruba: {
    profile: 'Profaili',
    myEvents: 'Àwọn Ẹ̀ṣẹ̀ Mi',
    myOrders: 'Àwọn Ilé Mi',
    myRewards: 'Àwọn Èrè Mi',
    home: 'Ile',
    order: 'Pàtàki',
    events: 'Àwọn Ètò',
    about: 'Nipa',
  },
};

const ProfilePage: React.FC = () => {
 const [language, setLanguage] = useState<Language>('English');

 const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
   setLanguage(event.target.value as Language);
 };

 const t = translations[language]; // Get the translations for the selected language

 return (
   <div style={styles.container}>
     <div style={styles.content}>
       <header style={styles.header}>
         <h1 style={styles.title}>{t.profile}</h1>
         <div style={styles.languageSelector}>
           <label htmlFor="language" style={styles.languageLabel}>Language: </label>
           <select id="language" value={language} onChange={handleLanguageChange} style={styles.languageDropdown}>
             <option value="English">English</option>
             <option value="Spanish">Spanish</option>
             <option value="Creole">Creole</option>
             <option value="Yoruba">Yoruba</option>
           </select>
         </div>
       </header>
       <div style={styles.section}>
         <h2 style={styles.sectionTitle}>{t.myEvents}</h2>
         <div style={styles.sectionContent}></div>
       </div>
       <div style={styles.section}>
         <h2 style={styles.sectionTitle}>{t.myOrders}</h2>
         <div style={styles.sectionContent}></div>
       </div>
       <div style={styles.section}>
         <h2 style={styles.sectionTitle}>{t.myRewards}</h2>
         <div style={styles.sectionContent}></div>
       </div>
     </div>
     <nav style={styles.navbar}>
       <a href="/home" style={styles.navItem}>{t.home}</a>
       <a href="/order" style={styles.navItem}>{t.order}</a>
       <a href="/events" style={styles.navItem}>{t.events}</a>
       <a href="/about" style={styles.navItem}>{t.about}</a>
     </nav>
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
 title: {
   fontSize: '24px',
   fontWeight: 'bold' as 'bold',
   margin: '0',
 },
 languageSelector: {
   marginTop: '10px',
   display: 'flex',
   alignItems: 'center',
 },
 languageLabel: {
   marginRight: '10px',
   fontSize: '14px',
 },
 languageDropdown: {
   fontSize: '14px',
   padding: '5px',
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

