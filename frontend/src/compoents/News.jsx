import React,{Fragment, useEffect, useState} from 'react'
import NewsModal from './NewsModal';

// export default function News() {
//   const [news, setNews] = useState([]);


//   const getNews = async () =>{
//   try{
//       const response = await fetch("http://localhost:5000/news");
//       const jsonData = await response.json();
//       // console.log(jsonData);
//       setNews(jsonData);
      
//   }catch(err){
//     console.log(err.message);
//   }
//   };

//   useEffect(()=>{
//     getNews();
//   },[]);

//   return(
//   <div>
//     {news.map((news) =>{
//       // console.log(news);
//       <div class="card">
//         <div class="card-body">
//           <h5 class="card-title">{news.title}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">{news.author}</h6>
//           <p class="card-text">{news.description}</p>
//           <NewsModal value={news.description}/>
//         </div>
//     </div>
//     })
//     }
//   </div>
//   )
// }



function News(s) {
  let value=s
  return (
    <div>
      <a href="#" class="list-group-item list-group-item-action">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">List group item heading</h5>
                    <small class="text-muted">3 days ago</small>
                  </div>
                  <p class="mb-1">{value.title}</p>
                  <NewsModal value={value.title}/>
                </a>
    </div>
  )
}

export default News;

