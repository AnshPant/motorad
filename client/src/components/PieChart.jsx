import React from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const options = {
    labels: ['Basic Trees', 'Custom Short Pants', 'Super Hoodies'],
    colors: ['#6ab04c', '#f6c23e', '#ff6b6b'],
    legend: {
      show: false
    },
    plotOptions: {
      pie: {
        donut: {
          size: '65%', // Adjust the size of the donut hole
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '22px',
              fontFamily: 'Arial, sans-serif',
              color: '#333',
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: '18px',
              fontFamily: 'Arial, sans-serif',
              color: '#999',
              offsetY: 10,
            },
            total: {
              show: true,
              label: 'Total',
              color: '#666',
              fontSize: '18px',
              formatter: function (w) {
                return w.globals.seriesTotals.reduce((a, b) => {
                  return a + b;
                }, 0);
              },
            },
          },
        },
      },
    },
  };

  const series = [55, 31, 14];

  return (
    <Chart
      options={options}
      series={series}
      type="donut"
      width="100%"
    />
  );
};

export default PieChart;
