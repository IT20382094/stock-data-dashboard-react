import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router-dom';

export default function CardBar() {
  const [card, setCard] = useState([]);

  const getCard = async () => {
    try {
      const response = await fetch('http://localhost:5000/cryptos');
      const jsonData = await response.json();
      setCard(jsonData);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCard();
  }, []);

  return (
    <div className="row">
      {card &&
        card.map((cardItems) => {
          return(
            <Card symbol = {cardItems.symbol} price_increment={cardItems.price_increment}/>
          )
            // <Link to={'/Detail/' + cardItems.symbol}>
            //   <div
            //     style={{
            //       marginBottom: '40px',
            //       marginRight: '40px',
            //       width: '300px',
            //       height: '120px',
            //       padding: '10px 50px',
            //       marginLeft: '40px',
            //       boxShadow: '2px 2px 2px 0',
            //     }}
            //     className="card"
            //   >
            //     <div className="card-body">
            //       <h3>{cardItems.symbol}</h3>
            //       <h5>{cardItems.price_increment}</h5>
            //     </div>
            //   </div>
            // </Link>

        })}
    </div>
  );
}
