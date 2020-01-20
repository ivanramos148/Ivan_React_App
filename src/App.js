import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import './App.scss';
import './Components/styles/Component.scss';

import Header from './Components/Header.js'
import Body from './Components/Body.js'

function App() {
  return (
    <div className="App">
      <div className="headerBackGroundColor">
        <Header />
      </div>
      <div className="bodyBackgroundColor">
        <Body />
      </div>
    </div>
  );
}

export default App;
