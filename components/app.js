/** @jsx React.DOM */
'use strict';
var React = require('react/addons'),
    Banner = require('./banner'),
    Logo = require('./logo'),
    Connect = require('./connect');

var App = React.createClass({
  render: function() {

    return (
      <div className="main-app">
        <div className="logo-container">
          <Logo></Logo>
        </div>
        <div className="first-con">
          <Banner></Banner>
          <div className="first-con_bot">
            <h2>
              We build fast, data-rich, offline capable websites that bring
              the future to your users.
            </h2>
          </div>
        </div>
        <Connect></Connect>
      </div>
    );
  }
});

module.exports = App;
