import React from 'react';
import logo from '../../images/img.png';

function NewsItem({ images, headline, summary, author, created_at, url }) {

  const A1 = {
    marginRight: '40px',
    marginBottom: '40px',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 0px 20px',
    borderRadius: '5px',
    color: 'LightGray',
  };
  const A2 = {
    fontSize: '16px',
    fontFamily: 'Readex Pro',
    fontWeight: 'Regular',
    color: '#034AA6',
  };
  const A3 = { align: 'right' };
  const A4 = {
    textAlign: 'left',
    fontFamily: 'Readex Pro',
    fontSize: '16px',
    fontWeight: 'Medium',
    color: 'black',
  };
  const A5 = {
    textAlign: 'left',
    fontFamily: 'Readex Pro',
    color: '#979797',
    fontSize: '12px',
    fontWeight: 'Regular',
  };
  const A6 = {
    textAlign: 'left',
    fontFamily: 'Readex Pro',
    color: '#000000',
    fontSize: '12px',
    fontWeight: 'Regular',
  };
  const A7 = {
    textAlign: 'left',
    fontFamily: 'Readex Pro',
    color: '#8E959E',
    fontSize: '12px',
    fontWeight: 'Regular',
  };

  return (
    <div style={A1} className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-3">
            {images[0] != undefined && (
              <img src={images[0].url} width="100" height="100"></img>
            )}
            {images[0] == undefined && (
              <img src={logo} width="100" height="100"></img>
            )}
          </div>
          <div className="col-9">
            <h4 style={A4}>{headline}</h4>
            <h6 style={A5}>{summary}</h6>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-8">
            <h6 style={A6}>{author}</h6>
            <p style={A7}>{created_at}</p>
          </div>
          <div className="col-4" style={A3}>
            <button
              style={A2}
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
