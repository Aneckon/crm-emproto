import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

import { Modal } from '..';

import './auth.scss';

export const Auth = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();

  const onSuccess = (res: any) => {
    cookies.set('user', res.profileObj, { path: '/', maxAge: 604800 });
    cookies.set('token', res.accessToken, { path: '/', maxAge: 604800 });
    navigate('/');
  };

  const onFailure = (err: any) => {
    if (err) {
      setModalOpen(true);
    }
  };

  return (
    <div onClick={() => setModalOpen(false)} className="auth">
      <div className="auth__content">
        <div className="auth__content-decor">
          <img src="assets/login-decor/decor.svg" alt="" />
        </div>
        <img className="auth__content-logo" src="assets/login-decor/login-logo.svg" alt="" />
        <GoogleLogin
          className="auth__btn"
          clientId="223707757898-ehbvo6vqq9617iaj73u3mlvpoe4lckr0.apps.googleusercontent.com"
          buttonText="Sign up or Sign In with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
        <div className="auth__content-decor">
          <img src="assets/login-decor/decor.svg" alt="" />
        </div>
      </div>
      <Modal modalOpen={modalOpen}>
        <div>
          <img src="assets/worning.svg" alt="" />
          <p className="modal__title">User Invalid</p>
          <p className="modal__subtitle">Gmail is not Authorized</p>
        </div>
      </Modal>
    </div>
  );
};
