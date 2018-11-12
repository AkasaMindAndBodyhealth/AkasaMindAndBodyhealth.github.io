import React, { Component } from 'react';
import akasaLogo from '../../images/akasaLogo.png';
import Link from 'react-router';

class Navigation extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <nav id="main-navigation" className="navbar">
            <a className="navbar-brand" href="/"><img src={akasaLogo} alt="Akasa Mind and Bodyhealth"/></a>
            <ul className="nav">
                <Link to={}>
                    <li className="nav-link">About</li>
                </Link>
                <Link to={}>
                    <li className="nav-link">Services</li>
                </Link>
                <Link to={}>
                    <li className="nav-link">Contact Us</li>
                </Link>
            </ul>
        </nav>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Navigation;
