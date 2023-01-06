import React, { useState } from 'react';
import { DashboardItems, Header, BarItem, PieItem } from '..';

import './dashboard.scss';

const mokDashboardItems = [
  {
    id: 1,
    name: 'Total Contacts',
    number: 10000,
    image: 'assets/icon-dashboard/total.svg',
    color: '#FFEBDA',
  },
  {
    id: 2,
    name: 'Industry',
    number: 9,
    image: 'assets/icon-dashboard/industry.svg',
    color: '#FFD7D7',
  },
  {
    id: 3,
    name: 'Country',
    number: 10,
    image: 'assets/icon-dashboard/country.svg',
    color: '#DFFFD8',
  },
  {
    id: 4,
    name: 'Phone Numbers',
    number: 200,
    image: 'assets/icon-dashboard/phone.svg',
    color: '#E7F2FE',
  },
];

export const Dashboard = () => {
  const [pieColor] = useState([
    {
      id: 1,
      name: 'Proposal',
      bgColor: '#FED9A570',
      color: '#FED9A5',
      number: 70,
    },
    {
      id: 2,
      name: 'Won',
      bgColor: '#FCD8A3',
      color: '#F7A35C',
      number: 40,
    },
    {
      id: 3,
      name: 'Pending',
      bgColor: '#C2E1FF',
      color: '#7CB5EC',
      number: 20,
    },
    {
      id: 4,
      name: 'Rejected',
      bgColor: '#FFC7C7',
      color: '#E83838',
      number: 10,
    },
  ]);

  return (
    <div className="dashboard">
      <Header title="Dashboard" setSearch={() => 'tadsad'} />
      <div className="container">
        <div className="dashboard__content">
          {mokDashboardItems.map((item) => (
            <DashboardItems
              key={item.id}
              image={item.image}
              color={item.color}
              number={item.number}
              name={item.name}
            />
          ))}
        </div>
        <div className="dashboard__wrapper">
          <div className="dashboard__panel">
            <div className="dashboard__panel-title">
              <p>Total Contacts Date</p>
            </div>
            <BarItem />
          </div>
          <div className="dashboard__panel pie">
            <div className="dashboard__panel-title">
              <p>Total Projects</p>
            </div>
            <div className="dashboard__panel-item">
              <div className="dashboard__panel-content">
                {pieColor.map((item) => (
                  <div className="dashboard__panel-items">
                    <div className="dashboard__panel-items__content">
                      <p>
                        <div
                          style={{
                            background: item.color,
                            boxShadow: `0px 0px 5px ${item.bgColor}`,
                          }}
                          className="dashboard__panel-items__decor"></div>
                        {item.name}
                      </p>
                      <span>{item.number}</span>
                    </div>
                    <div className="dashboard__panel-items__skills">
                      <div style={{ background: item.bgColor }} className="meter">
                        <span style={{ background: item.color, width: `${item.number}%` }}></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dashboard__panel-pie">
                <PieItem pieColor={pieColor} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
