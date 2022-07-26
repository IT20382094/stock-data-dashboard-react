import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";

export default function Card() {
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
  
  //  console.log(card);

  return(
  <div>
    {card&&card.map((cards) =>{
      return <div style={{marginBottom:"40px",boxShadow:"8px 8px 8px 0"}} className="card">
        <div className="card-body">
          <h3>{cards.symbol}</h3>
          <h5>{cards.price_increment}</h5>
          <Link to={"/Detail/"+cards.symbol}><button style={{padding:"10px 70px", borderRadius:"20px"}} className="btn btn-primary">Show</button></Link>
        </div>
      </div>
    })
    }
  </div>
  )
}

