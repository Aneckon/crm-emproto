import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../redux/hooks';

import { authLogout } from '../../redux/slice/auth';

import './sidebar.scss';

export const Sidebar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <img className="sidebar__logo" src="assets/logo.svg" alt="" />
      <nav className="sidebar__navigate">
        <ul>
          <li>
            <NavLink to="/">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16 2V4H12V2H16ZM6 2V8H2V2H6ZM16 10V16H12V10H16ZM6 14V16H2V14H6ZM18 0H10V6H18V0ZM8 0H0V10H8V0ZM18 8H10V18H18V8ZM8 12H0V18H8V12Z"
                  fill="#181818"
                />
              </svg>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts">
              <svg
                width="18"
                height="22"
                viewBox="0 0 18 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M16.2 3.6H1.8C0.81 3.6 0 4.41 0 5.4V16.2C0 17.19 0.81 18 1.8 18H16.2C17.19 18 18 17.19 18 16.2V5.4C18 4.41 17.19 3.6 16.2 3.6ZM16.2 16.2H1.8V5.4H16.2V16.2ZM1.8 0H16.2V1.8H1.8V0ZM1.8 19.8H16.2V21.6H1.8V19.8ZM9 10.8C10.242 10.8 11.25 9.792 11.25 8.55C11.25 7.308 10.242 6.3 9 6.3C7.758 6.3 6.75 7.308 6.75 8.55C6.75 9.792 7.758 10.8 9 10.8ZM9 7.65C9.495 7.65 9.9 8.055 9.9 8.55C9.9 9.045 9.495 9.45 9 9.45C8.505 9.45 8.1 9.045 8.1 8.55C8.1 8.055 8.505 7.65 9 7.65ZM13.5 14.391C13.5 12.51 10.521 11.7 9 11.7C7.479 11.7 4.5 12.51 4.5 14.391V15.3H13.5V14.391ZM6.129 13.95C6.678 13.482 7.956 13.05 9 13.05C10.053 13.05 11.331 13.482 11.88 13.95H6.129Z"
                  fill="#181818"
                />
              </svg>
              Total Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          dispatch(authLogout());
          navigate('/auth');
        }}
        className="sidebar__logout">
        <img src="assets/loguot.svg" alt="" />
        <p>Log out</p>
      </button>
    </div>
  );
};
