import React,{useState} from 'react'
import Detail from './Detail';
import {useNavigate,Link} from "react-router-dom";
import Item from './Item';

const Card = ({title, amount}) =>{
  let pass = "hello";
 

  return (
    <div>
      <div className="card">
          <div className="card-body">
            <h4 className="card-subtitle mb-2 text-muted">{title}</h4>
            <p className="card-text">{amount}</p>
           <Link to={"/Detail/"+title+"/"+amount}><button className="btn btn-primary">Show</button></Link>
          </div>
      </div>
    </div>
  )
}





export default Card;
