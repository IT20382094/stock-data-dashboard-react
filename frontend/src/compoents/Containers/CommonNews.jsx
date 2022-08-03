import { useState, useEffect } from 'react';
import { createContainer } from 'unstated-next';

function CommonNews() {
    const [news, setNews] = useState([]);

    const getNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/news');
        const jsonData = await response.json();
        setNews(jsonData.news);
      } catch (err) {
        console.log(err.message);
      }
    };
  
    useEffect(() => {
      getNews();
    }, []);

  return news;
}

export const commonNews = createContainer(CommonNews);
