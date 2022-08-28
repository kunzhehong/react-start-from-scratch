import React, { Component } from 'react';
import { Routes, Route, useRoutes } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { NavMenu } from './components/NavMenu';


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

function MyRoute() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    { path: "/about", element: <About /> },
  ]);

  return element;
}
