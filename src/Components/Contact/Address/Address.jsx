import React from 'react';
import PropTypes from 'prop-types';
import './Address.scss';

const Address = (props) => (
  <div id="AddressWrapper" className="row">
    <div className="col-12">
      <h3>Address</h3>
      <div>
        10050 Ralston Rd<br/>
        Arvada, CO 80004
      </div>
      <h3>Phone Number</h3>
      <a href="tel:+17203826832"><i class="fas fa-phone"></i> 720-382-6832</a>
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
