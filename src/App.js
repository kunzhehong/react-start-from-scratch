import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import { NavMenu } from './components/NavMenu';
import { MyRoute } from './components/MyRoute';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div className="App">
        <NavMenu/>
      <div className="content">
       <MyRoute/>
      </div>
      </div>
    );
  }
}

