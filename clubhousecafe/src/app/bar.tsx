"use client";

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCoffee, faCalendar, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const NavBar: React.FC = () => {

  return (
    
      <footer>
        <a href="/home" >
          <FontAwesomeIcon icon={faHome} size="lg" />
          <div>Home</div>
        </a>
        <a href="/order" >
          <FontAwesomeIcon icon={faCoffee} size="lg" />
          <div>Order</div>
        </a>
        <a href="/events" >
          <FontAwesomeIcon icon={faCalendar} size="lg" />
          <div>Events</div>
        </a>
        <a href="/about" >
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
          <div>About</div>
        </a>
      </footer>
    )
};

export default NavBar;