import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Card({ symbol, price_increment }) {
  return (
    <Link to={'/Detail/' + symbol}>
      <div
        style={{
          marginBottom: '40px',
          marginRight: '40px',
          width: '300px',
          height: '120px',
          padding: '10px 40px',
          marginLeft: '40px',
          boxShadow: '2px 2px 2px 0',
        }}
        className="card"
      >
        <div className="card-body">
          <h3>{symbol}</h3>
          <h5>{price_increment}</h5>
        </div>
      </div>
    </Link>
  );
}
