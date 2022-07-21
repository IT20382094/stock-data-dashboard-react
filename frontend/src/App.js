import './App.css';
import Stock from './compoents/Stock';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from './compoents/Detail';

function App() {
  return (
    <div className="App">
      {/* <Stock/> */}
      <Router>
      <Routes>
        <Route path="/" element={<Stock/>} />
        <Route path="/Detail/:title/:value" element={<Detail/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;


// import React, {Component} from 'react';
// import Newss from './compoents/newss';
    
// class App extends Component {
//     render() {
//         return (
//             <Newss newss={this.state.newss} />
//         )
//     }
    
//     state = {
//         newss: []
//     };
 
//     componentDidMount() {
//         fetch("http://api.mediastack.com/v1/news?access_key=YOUR_ACCESS_KEY&languages=en")
//             .then(res => res.json())
//             .then((res) => {
//                 this.setState({ newss: res.data })
//             })
//             .catch(console.log)
//     }
// }
 
// export default App;