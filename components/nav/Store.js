var _ = require('lodash'),
    Rx = require('rx'),
    Store = require('rx-flux').Store,
    debug = require('debug')('r3dm:components:nav:store'),

    NavActions = require('./Actions');

var NavStore = Store.create({

  getInitialValue: function() {
    debug('setting initial value');
    return {
      links: [
        { name: 'Home', path: '/' },
        { name: 'Connect', path: '#connect' },
        { name: 'Blog', path: '/blog' }
      ]
    };
  },

  getOperations: function() {
    return Rx.Observable.merge(
      NavActions.setLinks
        .map(function(path) {
          debug('Store:setLinks:path', path);
          if (path.indexOf('/blog') !== -1) {
            return {
              links: [
                { name: 'Home', path: '/' },
                { name: 'Connect', path: '#connect' },
                { name: 'Blog', path: '/blog' }
              ]
            };
          } else {
            return {
              links: [
                { name: 'Home', path: '/' },
                { name: 'Blog', path: '/blog' }
              ]
            };
          }
        })
        .map(createTransform)
    );

    function createTransform(newState) {
      return {
        transform: function(state) {
          return _.assign({}, state, newState);
        }
      };
    }
  }
});

module.exports = NavStore;
