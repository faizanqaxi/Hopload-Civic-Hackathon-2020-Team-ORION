import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';

function App() {
  return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
