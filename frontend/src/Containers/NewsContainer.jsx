import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';
import { commonStock } from './StockContainer';
import axios from 'axios';

function UseNews() {
  const [news, setNews] = useState([]);

  async function getNews() {
    try {
      const response = await axios.get('http://localhost:5000/news');
      setNews(response.data.news);
      console.log(response.data.news);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getNews();
  }, []);

  return news;
}

export const newsContainer = createContainer(UseNews);
