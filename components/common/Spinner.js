var React = require('react');

var Spinner = React.createClass({displayName: "Spinner",
  render: function() {
    return (
      React.createElement("svg", {
        className:  this.props.svgClass, 
        width: "65px", 
        height: "65px", 
        viewBox: "0 0 66 66", 
        xmlns: "http://www.w3.org/2000/svg"}, 
        React.createElement("circle", {
          className:  this.props.circleClass, 
          fill: "none", 
          strokeWidth: "6", 
          strokeLinecap: "round", 
          cx: "33", 
          cy: "33", 
          r: "30"}
        )
      )
    );
  }
});

module.exports = Spinner;
