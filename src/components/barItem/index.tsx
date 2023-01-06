import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import faker from 'faker';

import './barItem.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarItem = () => {
  const curr = new Date();

  const labels = [
    new Date(curr.setDate(curr.getDate() - curr.getDay() - 3)).toLocaleString('en-us', {
      weekday: 'long',
    }),
    new Date(curr.setDate(curr.getDate() - curr.getDay() - 2)).toLocaleString('en-us', {
      weekday: 'long',
    }),
    new Date(curr.setDate(curr.getDate() - curr.getDay() - 1)).toLocaleString('en-us', {
      weekday: 'long',
    }),
    new Date(curr.setDate(curr.getDate() - curr.getDay() + 1)).toLocaleString('en-us', {
      weekday: 'long',
    }),
    new Date(curr.setDate(curr.getDate() - curr.getDay() + 2)).toLocaleString('en-us', {
      weekday: 'long',
    }),
    new Date(curr.setDate(curr.getDate() - curr.getDay() + 3)).toLocaleString('en-us', {
      weekday: 'long',
    }),
    new Date(curr.setDate(curr.getDate() - curr.getDay() + 4)).toLocaleString('en-us', {
      weekday: 'long',
    }),
  ];

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const dataList = labels.map(() => faker.datatype.number({ min: 0, max: 2500 }));
  const sortedData = dataList.slice().sort((a, b) => a - b);
  const backgroundColors = dataList.map((v) =>
    sortedData.indexOf(v) >= dataList.length - 1 ? '#F7A35C' : '#FFE7C4',
  );

  const data = {
    labels,
    datasets: [
      {
        data: dataList,
        backgroundColor: backgroundColors,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};
