import React from 'react';

const SignInPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <header style={styles.header}>
          {/* <img src="/path/to/logo.png" alt="Logo" style={styles.logo} /> */}
          <h1 style={styles.title}>Sign In</h1>
        </header>
        <p style={styles.subTitle}>Stay updated on South Bronx United</p>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="emailOrPhone" style={styles.label}>
              Email or Phone
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              placeholder="Email or Phone"
              style={styles.input}
            />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              style={styles.input}
            />
            <button type="button" style={styles.showPasswordButton}>
              show
            </button>
          </div>
          <p style={styles.forgotPassword}>Forgot password?</p>
          <button type="submit" style={styles.signInButton}>
            Sign in
          </button>
        </form>
        <div style={styles.orSeparator}>
          <span style={styles.line}></span>
          <span style={styles.orText}>or</span>
          <span style={styles.line}></span>
        </div>
        <button style={styles.signInGoogleButton}>Sign in with Google</button>
        <footer style={styles.footer}>
          <p>
            New to South Bronx? <a href="/join" style={styles.joinNow}>Join now</a>
          </p>
        </footer>
      </div>
      <nav style={styles.navbar}>
        <a href="/home" style={styles.navItem}>Home</a>
        <a href="/order" style={styles.navItem}>Order</a>
        <a href="/events" style={styles.navItem}>Events</a>
        <a href="/about" style={styles.navItem}>About</a>
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
    backgroundColor: '#f7f7f7',
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
    backgroundColor: '#007BFF', // Blue background for Google sign-in button
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
  }
};

export default SignInPage;
