import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Cofee', 'Drink'],
  datasets: [
    {
      label: '% of Votes',
      data: [54.1, 8],
      backgroundColor: [
        'rgba(7, 27, 133)',
        'rgba(27, 126, 237)',

      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

export function PieChartBlue() {
  return <Pie data={data} />;
}
