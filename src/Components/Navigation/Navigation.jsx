import React, { Component } from 'react';
import Link from 'react-router';

class Navigation extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <nav id="main-navigation" className="navbar">
            <a class="navbar-brand" href="#">Navbar</a>
            <ul className="nav">
                <li className="nav-link">About</li>
                <li className="nav-link">Services</li>
                <li className="nav-link"></li>
            </ul>
        </nav>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Navigation;
