import React from 'react';
import CardBar from './CardBar';
import News from './News';

function Stock() {
  const A1 = {
    color: '#104873',
    paddingLeft: '40px',
    textAlign: 'left',
    fontSize: '48px',
    fontFamily: 'Poppins',
    fontWeight: '600',
    marginBottom: '40px',
  };
  const A2 = {
    backgroundColor: '#F7FBFC',
  };
  const A3 = {
    textAlign: 'left',
    paddingLeft: '40px',
    fontFamily: 'Poppins',
    fontSize: '24px',
    color: '#1F1F1F',
    fontWeight: '400',
  };
  const A4 = {
    textAlign: 'left',
    fontFamily: 'Poppins',
    fontSize: '24px',
    color: '#1F1F1F',
    fontWeight: '400',
  };
  const A5 = { paddingLeft: '40px' };
  const A6 = { paddingRight: '40px' };
  const A7 = {
    fontSize: '24px',
    color: '#104873',
    fontFamily: 'Poppins',
    textAlign: 'left',
    paddingLeft: '40px',
    paddingTop: '30px',
    fontWeight: '400',
  };

  const date = new Date();
  const time = date.getHours;

  return (
    <div style={A2}>
      {time >= 12 ? (
        time >= 16 ? (
          <h3 style={A7}>Hi, Good Evenning</h3>
        ) : (
          <h3 style={A7}>Hi, Good Afternoon</h3>
        )
      ) : (
        <h3 style={A7}>Hi, Good Morning</h3>
      )}
      <h1 style={A1}>Welcome To Stock Dashboard !</h1>

      <div className="row">
        <div className="col-8">
          <h1 style={A3}>Today Updates</h1>
          <br />
        </div>
        <div className="col-4">
          <h1 style={A4}>Latest News</h1>
          <br />
        </div>
      </div>

      <div className="row">
        <div style={A5} className="col-8">
          <CardBar />
          <br />
        </div>
        <div style={A6} className="col-4">
          <News />
        </div>
      </div>
    </div>
  );
}

export default Stock;
