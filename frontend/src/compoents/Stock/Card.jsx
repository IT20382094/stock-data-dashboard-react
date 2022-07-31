import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ symbol, price_increment }) {
  const A1 = {
    marginBottom: '40px',
    width: '180px',
    height: '110px',
    marginLeft: '40px',
    boxShadow: '0px 0px 20px',
    backgroundColor: '#FFFFFF',
    borderRadius: '5px',
    color: 'LightGray',
  };
  const A2 = {
    fontFamily: 'Readex Pro',
    fontSize: '16px',
    fontWeight: 'medium',
    color: '#1F1F1F',
    marginTop: '10px',
  };
  const A3 = {
    fontFamily: 'Readex Pro',
    fontSize: '16px',
    fontWeight: 'Regular',
    color: '#979797',
  };

  return (
    <Link to={'/Detail/' + symbol}>
      <div style={A1} className="card">
        <div className="card-body">
          <h3 style={A2}>{symbol}</h3>
          <h5 style={A3}>{price_increment}</h5>
        </div>
      </div>
    </Link>
  );
}
