import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './component/Details/Details';
import Header from './component/Header/Header';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalis" element={<Details />} />
        </Routes>
      </React.StrictMode>
    </div>
  );
}

export default App;
