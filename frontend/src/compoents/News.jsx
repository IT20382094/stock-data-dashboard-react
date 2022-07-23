import React,{useEffect, useState} from 'react'
import NewsModal from './NewsModal';

export default function News() {
  const [news, setNews] = useState([]);

  const getNews = async () =>{
  try{
    const response = await fetch("http://localhost:5000/news");
    const jsonData = await response.json();
    setNews(jsonData.news);
      
  }catch(err){
    console.log(err.message);
  }
  };

  useEffect(()=>{
    getNews();
  },[]);

  return(
  <div>
    {news&&news.map((newss) =>{
      return <div className="card">
        <div className="card-body">
          <h5 className="card-title">{newss.headline}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{newss.author}</h6>
          <p className="card-text">{newss.created_at}</p>
          <NewsModal value={newss.headline}/>
        </div>
      </div>
    })
    }
  </div>
  )
}


