import React from 'react';
import { useLocation } from 'react-router-dom';

import { Contacts, Dashboard, Sidebar } from '..';

import './home.scss';

export const Home = () => {
  const location = useLocation();

  return (
    <div className="home">
      <Sidebar />
      {location.pathname === '/' && <Dashboard />}
      {location.pathname === '/contacts' && <Contacts />}
    </div>
  );
};
