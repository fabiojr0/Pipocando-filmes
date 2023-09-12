import React from "react";
import Navbar from "./components/Navbar";


import Home from './routes/Home';
import Movies from './routes/Movies';
import Series from './routes/Series';
import Search from './routes/Search';
import ItemDetails from './routes/ItemDetails';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App sm:flex">
      <Router basename="/Pipocando-filmes">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/item/:id" element={<ItemDetails />} />
        </Routes>

    </Router>
    </div>
  );
}

export default App;
