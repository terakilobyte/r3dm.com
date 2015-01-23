var React = require('react'),
    copy = require('./services_copy.json').copy,
    Block = require('./services_block');

var Services = React.createClass({

  render: function() {
    var block = [
      'pure-u-1',
      'pure-u-md-1-3',
      'services_block',
      'services_block-padding'
    ].join(' ');

    var Blocks = copy.map(function(copy) {
      return (
        <Block
          className = { block }
          key = { copy.title }
          title = { copy.title }
          copy = { copy.copy }/>
      );
    });

    return (
      <div className="services">
        <div className = "services_subject-center services_heading">
          <h2>SERVICES</h2>
        </div>
        <div className = "pure-g services_content">
          { Blocks }
        </div>
      </div>
    );
  }
});

module.exports = Services;