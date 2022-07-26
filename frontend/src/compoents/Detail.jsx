import React,{useEffect,useState} from 'react';
import {Link} from "react-router-dom";
import Chart from './Chart';
import {useParams} from 'react-router-dom';

export default function Detail() {
  const [details, setDetails] = useState([]);

  const getDetails = async () =>{
  try{
    const response = await fetch("http://localhost:5000/cryptodata");
    const jsonData = await response.json();
    setDetails(jsonData);   
  }catch(err){
    console.log(err.message);
  }
  };

  useEffect(()=>{
    getDetails();
  },[]);
  
// const data = details.bars[`DOGE/USD`];

console.log('Details:>>', details);
  // console.log('DATA:>>', data);

  return(
<div>
<div className='row'>
  <div className='col-8'>
    <h1>Bitcoin</h1>
    <br/>
  </div>
  <div className='col-4'>
    <h1></h1>
    <br/>
  </div>
</div>
<div className='row'>
  <div className='col-9'>
    <Chart/>
  </div>
</div>
<div className='col-3'>
    {/* {details&&details.map((cards) =>{
      console.log(cards);
      return <div className="card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-subtitle mb-2 text-muted">Name</h4>
            <p className="card-text">{}</p>
          </div>
        </div>
      </div>
    })
    } */}
</div>
</div>
)
}


// export default function Detail() {
//   const {title} = useParams();
//   console.log(title);
//   return (
//     <div>
//         <br/>
//         <br/>
//         <div className='row'>
//             <div className='col-9'>
//                 <Chart/>
//             </div>
//             <div className='col-3'>
//             <div>
//           <div className="card">
//             <div className="card-body">
//                 <h4 className="card-subtitle mb-2 text-muted">Name</h4>
//                 <p className="card-text">{title}</p>
//             </div>
//         </div>
//     </div>
//     <div>
//           <div className="card">
//             <div className="card-body">
//                 <h4 className="card-subtitle mb-2 text-muted">Current Value</h4>
//                 <p className="card-text"></p>
//             </div>
//         </div>
//     </div>
//     <div>
//           <div className="card">
//             <div className="card-body">
//                 <h4 className="card-subtitle mb-2 text-muted">Open Value</h4>
//                 <p className="card-text"></p>
//             </div>
//         </div>
//     </div>
//     <div>
//           <div className="card">
//             <div className="card-body">
//                 <h4 className="card-subtitle mb-2 text-muted">Max Value</h4>
//                 <p className="card-text"></p>
//             </div>
//         </div>
//     </div>
//     <div>
//           <div className="card">
//             <div className="card-body">
//                 <h4 className="card-subtitle mb-2 text-muted">Min Value</h4>
//                 <p className="card-text"></p>
//             </div>
//         </div>
//     </div>
//     <div>
//           <div className="card">
//             <div className="card-body">
//                 <h4 className="card-subtitle mb-2 text-muted">Volume</h4>
//                 <p className="card-text"></p>
//             </div>
//         </div>
//     </div>
//     <div>
//           <div className="card">
//             <div className="card-body">
//                 <h4 className="card-subtitle mb-2 text-muted">Market Cap</h4>
//                 <p className="card-text"></p>
//             </div>
//         </div>
//     </div>
//             </div>
//         </div>

//     </div>
//   )
// }




