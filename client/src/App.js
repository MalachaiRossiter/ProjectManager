import React, { useState } from 'react';
import axios from 'axios';
import {browserRouter, Routes, Route, BrowserRouter} from 'react-router-dom';
import Main from '../views/Main';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Main/>} path="/home" default/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
