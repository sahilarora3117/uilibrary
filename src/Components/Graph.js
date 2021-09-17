import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      fill: false,
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div class="flex m-2">
        <p class="font-sans mr-40 text-gray-200 text-md">Applications Received</p>
        <p class="font-sans ml-20 mr-4 text-gray-200 text-md">This Year</p>
        <p class="font-sans mr-4 text-gray-200 text-md">This Week</p>
        <p class="font-sans mr-4 text-gray-200 text-md">Today</p>
        <p class="font-sans ml-10 text-gray-200 text-md">Download Report</p>

    </div>
    <Line data={data} options={options} />
  </>
);

export default LineChart;