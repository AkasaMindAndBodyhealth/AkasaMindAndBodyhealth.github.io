import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Services.scss';
//import { Test } from './Services.styles';

class Services extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Services will mount');
  }

  componentDidMount = () => {
    console.log('Services mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Services will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Services will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Services did update');
  }

  componentWillUnmount = () => {
    console.log('Services will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div id="ServicesWrapper">
        <iframe src="https://akasamindandbodyhealth.fullslate.com/"></iframe>
      </div>
    );
  }
}

Services.propTypes = {
  // bla: PropTypes.string,
};

Services.defaultProps = {
  // bla: 'test',
};

export default Services;
