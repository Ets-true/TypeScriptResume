import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/todo" element={<h1>ToDo</h1>}/>
        <Route path="/profile" element={<h1>Профиль</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;