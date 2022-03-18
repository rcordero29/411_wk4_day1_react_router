import React from 'react';
import Navigation from './components/Navigation'
import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from "./components/Home"
import About from "./components/About"
import Car from './components/Car';
// Write imports for Router & BrowserRouter here //

function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/About" component={About}/>
      <Route path="/car/:id" component={Car}/>

    </Switch>
    </BrowserRouter>
  );
}

export default App;
