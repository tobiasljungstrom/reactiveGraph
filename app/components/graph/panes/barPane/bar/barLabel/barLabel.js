var React = require('react');

var BarLabel = React.createClass({
    propTypes: {
        text: React.PropTypes.string
    },

    render: function() {
        return <div className='barLabel'>{this.props.text}</div>;
    }
});

module.exports = BarLabel;
