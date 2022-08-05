import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Style from 'style-it';

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
    '&:hover': {
      backgroundColor: 'black',
    },
  };

  const A2 = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 'medium',
    color: '#1F1F1F',
    marginTop: '10px',
  };
  const A3 = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 'Regular',
    color: '#979797',
  };

  return (
    <Style>
      {`
.intro:hover{
  transform: scale(1.05);
box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
opacity:'0.8'
}
    `}

      <div style={A1} className="intro">
        <Link to={'/Detail/' + symbol}>
          <div className="card-body">
            <h3 style={A2}>{symbol}</h3>
            <h5 style={A3}>{price_increment}</h5>
          </div>
        </Link>
      </div>
    </Style>
  );
}
