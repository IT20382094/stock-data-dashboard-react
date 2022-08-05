import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function useDetails() {
  const { title, title2 } = useParams();

  const [details, setDetails] = useState([]);

  async function getDetails() {
    try {
      const response = await axios.get(
        'http://localhost:5000/cryptodata/' + title + '/' + title2
      );
      setDetails(
        response.data['bars'][title + '/' + title2] != undefined &&
          response.data['bars'][title + '/' + title2]
      );
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getDetails();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      getDetails();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return details;
}

export const detailContainer = createContainer(useDetails);
