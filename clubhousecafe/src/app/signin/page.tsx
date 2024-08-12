"use client"; // Ensure this component is treated as a Client Component

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import NavBar from '../bar';

// Define the type for the supported languages
type Language = 'English' | 'Spanish' | 'Creole' | 'Yoruba';

// Language data
const translations: Record<Language, {
  signIn: string;
  emailOrPhone: string;
  password: string;
  forgotPassword: string;
  signInWithGoogle: string;
  newToSouthBronx: string;
  joinNow: string;
  home: string;
  order: string;
  events: string;
  about: string;
}> = {
  English: {
    signIn: 'Sign In',
    emailOrPhone: 'Email or Phone',
    password: 'Password',
    forgotPassword: 'Forgot password?',
    signInWithGoogle: 'Sign in with Google',
    newToSouthBronx: 'New to South Bronx?',
    joinNow: 'Join now',
    home: 'Home',
    order: 'Order',
    events: 'Events',
    about: 'About',
  },
  Spanish: {
    signIn: 'Iniciar sesión',
    emailOrPhone: 'Correo electrónico o teléfono',
    password: 'Contraseña',
    forgotPassword: '¿Olvidaste tu contraseña?',
    signInWithGoogle: 'Iniciar sesión con Google',
    newToSouthBronx: '¿Nuevo en South Bronx?',
    joinNow: 'Únete ahora',
    home: 'Inicio',
    order: 'Ordenar',
    events: 'Eventos',
    about: 'Acerca de',
  },
  Creole: {
    signIn: 'Ouvri sesyon an',
    emailOrPhone: 'Imèl oswa Telefòn',
    password: 'Modpas',
    forgotPassword: 'Bliye modpas?',
    signInWithGoogle: 'Ouvri sesyon ak Google',
    newToSouthBronx: 'Nouvo nan South Bronx?',
    joinNow: 'Antre kounye a',
    home: 'Kay',
    order: 'Lòd',
    events: 'Evènman',
    about: 'Sou',
  },
  Yoruba: {
    signIn: 'Wọlé',
    emailOrPhone: 'Imeeli tabi Foonu',
    password: 'Ọrọìkọ̀ọ̀kan',
    forgotPassword: 'Ṣe o ti gbagbe ọrọìkọ̀ọ̀kan?',
    signInWithGoogle: 'Wọlé pẹlu Google',
    newToSouthBronx: 'Titun si South Bronx?',
    joinNow: 'Darapọ̀ bayi',
    home: 'Ile',
    order: 'Pàtàki',
    events: 'Àwọn Ètò',
    about: 'Nipa',
  },
};

const SignInPage: React.FC = () => {
  const [language, setLanguage] = useState<Language>('English');
  const router = useRouter();
  const [showPassword, setShowPassword] = useState<boolean>(false);


  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(event.target.value as Language);
  };

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('././profile');
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };


  const t = translations[language];

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <header style={styles.header}>
          <h1 style={styles.title}>{t.signIn}</h1>
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
        <p style={styles.subTitle}>Stay updated on South Bronx United</p>
        <form style={styles.form} onSubmit={handleSignIn}>
          <div style={styles.inputGroup}>
            <label htmlFor="emailOrPhone" style={styles.label}>
              {t.emailOrPhone}
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              placeholder={t.emailOrPhone}
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>
              {t.password}
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder={t.password}
              style={styles.input}
            />
            <button type="button" style={styles.showPasswordButton} onClick={togglePasswordVisibility}>
            {showPassword ? "hide" : "show"}
            </button>
          </div>
          <p style={styles.forgotPassword}>{t.forgotPassword}</p>
          <button type="submit" style={styles.signInButton}>
            {t.signIn}
          </button>
        </form>
        <div style={styles.orSeparator}>
          <span style={styles.line}></span>
          <span style={styles.orText}>or</span>
          <span style={styles.line}></span>
        </div>
        <button style={styles.signInGoogleButton}>{t.signInWithGoogle}</button>
      </div>
      <nav style={styles.navbar}>
        <a href="/home" style={styles.navItem}>{t.home}</a>
        <a href="/order" style={styles.navItem}>{t.order}</a>
        <a href="/events" style={styles.navItem}>{t.events}</a>
        <a href="/about" style={styles.navItem}>{t.about}</a>
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
  title: {
    fontSize: '24px',
    fontWeight: 'bold' as 'bold',
    margin: '0',
  },
  subTitle: {
    fontSize: '14px',
    marginBottom: '20px',
    color: '#555',
    textAlign: 'center' as 'center',
  },
  form: {
    width: '100%',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'none',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    color: '#777',
  },
  showPasswordButton: {
    fontSize: '12px',
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007BFF',
    cursor: 'pointer',
    marginLeft: '5px',
  },
  forgotPassword: {
    fontSize: '12px',
    color: '#007BFF',
    cursor: 'pointer',
    marginBottom: '20px',
  },
  signInButton: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
  orSeparator: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '20px 0',
  },
  line: {
    flex: 1,
    height: '1px',
    backgroundColor: '#ccc',
  },
  orText: {
    margin: '0 10px',
    fontSize: '14px',
    color: '#555',
  },
  signInGoogleButton: {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: '#fff',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
  },
  footer: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#555',
    textAlign: 'center' as 'center',
  },
  joinNow: {
    color: '#007BFF',
    textDecoration: 'none',
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
};

export default SignInPage;