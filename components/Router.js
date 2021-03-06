/* eslint no-unused-vars: 0 */
var React = require('react'),

    // react router
    Router = require('react-router'),
    Route = Router.Route,
    NotFound = Router.NotFoundRoute,
    DefaultRoute = Router.DefaultRoute,

    // # Components
    App = require('./app'),
    Blog = require('./blog'),
    Home = require('./home'),
    FourOhFour = require('./errors/404');

var routes = (
  React.createElement(Route, {
    name: "app", 
    path: "/", 
    handler: App }, 

    React.createElement(DefaultRoute, {
      name: "home", 
      handler: Home }), 
    React.createElement(Route, {
      name: "blog", 
      path: "/blog/?:slug?", 
      handler: Blog }), 
    React.createElement(NotFound, {handler: FourOhFour })
  )
);

module.exports = function(Location) {
  return Router.create({
    routes: routes,
    location: Location
  });
};
