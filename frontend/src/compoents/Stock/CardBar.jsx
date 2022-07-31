import React, { useEffect, useState } from 'react';
import Card from './Card';

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
          return (
            <Card
              symbol={cardItems.symbol}
              price_increment={cardItems.price_increment}
            />
          );
        })}
    </div>
  );
}
