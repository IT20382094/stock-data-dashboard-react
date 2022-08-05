import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import axios from 'axios';

function UseStock() {
  const [card, setCard] = useState([]);

  async function getCard() {
    try {
      const response = await axios.get('http://localhost:5000/cryptos');
      setCard(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getCard();
  }, []);

  return card;
}

export const stockContainer = createContainer(UseStock);
