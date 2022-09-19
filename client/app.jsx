import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import './styles.css';

const App = () => {
  console.log('App rendering');
  return (
    <div className="app">
      <nav className="navbar">
        <h1>
          <a href="/">
            <i className="fa-solid fa-otter"></i> HugelMaps
          </a>
        </h1>
      </nav>
      <MainContainer />
    </div>
  );
};

export default App;
