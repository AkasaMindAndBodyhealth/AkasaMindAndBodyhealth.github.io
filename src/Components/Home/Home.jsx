import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../Carousel'
import './Home.scss';

class Home extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Home will mount');
  }

  componentDidMount = () => {
    console.log('Home mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Home will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Home will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Home did update');
  }

  componentWillUnmount = () => {
    console.log('Home will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="HomeWrapper">
        <div id="Home" className="container">
          <div id="sliderContainer" className="jumbotron">
            <Carousel />
            <hr/>
            <p><i>Information and statements about the products and services on this site have not been evaluated by the Food and Drug Administration and are not intended to diagnose, treat, cure, or prevent any disease. You should not use the information contained herein for diagnosing or treating a health problem or disease, or prescribing any medication. If you have or suspect that you have a medical problem, promptly contact your medical doctor or health care provider.</i></p>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  // bla: PropTypes.string,
};

Home.defaultProps = {
  // bla: 'test',
};

export default Home;
