import './App.css';
import Stock from './compoents/Stock/Stock';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './compoents/Details/Detail';
import { detailContainer } from './Containers/DetailContainer';
import { stockContainer } from './Containers/StockContainer';
import { newsContainer } from './Containers/NewsContainer';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <stockContainer.Provider>
                <newsContainer.Provider>
                  <Stock />
                </newsContainer.Provider>
              </stockContainer.Provider>
            }
          />
          <Route
            path="/Detail/:title/:title2"
            element={
              <detailContainer.Provider>
                <Detail />
              </detailContainer.Provider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
