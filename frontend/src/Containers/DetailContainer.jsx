import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { useParams } from 'react-router-dom';

function useDetails() {
  const { title, title2 } = useParams();

  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    try {
      const response = await fetch(
        'http://localhost:5000/cryptodata/' + title + '/' + title2
      );
      const jsonData = await response.json();
      setDetails(
        jsonData['bars'][title + '/' + title2] != undefined &&
          jsonData['bars'][title + '/' + title2]
      );
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getDetails();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return details;
}

export const detailContainer = createContainer(useDetails);
