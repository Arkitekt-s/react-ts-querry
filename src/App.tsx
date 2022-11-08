import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ActivityPage} from "./pages/ActivityPage";
import {CreatActivity} from "./components/CreatActivity";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Activities} from "./components/Activities";
import {SearchActivity} from "./components/SearchActivity";
// toast contineralways should be in html otherwise toast will not work

function App() {
  return (

      <BrowserRouter>
          <nav className="nav flex-column">
              <a className="nav-link active" aria-current="page" href="#">Active</a>
              <a className="nav-link" href="/">Home</a>
              <a className="nav-link" href="/home">Creat</a>
              <SearchActivity/>
          </nav>
            <Routes>
                <Route  path="/" element={<><ActivityPage/></>}/>
                <Route  path="/home" element={<CreatActivity/>}/>
            </Routes>
          {/*// toast contineralways should be in html otherwise toast will not work*/}
<ToastContainer/>
        </BrowserRouter>
  )

}

export default App;
