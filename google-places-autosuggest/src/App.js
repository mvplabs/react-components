var React = require('react');
var GoogleMapLoader = require('react-google-maps').GoogleMapLoader;
var GoogleMap = require('react-google-maps').GoogleMap;
var Marker = require('react-google-maps').Marker;
var Geosuggest = require('react-geosuggest');
var $ = require('jquery');

var App = React.createClass({
  locationSelected: function(data) {
    console.log(data);
  },
  render: function() {
    return (
      <div className="container">
      <h1>Autocomplete</h1>

      <Geosuggest onSuggestSelect={this.locationSelected}/>
    </div>
    );
  }
});

module.exports = App;