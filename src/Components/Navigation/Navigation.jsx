import React, { Component } from 'react';
import akasaLogo from '../../images/akasaLogo.png';
import { BrowserRouter as Link } from 'react-router-dom';
import './Navigation.scss';


class Navigation extends Component {
  constructor() {
    super();
    this.state = { someKey: 'someValue' };
  }

  render() {
    return (
      <nav id="main-navigation" className="navbar navbar-expand-md">
        <Link to={'/'}>
           <div className="navbar-brand" href="/"><img src={akasaLogo} alt="Akasa Mind and Bodyhealth"/></div>
        </Link>
        <div className="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
          <ul id="pageLinks" className="nav justify-content-center">
            <Link to={'/'} className="nav-item">
              <li className="nav-link">Home</li>
            </Link>
            <Link to={'/about'} className="nav-item">
              <li className="nav-link">About</li>
            </Link>
            <Link to={'/services'} className="nav-item">
              <li className="nav-link">Services</li>
            </Link>
            <Link to={'/contact'} className="nav-item">
              <li className="nav-link">Contact Us</li>
            </Link>
          </ul>
          <ul id="social" className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" href="https://www.yelp.com/biz/akasa-mind-and-bodyhealth-arvada-2">
                <i class="fab fa-yelp"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://www.facebook.com/Akasabodyhealth/">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tel:+17203826832">
                <i class="fas fa-phone-square"></i>
              </a>
            </li>
          </ul>
        </div> 
      </nav> 
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Navigation;
