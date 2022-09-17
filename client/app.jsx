import React, { Component } from 'react';
import MainContainer from './containers/MainContainer.jsx';
import './styles.css';

const App = () => {
  console.log('App rendering');
  return (
    <div className="app">
      <h1>hello</h1>
      <MainContainer />
    </div>
  );
};

export default App;
