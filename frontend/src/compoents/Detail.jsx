import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ChartL from './Chart';
import '../App.css';
export default function Detail() {
  const [details, setDetails] = useState([]);
  const {title,title2} = useParams();

  const getDetails = async () => {
    try {
      const response = await fetch('http://localhost:5000/cryptodata');
      const jsonData = await response.json();
      console.log(title);
      setDetails(jsonData['bars'][{title}][0]);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);


  return (
    <div style={{ backgroundColor: 'Gainsboro' }}>
      <br />
      <br />
      <div className="row">
        <div className="col-5">
          <h1 style={{ textAlign: 'left', paddingLeft: '40px' }}>
            Average prices
          </h1>
          <br />
        </div>
        <div className="col-5">
          <h1>{details.vw}</h1>
          <br />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <div
            style={{
              backgroundColor: '#303030',
              width: '1260px',
              marginBottom: '40px',
              marginLeft: '40px',
            }}
            className="card"
          >
            <div className="chart">
              <ChartL />
            </div>
          </div>
        </div>
        <div className="col-4">
          <div
            style={{
              marginBottom: '40px',
              marginRight: '40px',
              marginLeft: '40px',
              boxShadow: '8px 8px 8px 0',
              columns: '2 auto',
            }}
            className="card"
          >
            <div className="card-body">
              <h3>Open Price</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.o}</h4>
            </div>

            <div className="card-body">
              <h3>High Price</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.h}</h4>
            </div>

            <div className="card-body">
              <h3>Low Price</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.l}</h4>
            </div>

            <div className="card-body">
              <h3>Close Price</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.c}</h4>
            </div>

            <div className="card-body">
              <h3>Volume</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.v}</h4>
            </div>

            <div className="card-body">
              <h3>Number of Trades</h3>
              <h4 className="card-subtitle mb-2 text-muted">{details.n}</h4>
            </div>

            {/* <div className="card-body">
                <h3>Volume weighted average price</h3>
                <h4 className="card-subtitle mb-2 text-muted">{details.vw}</h4>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
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
//   <div className="card">
//     <div className="card-body">
//         <h4 className="card-subtitle mb-2 text-muted">Name</h4>
//         <p className="card-text">{title}</p>
//     </div>
// </div>
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
