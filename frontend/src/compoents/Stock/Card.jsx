import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

export default function Card({ symbol, price_increment }) {
  const [isHovering, setIsHovering] = useState(false);

  const A1 = {
    marginBottom: '40px',
    width: '180px',
    height: '110px',
    marginLeft: '40px',
    boxShadow: '0px 0px 20px',
    backgroundColor: '#E5E5E5',
    borderRadius: '5px',
    color: '#b7b7b7',
  };

  const A2 = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '600',
    color: '#1F1F1F',
    marginTop: '10px',
    textStyle :'bold'
  };
  const A3 = {
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: '600',
    color: '#979797',
  };

  function changeBackground(e) {
    e.target.style.background = 'red';
  }

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
    style={{
      opacity: isHovering ? '0.4' : '',
      transform: isHovering? 'scale(1.1)':'',  
    }}

    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
      <div style={A1} onMouseOv={changeBackground} className="intro">
        <Link to={'/Detail/' + symbol} style={{textDecoration:'none'}}>
          <div className="card-body">
            <h3 style={A2}>{symbol}</h3>
            <h5 style={A3}>{price_increment}</h5>
          </div>
        </Link>
      </div>
    </div>
  );
}
