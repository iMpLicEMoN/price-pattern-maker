import React from 'react';
import './App.css';
import "antd/dist/antd.css";
import PricePatternMaker from './PricePatternMaker';
import Panel from './Panel';
import {createStore, createEvent} from 'effector'
import {createComponent, useStore} from 'effector-react'




function App() {
  return (
    <div className="App">

    <PricePatternMaker/>
    <Panel/>

     </div>
  );
}

export default App;
