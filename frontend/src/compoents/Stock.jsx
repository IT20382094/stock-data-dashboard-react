import React, { useState } from 'react';
import Card from './Card';
import News from './News';

function Stock() {
  return (
    <div
      style={{
        backgroundColor: 'Gainsboro',
      }}
    >
      <h1
        style={{
          color: 'black',
          paddingLeft: '40px',
          paddingTop: '40px',
          textAlign: 'left',
          fontSize: '60px',
          marginBottom: '50px',
        }}
      >
        Welcome To Stock Dashboard !
      </h1>
      <div className="row">
        <div className="col-8">
          <h1 style={{ textAlign: 'left', paddingLeft: '40px' }}>
            Today Updates
          </h1>
          <br />
        </div>
        <div className="col-4">
          <h1 style={{ textAlign: 'left' }}>Latest News</h1>
          <br />
        </div>
      </div>

      <div className="row">
        <div style={{ paddingLeft: '40px' }} className="col-8">
          <Card />
          <br />
        </div>
        <div style={{ paddingRight: '40px' }} className="col-4">
          <News />
        </div>
      </div>
    </div>
  );
}

export default Stock;
