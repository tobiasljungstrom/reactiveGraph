var React = require('react');
var BarLabel = require('./barLabel/barLabel');
var BarFill = require('./barFill/barFill');

var Bar = React.createClass({
    propTypes: {
        height: React.PropTypes.number,
        label: React.PropTypes.string
    },

    render: function() {
        return (
            <div className='bar'>
                <BarFill height={this.props.height}/>
                <BarLabel text={this.props.label}/>
            </div>
            );
    }
});

module.exports = Bar;
