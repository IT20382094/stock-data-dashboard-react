import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ChartL from './Chart';
import '../../App.css';

export default function Detail() {
  const { title, title2 } = useParams();
  const A2 = {
    textAlign: 'left',
    paddingLeft: '40px',
    fontFamily: 'Readex Pro',
    fontWeight: '500',
    fontSize: '30px',
  };
  const A3 = {
    width: '900px',
    height: '500px',
    marginBottom: '40px',
    marginLeft: '40px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #000000',
  };
  const A4 = {
    marginBottom: '40px',
    marginRight: '40px',
    marginLeft: '40px',
    width: '361px',
    height: '460px',
    backgroundColor: '#E4EDEC',
    borderRadius: '8px',
  };
  const A5 = {
    fontFamily: 'Readex Pro',
    fontSize: '24px',
    fontWeight: 'Regular',
    marginBottom: '35px',
    textAlign: 'left',
  };
  const A6 = {
    fontFamily: 'Readex Pro',
    fontSize: '20px',
    fontWeight: 'Regular',
    marginBottom: '35px',
    textAlign: 'left',
  };
  const A7 = {
    fontFamily: 'Readex Pro',
    fontSize: '20px',
    fontWeight: 'Regular',
    color: '#737373',
    textAlign: 'right',
  };

  const A8 = {
    fontFamily: 'Readex Pro',
    fontSize: '24px',
    fontWeight: 'Regular',
    marginBottom: '35px',
    textAlign: 'right',
  };

  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/cryptodata/' + title + '/' + title2
      );
      const jsonData = await response.json();
      setDetails(
        jsonData['bars'][title + '/' + title2] != undefined &&
          jsonData['bars'][title + '/' + title2]
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  const last = details.slice(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      getDetails();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <br />
      <br />
      <div className="row">
        <div className="col-7">
          <h1 style={A2}>
            Average prices of {title}/{title2}
          </h1>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div style={A3} className="card">
            <div className="chart">
              <ChartL details={details} />
            </div>
          </div>
        </div>
        <div className="col-4">
          {last?.map((lastItem) => {
            return (
              <div style={A4} className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-6">
                      <h1 style={A5}>Current Average Price</h1>
                    </div>
                    <div className="col-6">
                      <h1 style={A8}>{lastItem.vw}</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h1 style={A6}>Open Price</h1>
                    </div>
                    <div className="col-6">
                      <h1 style={A7}>{lastItem.o}</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h1 style={A6}>High Price</h1>
                    </div>
                    <div className="col-6">
                      <h1 style={A7}>{lastItem.h}</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h1 style={A6}>Low Price</h1>
                    </div>
                    <div className="col-6">
                      <h1 style={A7}>{lastItem.l}</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h1 style={A6}>Close Price</h1>
                    </div>
                    <div className="col-6">
                      <h1 style={A7}>{lastItem.c}</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6">
                      <h1 style={A6}>Volume</h1>
                    </div>
                    <div className="col-6">
                      <h1 style={A7}>{lastItem.v}</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-7">
                      <h1 style={A6}>Number of Trades</h1>
                    </div>
                    <div className="col-5">
                      <h1 style={A7}>{lastItem.n}</h1>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
