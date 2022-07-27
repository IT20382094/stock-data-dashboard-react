import React, { useEffect, useState } from 'react';

export default function News() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    console.log('aaa');
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

  // console.log(news);

  return (
    <div>
      {news &&
        news.map((newss) => {
          return (
            <div style={{ marginBottom: '40px' }} className="card">
              <div className="card-body">
                {/* <div className='row'> */}
                {/* <div className='col-6'> */}
                {newss.images[0] != undefined && (
                  <img src={newss.images[0].url} width="500" height="250"></img>
                )}
                {/* </div> */}
                {/* <div className='col-6'> */}
                <h4 className="card-title">{newss.headline}</h4>
                <h6 className="card-text">{newss.summary}</h6>
                <div className="row">
                  <div className="col-6">
                    <h6 className="card-subtitle mb-2 text-muted">
                      {newss.author}
                    </h6>
                    <p className="card-text">{newss.created_at}</p>
                  </div>
                  <div className="col-6" style={{ align: 'right' }}>
                    <button
                      variant="primary"
                      style={{ fontSize: '20px' }}
                      className="btn btn-link"
                      onClick={() => window.open(newss.url)}
                    >
                      View more
                    </button>
                  </div>
                </div>
              </div>
              <br />
              {/* </div> */}
            </div>
          );
        })}
    </div>
  );
}
