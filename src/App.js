import React, { Component } from "react";
import Main from './components/MainComponent.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter} from 'react-router-dom';

class App extends  Component
{
 
  render()
  {

    return (
      <BrowserRouter>
      <div className="container-fluid p-0">
          <Main />
      </div>
      </BrowserRouter>
    );
  }
}
export default App;