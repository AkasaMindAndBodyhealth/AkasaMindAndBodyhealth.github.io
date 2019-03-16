import React, { PureComponent } from 'react';
import './About.scss';
import PropTypes from 'prop-types';


class About extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('About will mount');
  }

  componentDidMount = () => {
    console.log('About mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('About will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('About will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('About did update');
  }

  componentWillUnmount = () => {
    console.log('About will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div id="AboutWrapper">
        <div className="container">
          <h1 className="text-center">About Akasa</h1>
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">On Health and Healing</h2>
              <p>
              Health is not the absence of disease; it is balance and harmony of functioning in mind and body. 
              When our thoughts, emotions, body structure, physiology, and relationships are working in unison, we experience what we call health. 
              When something is out of balance, in our minds, bones or joints, organ systems, or relationships, we experience dysfunction in our health. 
              At Akasa we use many different services and therapeutic methods with the intention to help you restore balance and harmony in your life and relationships so you can achieve your personal health goals.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">Therapeutic Modalities</h2>
              <p>
              We strive for integration and do not compete with other modalities or practioners but instead work with them through Holistic services to bring a variety of alternatives to clients everywhere!! 
              We offer many different therapies that help promote holistic health including Massage/Bodywork, Skin Care, Aromatherapy, and Body Alignment!  
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

About.propTypes = {
  // bla: PropTypes.string,
};

About.defaultProps = {
  // bla: 'test',
};

export default About;
