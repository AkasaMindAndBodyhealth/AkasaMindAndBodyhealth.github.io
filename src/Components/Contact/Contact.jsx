import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Map from './Map';
import './Contact.scss';

class Contact extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Contact will mount');
  }

  componentDidMount = () => {
    console.log('Contact mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Contact will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Contact will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Contact did update');
  }

  componentWillUnmount = () => {
    console.log('Contact will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="ContactWrapper">
        <div className="container">
          <h2 className="text-center">Need Directions?  Want to follow us on Social Media to get specials?</h2>
          <div className="row">
            <div className="col-6">
              
            </div>
            <div className="col-6 align-content-center">
              <Map />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Contact.propTypes = {
  // bla: PropTypes.string,
};

Contact.defaultProps = {
  // bla: 'test',
};

export default Contact;
