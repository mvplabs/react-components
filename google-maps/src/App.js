var React = require('react');
var GoogleMapLoader = require('react-google-maps').GoogleMapLoader;
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;

var App = React.createClass({
  render: function() {
    var base = { lat: 50.8500, lng: 4.3500 };
    var that = this;
    
    var markers = [
      new google.maps.LatLng(50.8505, 4.3505),
      new google.maps.LatLng(50.8495, 4.3495)
    ];

    var mapMarkers = markers.map(function(marker, index) {
        return ( <Marker position={marker} /> );
    });
    
    return (
      <div className="container">
      <h1>Map</h1>
      <section style={{height: "100%"}}>
        <GoogleMapLoader
          containerElement={
            <div style={{ height: "100%" }} />
          } googleMapElement={
            <GoogleMap 
              defaultZoom={15}
              defaultCenter={ base } >
              { mapMarkers }
            </GoogleMap>
          }
        />
    </section>
    </div>
    );
  }
});

module.exports = App;