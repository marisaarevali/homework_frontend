import './App.css';
import Start from './Start';
import Cashregister from './Cashregister';
import {Checkout} from './Checkout';
import {BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3">
        React JS frontend
      </h3>

      <nav className="navbar navbar-expand-sm bg-light navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/start">
              Start
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/cashregister">
              Cashregister
            </NavLink>
          </li>
          <li className="nav-item- m-1">
            <NavLink className="btn btn-light btn-outline-primary" to="/checkout">
              Checkout
            </NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path='/start' element={<Start />}/>
        <Route path='/cashregister' element={<Cashregister />}/>
        <Route path='/checkout' element={<Checkout />}/>
      </Routes>



    </div>
    </BrowserRouter>
  );
}

export default App;
