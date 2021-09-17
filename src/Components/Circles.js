import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const data = {
  labels: [],
  datasets: [
    {
      label: '# of Votes',
      data: [70,30],
      backgroundColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
      ],
      borderColor: [
        'rgba(255, 99, 132)',
        'rgba(54, 162, 235)',
      ],
      borderWidth: 0,
      radius:70
    },
  ],
};

const DoughnutChart = () => (
  <>
    <Doughnut data={data} />
  </>
);

export default DoughnutChart;