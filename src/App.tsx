import React, { useEffect } from 'react';
import { gapi } from 'gapi-script';

import { Router } from './router';

export const App = () => {

  const clientId = process.env.CLIENT_ID;

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  return <Router />;
};
