import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Navigation from './Components/Navigation';
import StickyFooter from "./Components/StickyFooter";
import Home from './Components/Home';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navigation />
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} /> */}
          </div>
        </Router>
        <StickyFooter/>
      </div>
    );
  }
}

export default App;
