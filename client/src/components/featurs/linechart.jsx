import { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {productsContext} from '../../context/products-contexts'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);



const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];



export default function LineChart() { 
  const dateData = ["02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022", "02-12-2022"]
  const { orders, setOrders } = useContext(productsContext);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };

  const data = {
    labels: dateData.map(item => item),
    datasets: [
      {
        fill: true,
        label: 'Sum Of Order Amount',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        // borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#56d9fe',
        tension: 0.4
      },
      {
        fill: true,
        label: 'Sum Of Order Numbers',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        // borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#5fe3a1',
        tension: 0.4
      },
      {
        fill: true,
        label: 'Sum Of Refund',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        // borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#a3a1fb',
        tension: 0.4
      },
    ],
  };
  return <Line options={options} data={data} width={1000}/>;
}
