import React, { FC } from 'react';

import './header.scss';
import { useLocation } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';

interface HeaderProps {
  title: string;
  search?: string;
  setSearch: (search: string) => void;
}

export const Header: FC<HeaderProps> = ({ title, search, setSearch }) => {
  const userSelector = useAppSelector((state) => state.authReducer.user);
  const location = useLocation();

  return (
    <div className="header">
      <h1 className="header__title">{title}</h1>
      {location.pathname === '/contacts' && (
        <div className="header__search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search by Email Id....."
          />
        </div>
      )}
      {userSelector.map((item: any) => (
        <div key={item.name} className="header__user">
          <img src={item.imageUrl} alt="avatar" />
          <div className="header__user-content">
            <p className="header__user-name">{item.name}</p>
            <p className="header__user-role">Super Admin</p>
          </div>
        </div>
      ))}
    </div>
  );
};
