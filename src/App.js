import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { About } from './components/About';
import { NavMenu } from './components/NavMenu';

// let RouteList = [{path:'/', component: <Home/>}, {paht:'about', component: <About/>}]


export default class App extends Component {
  static displayName = App.name;

  render () {
    // TODO: find out how to map routes from array
    // let routes = RouteList.map((r,index) => 
    // <Route key={index} path={r.path} element={r.component} />)
    return (
      <div className="App">
        <NavMenu/>
      <div className="content">
      <Routes>
        <Route path='/' element={<Home/>} />        
        <Route path='/about' element={<About/>} />
      </Routes> 
      </div>
      </div>
    );
  }
}

