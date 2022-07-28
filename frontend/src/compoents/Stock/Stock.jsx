import React from 'react';
import CardBar from './CardBar';
import News from './News';

function Stock() {
  const A1 = {
    color: 'black',
    paddingLeft: '40px',
    paddingTop: '40px',
    textAlign: 'left',
    fontSize: '60px',
    marginBottom: '50px',
  };
  const A2 = {
    backgroundColor: 'Gainsboro',
  };
  const A3 = { textAlign: 'left', paddingLeft: '40px' };
  const A4 = { textAlign: 'left' };
  const A5 = { paddingLeft: '40px' };
  const A6 = { paddingRight: '40px' };

  return (
    <div style = {A2}>
      <h1 style = {A1}>Welcome To Stock Dashboard !</h1>
      <div className = "row">
        <div className = "col-8">
          <h1 style = {A3}>Today Updates</h1>
          <br />
        </div>
        <div className = "col-4">
          <h1 style = {A4}>Latest News</h1>
          <br />
        </div>
      </div>

      <div className = "row">
        <div style = {A5} className = "col-8">
          <CardBar />
          <br />
        </div>
        <div style = {A6} className = "col-4">
          <News />
        </div>
      </div>
    </div>
  );
}

export default Stock;
