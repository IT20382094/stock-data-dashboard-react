import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ChartL from './Chart';
import '../../App.css';


export default function Detail() {
  const [details, setDetails] = useState([]);
  const { title, title2 } = useParams();

  const getDetails = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/cryptodata/' + title + '/' + title2
      );

      const jsonData = await response.json();
      setDetails(jsonData['bars'][title + '/' + title2][0]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div style={{ backgroundColor: 'Gainsboro' }}>
      <br />
      <br />
      <div className="row">
        <div className="col-7">
          <h1 style={{ textAlign: 'left', paddingLeft: '40px' }}>
            Average prices of {title}/{title2}
          </h1>
          <br />
        </div>
        <div className="col-5">
          <h1>Current Price :{details.vw}</h1>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div
            style={{
              backgroundColor: '#303030',
              width: '1260px',
              marginBottom: '40px',
              marginLeft: '40px',
            }}
            className="card"
          >
            <div className="chart">
              <ChartL />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div
            style={{
              marginBottom: '40px',
              marginRight: '40px',
              marginLeft: '40px',
              boxShadow: '8px 8px 8px 0',
              columns: '2 auto',
            }}
            className="card"
          >
            <div className="card-body">
              <h3>Open Price</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.o}</h4>
            </div>

            <div className="card-body">
              <h3>High Price</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.h}</h4>
            </div>

            <div className="card-body">
              <h3>Low Price</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.l}</h4>
            </div>

            <div className="card-body">
              <h3>Close Price</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.c}</h4>
            </div>

            <div className="card-body">
              <h3>Volume</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.v}</h4>
            </div>

            <div className="card-body">
              <h3>Number of Trades</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.n}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
