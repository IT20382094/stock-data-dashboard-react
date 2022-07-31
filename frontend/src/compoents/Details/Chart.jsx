import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import '../../App.css';
import { useParams } from 'react-router-dom';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartL() {
  const [details, setDetails] = useState([]);
  const { title, title2 } = useParams();

  const getDetails = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/cryptodata/' + title + '/' + title2
      );
      const jsonData = await response.json();
      setDetails(jsonData['bars'][title + '/' + title2]);
    } catch (err) {
      console.log(err.message);
    }
  };

  const last10 = details.slice(-10);

  useEffect(() => {
    const interval = setInterval(() => {
      getDetails();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: last10?.map((item) => {
      return item.t;
    }),
    datasets: [
      {
        label: 'Average Price',
        data: last10?.map((item) => {
          return item.vw;
        }),
        borderColor: ['rgba(54,162,235,0.2)'],
        backgroundColor: ['rgba(54,162,235,0.2)'],
        pointBackgoundColor: 'rgba(54,162,235,0.2)',
        pointBorderColor: 'rgba(54,162,235,0.2)',
      },
    ],
  };

  return <Line data={data} />;
}

export default ChartL;
