var React = require('react');
//var injectTapEventPlugin = require('react-tap-event-plugin');
var RaisedButton = require('material-ui/lib/raised-button');
var AppBar = require('material-ui/lib/app-bar');
var Badge = require('material-ui/lib/badge');
var IconButton = require('material-ui/lib/icon-button');
var NotificationsIcon = require('material-ui/lib/svg-icons/social/notifications');
//injectTapEventPlugin();

var App = React.createClass({
  render: function() {
    return (
      <div className="container">
        <AppBar title="Hello Bank" iconName />
        <h1>Hello</h1>
        <RaisedButton label="Default" />
        <div>
    <Badge
      badgeContent={4}
      primary={true}
    >
      <NotificationsIcon />
    </Badge>
    <Badge
      badgeContent={10}
      secondary={true}
      badgeStyle={{top: 12, right: 12}}
    >
      <IconButton tooltip="Notifications">
        <NotificationsIcon/>
      </IconButton>
    </Badge>
  </div>
      </div>
    );
  }
});

module.exports = App;