import React, { FC } from 'react';

import './dashboardItems.scss';

interface DashboardItemsProps {
  image: string;
  color: string;
  number: number;
  name: string;
}

export const DashboardItems: FC<DashboardItemsProps> = ({ color, image, name, number }) => {
  return (
    <div className="dashboardItems" style={{ backgroundColor: color }}>
      <div className="dashboardItems__img">
        <img src={image} alt="" />
      </div>

      <div className="dashboardItems__content">
        <p className="dashboardItems__content-number">{number}</p>
        <p className="dashboardItems__content-name">{name}</p>
      </div>
    </div>
  );
};
