import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

export default function News() {
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

  return (
    <div>
      {news &&
        news.map((newsItems) => {
          return (
            <NewsItem images = {newsItems.images} headline={newsItems.headline} summary={newsItems.summary} author={newsItems.author}  created_at={newsItems.created_at} url={newsItems.url}/>
          );
        })}
    </div>
  );
}
