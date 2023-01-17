import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Details from './components/Details';
import Update from './components/Update';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default/>
          <Route element={<Details/>} path="/product/:id"/>
          <Route element={<Update/>} path="/product/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
