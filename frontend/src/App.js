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
