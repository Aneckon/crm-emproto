import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { Cookies } from 'react-cookie';

import { Auth, Contacts, Dashboard, Home } from './components';

import { useAppDispatch, useAppSelector } from './redux/hooks';
import { authToken, authUser } from './redux/slice/auth';

export const Router = () => {
  const dispatch = useAppDispatch();
  const userSelector = useAppSelector((state) => state.authReducer.user);
  const cookies = new Cookies();
  const navigate = useNavigate();

  useEffect(() => {
    if (cookies.get('token') && cookies.get('user')) {
      if (userSelector.length === 0) {
        dispatch(authUser(cookies.get('user')));
        dispatch(authToken(cookies.get('token')));
      }
    } else {
      navigate('/auth');
    }
  }, [dispatch, navigate, userSelector.length]);

  return (
    <Routes>
      <Route element={<Home />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};
