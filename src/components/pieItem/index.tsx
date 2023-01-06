import React, { FC } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import './pieItem.scss';

interface PieItemProps {
  pieColor: { number: number }[];
}

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieItem: FC<PieItemProps> = ({ pieColor }) => {
  const data = {
    labels: ['Proposal', 'Won', 'Pending', 'Rejected'],
    datasets: [
      {
        data: pieColor.map((item: { number: number }) => item.number),
        backgroundColor: ['#FED9A5', '#F7A35C', '#7CB5EC', '#E83838'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};
