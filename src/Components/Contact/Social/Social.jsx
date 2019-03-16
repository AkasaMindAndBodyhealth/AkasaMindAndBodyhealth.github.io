import React from 'react';
import PropTypes from 'prop-types';
import './Social.scss';
import yelp from './yelp-logo-vector.png';
import fb from './Facebook.png';

const Social = (props) => (
  <div id="SocialWrapper">
    <h2>Let's Socialize</h2>
    <div className="row">
      <div className="col-12">
        <a href="https://www.facebook.com/Akasabodyhealth/" target="_blank" rel="noopener noreferrer">
          <img className="fb-logo" src={fb} alt="Akasa Mind and Bodyhealth on Facebook" />
        </a>
      </div>
      <div className="col-12">
        <a href="https://www.yelp.com/biz/akasa-mind-and-bodyhealth-arvada-2" target="_blank" rel="noopener noreferrer">
          <img className="yelp-logo" src={yelp} alt="Akasa Mind and Bodyhealth on Yelp" />
        </a>
      </div>
    </div>
  </div>
);

Social.propTypes = {
  // bla: PropTypes.string,
};

Social.defaultProps = {
  // bla: 'test',
};

export default Social;
