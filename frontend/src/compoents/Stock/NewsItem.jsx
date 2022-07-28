import React from 'react';

function NewsItem({images, headline, summary, author, created_at, url}) {
  return (
    <div style={{ marginBottom: '40px' }} className="card">
      <div className="card-body">
        {images[0] !== undefined && (
          <img src={images[0].url} width="500" height="250"></img>
        )}
        <h4 className="card-title">{headline}</h4>
        <h6 className="card-text">{summary}</h6>
        <div className="row">
          <div className="col-6">
            <h6 className="card-subtitle mb-2 text-muted">
              {author}
            </h6>
            <p className="card-text">{created_at}</p>
          </div>
          <div className="col-6" style={{ align: 'right' }}>
            <button
              variant="primary"
              style={{ fontSize: '20px' }}
              className="btn btn-link"
              onClick={() => window.open(url)}
            >
              View more
            </button>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default NewsItem;
