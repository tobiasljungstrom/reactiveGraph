var React = require('react');
var BarLabel = require('./barLabel/barLabel');
var BarFill = require('./barFill/barFill');

var Bar = React.createClass({
    render: function() {
        return (
            <div className='bar'>
                <BarFill height={this.props.height}/>
                <BarLabel />
            </div>
            );
    }
});

module.exports = Bar;
