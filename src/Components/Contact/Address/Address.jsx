import React from 'react';
import PropTypes from 'prop-types';
import './Address.scss';

const Address = (props) => (
  <div id="AddressWrapper" className="row">
    <div className="col-12">
      <div className="row">
        <div className="col-12">
          <h3>Phone Number</h3>
          <a href="tel:+17203826832"><i class="fas fa-phone"></i> 720-382-6832</a>
        </div>
      </div>
      <h3>Address</h3>
      <div className="row">
        <div className="col-12">
          <a href="https://www.google.com/maps/dir/?api=1&destination=10050+Ralston+Rd+Arvada,+CO+80004" rel="noopener noreferrer" target="_blank">
            <h5>
              10050 Ralston Rd<br/>
              Arvada, CO 80004
            </h5>
          </a>
        </div>
        <div className="col-12">
          <a href="http://maps.apple.com/?daddr=10050+Ralston+Rd+Arvada,+CO+80004&dirflg=d&t=h" rel="noopener noreferrer" >
            Directions with Apple Maps (iPhone) <i class="fab fa-apple"></i>
          </a>
        </div>
        <div className="col-12">
          <a href="https://www.google.com/maps/dir/?api=1&destination=10050+Ralston+Rd+Arvada,+CO+80004" rel="noopener noreferrer" >
            Directions with Google Maps (Google Maps App) <i class="fab fa-google"></i>
          </a>
        </div>
      </div>
      
    </div>
  </div>
);

Address.propTypes = {
  // bla: PropTypes.string,
};

Address.defaultProps = {
  // bla: 'test',
};

export default Address;
