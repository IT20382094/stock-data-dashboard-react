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
  const [details0, setDetails0] = useState([]);
  const [details1, setDetails1] = useState([]);
  const [details2, setDetails2] = useState([]);
  const [details3, setDetails3] = useState([]);
  const [details4, setDetails4] = useState([]);
  const [details5, setDetails5] = useState([]);
  const [details6, setDetails6] = useState([]);
  const [details7, setDetails7] = useState([]);
  const [details8, setDetails8] = useState([]);
  const [details9, setDetails9] = useState([]);
  const { title, title2 } = useParams();

  const getDetails = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/cryptodata/' + title + '/' + title2
      );
      const jsonData = await response.json();
      setDetails0(
        jsonData['bars'][title + '/' + title2][0] != undefined &&
          jsonData['bars'][title + '/' + title2][0]
      );
      setDetails1(
        jsonData['bars'][title + '/' + title2][1] != undefined &&
          jsonData['bars'][title + '/' + title2][1]
      );
      setDetails2(
        jsonData['bars'][title + '/' + title2][2] != undefined &&
          jsonData['bars'][title + '/' + title2][2]
      );
      setDetails3(
        jsonData['bars'][title + '/' + title2][3] != undefined &&
          jsonData['bars'][title + '/' + title2][3]
      );
      setDetails4(
        jsonData['bars'][title + '/' + title2][4] != undefined &&
          jsonData['bars'][title + '/' + title2][4]
      );
      setDetails5(
        jsonData['bars'][title + '/' + title2][5] != undefined &&
          jsonData['bars'][title + '/' + title2][5]
      );
      setDetails6(
        jsonData['bars'][title + '/' + title2][6] != undefined &&
          jsonData['bars'][title + '/' + title2][6]
      );
      setDetails7(
        jsonData['bars'][title + '/' + title2][7] != undefined &&
          jsonData['bars'][title + '/' + title2][7]
      );
      setDetails8(
        jsonData['bars'][title + '/' + title2][8] != undefined &&
          jsonData['bars'][title + '/' + title2][8]
      );
      setDetails9(
        jsonData['bars'][title + '/' + title2][9] != undefined &&
          jsonData['bars'][title + '/' + title2][9]
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getDetails();
      console.log(details0);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: [
      details0.t,
      details1.t,
      details2.t,
      details3.t,
      details4.t,
      details5.t,
      details6.t,
      details6.t,
      details8.t,
      details9.t,
    ],
    datasets: [
      {
        label: 'Average Price',
        data: [
          details0.vw,
          details1.vw,
          details2.vw,
          details3.vw,
          details4.vw,
          details5.vw,
          details6.vw,
          details7.vw,
          details8.vw,
          details9.vw,
        ],
        borderColor: ['rgba(54,162,235,0.2)'],
        backgroundColor: ['rgba(54,162,235,0.2)'],
        pointBackgoundColor: 'rgba(54,162,235,0.2)',
        pointBorderColor: 'rgba(54,162,235,0.2)',
      },
    ],
  };

  return <Line data = {data} />;
}

export default ChartL;
