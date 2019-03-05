import React, { Component } from 'react';
import akasaLogo from '../../images/akasaLogo.png';
import { Link }  from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Services from '../Services';
import Contact from '../Contact';


class Navigation extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
        <nav id="main-navigation" className="navbar">
            <Link className="navbar-brand" to={Home}><img src={akasaLogo} alt="Akasa Mind and Bodyhealth"/></Link>
            <ul className="nav">
                <Link to={About}>
                    <li className="nav-link">About</li>
                </Link>
                <Link to={Services}>
                    <li className="nav-link">Services</li>
                </Link>
                <Link to={Contact}>
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
