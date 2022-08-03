import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { commonNews } from '../Containers/CommonNews';

export default function News() {
  const news = commonNews.useContainer();


  return (
    <div>
      {news &&
        news.map((newsItems) => {
          return (
            <NewsItem
              images={newsItems.images}
              headline={newsItems.headline}
              summary={newsItems.summary}
              author={newsItems.author}
              created_at={newsItems.created_at}
              url={newsItems.url}
            />
          );
        })}
    </div>
  );
}
