import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Contact.styles';

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
        Test content
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
