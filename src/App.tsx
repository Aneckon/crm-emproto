import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

import { Router } from './router';

export const App = () => {
  const clientId = process.env.CLIENT_ID;
  const clientHost = process.env.CLIENT_ID_HOST;

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: window.origin === 'http://localhost:3000' ? clientId : clientHost,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  return <Router />;
};
