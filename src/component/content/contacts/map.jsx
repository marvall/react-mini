import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React from "react";
import googleMapStyles from "./googleMapStyles";

export class Maps extends React.Component {
  render() {
    const mapStyles = googleMapStyles;
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{ lat: 48.633763, lng: 35.258367 }}
      >
        <Marker position={{ lat: 48.633763, lng: 35.258367 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDW9eRZO2lteaAquBnVHKxC64pv-jhbHC8",
})(Maps);
