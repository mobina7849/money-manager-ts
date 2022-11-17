import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Box, Paper } from '@mui/material';
import {Chart, Filler} from 'chart.js';
import { AddMoneyFormMonth } from '../../data/AddMoneyForm/AddMoneyFormMonth';
import { MoneyType } from '../../model/moneyType';
import { useSelector } from 'react-redux';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

// Chart.register(Filler);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
  elements: {
    line: {
        tension: 0.3
    }
},  
 scales: {
    x: {
      grid: {
        display: false      
      }
    },
    y: {
      grid: {
        display: false      
      }
    }
  } 

};





const LineChart = () => {
  const moneyArr=useSelector((state:{money:MoneyType[]})=>state.money)
  const labels =AddMoneyFormMonth.map(item=>item.title)
  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
         data:[11,5,39,44,35,76,17],
        //data:moneyArr.map(item=>item.price),
      //   borderColor: 'rgb(255, 99, 132)',
         borderColor: '#9c27b0',
        backgroundColor: 'rgb(236, 179, 255,0.5)',
        fill: true,
      },
      // {
      //   label: 'Dataset 2',
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      //   borderColor: 'rgb(53, 162, 235)',
      //   backgroundColor: 'rgba(53, 162, 235, 0.5)',
      // },
    ],
  };

    return ( 
        <Paper elevation={4} sx={{width:{xs:'100%',md:"45%"},mx:1,my:1}}>
                     <Line options={options} data={data} />

        </Paper>
          );
}
 
export default LineChart;
// {
//   id:1,
//   total:20,
//   income:40,
//   expense:20,
//   month:"farvardin",
//   incomes:[{id:1,title:'work',price:10,month:'farvardin'},{id:2,title:'work',price:10,month:'farvardin'},],
//   expenses:[{id:1,title:'buy milk',price:10,month:'farvardin'}]
//   },
//   {
//   id:2,
//   total:20,
//   income:40,
//   expense:20,
//   month:"farvardin",
//   incomes:[{id:1,title:'work',price:10,month:'farvardin'}],
//   expenses:[{id:1,title:'buy milk',price:10,month:'farvardin'}]
//   },
