import './App.css';
import Stock from './compoents/Stock/Stock';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Detail from './compoents/Details/Detail';
import { commonContainer } from './compoents/Containers/CommonDetails';
import { commonStock } from './compoents/Containers/CommonStock';
import { commonNews } from './compoents/Containers/CommonNews';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <commonStock.Provider>
                <commonNews.Provider>
                  <Stock />
                </commonNews.Provider>
              </commonStock.Provider>
            }
          />
          <Route
            path="/Detail/:title/:title2"
            element={
              <commonContainer.Provider>
                <Detail />
              </commonContainer.Provider>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
