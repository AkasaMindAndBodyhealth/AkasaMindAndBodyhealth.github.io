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
    style: 'mapbox://styles/mapbox/cjaudgl840gn32rnrepcb9b9g',
    zoom: 10,
    center: [-105.111295, 39.808610]
    });
    
    map.on("load", function () {
      /* Image: An image is loaded and added to the map. */
      map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
          id: "marker",
          type: "symbol",
          /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
          source: {
            type: "geojson",
            data: {
              type: 'FeatureCollection',
              features: [
                {
                type: 'Feature',
                properties: {
                  description: "<div id='popup'><b>Akasa Mind and Bodyhealth</b></div>"
                },
                geometry: {
                type: "Point",
                coordinates: [-105.11123, 39.8086]
                }
              }]
              }
            },
            layout: {
              "icon-image": "custom-marker",
              "text-field": "Akasa Mind and Bodyhealth",
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.7],
              "text-anchor": "top"
              
            }
          });
          map.addSource('dem', {
            "type": "raster-dem",
            "url": "mapbox://mapbox.terrain-rgb"
            });
            map.addLayer({
            "id": "hillshading",
            "source": "dem",
            "type": "hillshade"
            // insert below waterway-river-canal-shadow;
            // where hillshading sits in the Mapbox Outdoors style
            }, 'waterway-river-canal-shadow');
        });
      });
      map.on('click', 'marker', function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
         
        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
         
        new mapboxgl.Popup()
        .setLngLat([-105.11511, 39.809032])
        .setHTML(description)
        .addTo(map);
      });
      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on('mouseenter', 'marker', function () {
        map.getCanvas().style.cursor = 'pointer';
      });
        
        // Change it back to a pointer when it leaves.
        map.on('mouseleave', 'marker', function () {
        map.getCanvas().style.cursor = '';
      });
      map.flyTo({
        // These options control the ending camera position: centered at
        // the target, at zoom level 9, and north up.
        center: [-105.11123, 39.8086],
        zoom: 15,
        bearing: -30,
         
        // These options control the flight curve, making it move
        // slowly and zoom out almost completely before starting
        // to pan.
        speed: 0.35, // make the flying slow
        curve: 1, // change the speed at which it zooms out
         
        // This can be any easing function: it takes a number between
        // 0 and 1 and returns another number between 0 and 1.
        easing: function (t) { return t; }
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
