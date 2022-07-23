import './App.css';
import Stock from './compoents/Stock';
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from './compoents/Detail';

function App() {
  return (
    <div className="App">
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
