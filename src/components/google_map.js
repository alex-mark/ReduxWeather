import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: new google.maps.LatLng(this.props.lon, this.props.lat)
    })
  }

  render() {
    return (
      <div ref="map"></div>
    )
  }
}

export default GoogleMap;
