import React from "react";
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
import { faker } from '@faker-js/faker';
import { useContext } from "react";
import {productsContext} from '../../context/products-contexts'
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



const labels = ['1/1/2023', '1/2/2023', '1/3/2023', '1/4/2023', '1/5/2023', '1/6/2023', '1/7/2023'];


export default function MyBarChart() {
  const {products,setProducts} = useContext(productsContext);
  const dateData = ["02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022"]
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Numbers Of Products That Where Ordered By Day',
      },
    },
  };
  const data = {
    labels:dateData.map((item) => item),
    datasets: [
      {
        label: 'Numbers Of Orders Per Day',
        data: [...products.map((data) => data.ProductNumber)],
        backgroundColor: '#fba1c5',
      },
    ],
  };

  return <Bar width={800} options={options} data={data} />;
}