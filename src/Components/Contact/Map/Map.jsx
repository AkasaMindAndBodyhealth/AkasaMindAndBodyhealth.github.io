import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import './Map.scss';

var map;

class Map extends PureComponent { 
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Map will mount');
  }

  componentDidMount = () => {
    console.log('Map mounted');
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpcG1lYW50ZGV2IiwiYSI6ImNqc3I1NTV5aDA5NTA0OXBid2w1cWhpNGQifQ.87vw04MAc-3uCaY0rAXOqg';
    map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/shipmeantdev/cjt13k04i0jyi1fqbcw40jvje',
    zoom: 13,
    center: [4.899, 52.372]
    });
    
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Map will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Map will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Map did update');
  }

  componentWillUnmount = () => {
    console.log('Map will unmount');
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div id="map"></div>
    );
  }
}

Map.propTypes = {
  // bla: PropTypes.string,
};

Map.defaultProps = {
  // bla: 'test',
};

export default Map;
