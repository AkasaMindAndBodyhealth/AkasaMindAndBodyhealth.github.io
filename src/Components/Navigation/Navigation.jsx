import React, { Component } from 'react';
import akasaLogo from '../../images/akasaLogo.png';
import { Link }  from 'react-router-dom';

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
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="navbar-collapse collapse justify-content-center" id="collapsingNavbar">
          <ul id="pageLinks" className="navbar-nav w-100 justify-content-center">
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
              <li className="nav-link">Contacts</li>
            </Link>
          </ul>
          <ul id="social" className="nav navbar-nav ml-auto w-100 justify-content-end">
            <li className="nav-item">
              <a className="nav-link active" target="_blank"  rel="noopener noreferrer" href="https://www.yelp.com/biz/akasa-mind-and-bodyhealth-arvada-2">
                <i class="fab fa-yelp"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank"  rel="noopener noreferrer"  href="https://www.facebook.com/Akasabodyhealth/">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank"  rel="noopener noreferrer"  href="tel:+17203826832">
                <i class="fas fa-phone-square"></i>
              </a>
            </li>
          </ul> 
          <a id="bookEm" className="btn btn-success" target="_blank"  rel="noopener noreferrer"  href="tel:+17203826832">
          Book Now <i class="fa fa-calendar" aria-hidden="true"></i>
          </a>
        </div>
        
      </nav>
    );
  }

  componentDidMount() {
    this.setState({ someKey: 'otherValue' });
  }
}

export default Navigation;
