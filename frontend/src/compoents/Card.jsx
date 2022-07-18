import React from 'react'

const Card = ({title}) =>{
  return (
    <div>
      <div className="card">
          <div className="card-body">
            <h4 className="card-subtitle mb-2 text-muted">{title}</h4>
            <p className="card-text">50USD</p>
            <p className="card-text"><a href="#" class="btn btn-primary">View more</a></p>
          </div>
      </div>
    </div>
  )
}

export default Card
