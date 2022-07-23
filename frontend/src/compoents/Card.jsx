import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";

export default function Card({title,amount}) {
  const [card, setCard] = useState([]);

  const getCard = async () =>{
  try{
    const response = await fetch("http://localhost:5000/cryptos");
    const jsonData = await response.json();
    setCard(jsonData);   
  }catch(err){
    console.log(err.message);
  }
  };

  useEffect(()=>{
    getCard();
  },[]);
  
   console.log(card);

  return(
  // <div>
  //   <div>
  //     <div className="card">
  //       <div className="card-body">
  //         <h4 className="card-subtitle mb-2 text-muted">{title}</h4>
  //         <p className="card-text">{amount}</p>
  //         <Link to={"/Detail/"+title+"/"+amount}><button className="btn btn-primary">Show</button></Link>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div>
    {card&&card.map((cards) =>{
      return <div className="card">
        <div className="card-body">
          <h5 className="card-title">{cards.symbol}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{cards.name}</h6>
          <p className="card-text">{cards.price_increment}</p>
          <Link to={"/Detail/"+cards.name+"/"+cards.price_increment}><button className="btn btn-primary">Show</button></Link>
        </div>
      </div>
    })
    }
  </div>
  )
}