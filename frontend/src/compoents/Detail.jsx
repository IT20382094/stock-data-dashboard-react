import React from 'react';
import Chart from './Chart';
import {useParams} from 'react-router-dom';

export default function Detail() {
  const { title,value } = useParams();
  console.log(title)
  console.log(value)
  return (
    <div>
        <br/>
        <br/>
        <div className='row'>
            <div className='col-9'>
                <Chart/>
            </div>
            <div className='col-3'>
            <div>
          <div className="card">
            <div className="card-body">
                <h4 className="card-subtitle mb-2 text-muted">Name</h4>
                <p className="card-text">{title}</p>
            </div>
        </div>
    </div>
    <div>
          <div className="card">
            <div className="card-body">
                <h4 className="card-subtitle mb-2 text-muted">Current Value</h4>
                <p className="card-text">{value}</p>
            </div>
        </div>
    </div>
    <div>
          <div className="card">
            <div className="card-body">
                <h4 className="card-subtitle mb-2 text-muted">Open Value</h4>
                <p className="card-text">{value}</p>
            </div>
        </div>
    </div>
    <div>
          <div className="card">
            <div className="card-body">
                <h4 className="card-subtitle mb-2 text-muted">Max Value</h4>
                <p className="card-text">{value}</p>
            </div>
        </div>
    </div>
    <div>
          <div className="card">
            <div className="card-body">
                <h4 className="card-subtitle mb-2 text-muted">Min Value</h4>
                <p className="card-text">{value}</p>
            </div>
        </div>
    </div>
    <div>
          <div className="card">
            <div className="card-body">
                <h4 className="card-subtitle mb-2 text-muted">Volume</h4>
                <p className="card-text">{value}</p>
            </div>
        </div>
    </div>
    <div>
          <div className="card">
            <div className="card-body">
                <h4 className="card-subtitle mb-2 text-muted">Market Cap</h4>
                <p className="card-text">{value}</p>
            </div>
        </div>
    </div>
            </div>
        </div>

    </div>
  )
}




