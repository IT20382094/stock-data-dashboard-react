import './App.css';
import Stock from './compoents/Stock/Stock';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from './compoents/Details/Detail';

function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Stock/>} />
        <Route path="/Detail/:title/:title2" element={<Detail/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

// import React,{Component} from "react";
// import './App.css';

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       digit:0,
//     };
//   }

//   componentDidMount=()=>{
//     setInterval(()=>{
//       this.setState(prevState=>({
//         digit : prevState.digit +1
//       }))
//     },1000);
//   }

//   render(){
//     return <div className="App">counter:{this.state.digit}</div>

//   }
// }

// export default App;