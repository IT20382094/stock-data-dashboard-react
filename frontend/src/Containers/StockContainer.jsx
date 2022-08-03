import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';

function UseStock() {
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

  return card;

}

export const stockContainer = createContainer(UseStock);
