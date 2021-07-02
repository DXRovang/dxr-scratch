import React from 'react';
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  //using a function as part of props
  function Clock(props) {
    return (
      <div>
        <h2>It is {props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }

  //defining a functional Component
  function Welcome(props){
    return <h1>Ah, so this is {props.name}</h1>
  }

  //normal js var assignment
  const name = 'beanie weenie'
  //inserting JSX into another var
  const element = <h1>Hello, {name}</h1>;
  //inserting a Component into a var
  const elementTwo = <Welcome name="Bella"/>

  //returning JSX
  return (
    <Router>
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      {element}
      {elementTwo}
      <Clock date={new Date()} />
    </div>
    </Router>
    
  );
}

export default App;
