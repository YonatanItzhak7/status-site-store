import React, { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import {productsContext} from '../../context/products-contexts'
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['1/1/2023', '1/2/2023', '1/3/2023', '1/4/2023', '1/5/2023', '1/6/2023', '1/7/2023'];

export function BarChart() {
  const {orders, serOrders} = useContext(productsContext);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number Of Order Per Day',
      },
    },
  };
  
   const data = {
    labels:orders.map((data) => data.orderDate),   
     datasets: [
      {
        label: '2023',
        data: orders.map((data) => data.quantityOrder),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return <Bar options={options} data={data} />;
}
