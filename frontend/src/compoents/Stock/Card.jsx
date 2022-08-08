import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

export default function OutlinedCard({ symbol, price_increment }) {
  const [isHovering, setIsHovering] = useState(false);

  const A1 = {
    marginBottom: '40px',
    width: '180px',
    height: '110px',
    marginLeft: '40px',
    boxShadow: '0px 0px 20px',
    backgroundColor: '#FFFFF',
    borderRadius: '5px',
    color: '#b7b7b7',
  };

  const A2 = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F1F1F',
    marginTop: '10px',
    textStyle: 'bold',
  };
  const A3 = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '600',
    color: '#979797',
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };
  const card = (
    <React.Fragment>
      <CardContent>
        <div
          style={{
            transform: isHovering ? 'scale(1.3)' : '',
            backgroundColor: isHovering ? '#E5E5E5' : '',
            minHeight: isHovering ? '170px' : '',
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="intro">
            <Link to={'/Detail/' + symbol} style={{ textDecoration: 'none' }}>
              <div>
                <h3 style={A2}>{symbol}</h3>
                <h5 style={A3}>{price_increment}</h5>
              </div>
            </Link>
          </div>
        </div>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Card style={A1} variant="outlined">
      {card}
    </Card>
  );
}
