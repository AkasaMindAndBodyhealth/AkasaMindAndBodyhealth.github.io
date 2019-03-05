import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Carousel.scss';

class Carousel extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Carousel will mount');
  }

  componentDidMount = () => {
    console.log('Carousel mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Carousel will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Carousel will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Carousel did update');
  }

  componentWillUnmount = () => {
    console.log('Carousel will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div id="CarouselWrapper" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
              <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    );
  }
}

Carousel.propTypes = {
  // bla: PropTypes.string,
};

Carousel.defaultProps = {
  // bla: 'test',
};

export default Carousel;
