import React, { useState } from 'react';
import Login from './Login.jsx';
import Navbar from './Navbar.jsx';
import App from './App.jsx';

function Wrapper() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (email) => {
    setLoggedIn(true);
    // Optionally store email
  };

  return (
    <>
      <Navbar />
      {loggedIn ? <App /> : <Login onLogin={handleLogin} />}
    </>
  );
}

export default Wrapper;