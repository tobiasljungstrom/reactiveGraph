var React = require('react');

var BarFill = React.createClass({
    propTypes: {
        height: React.PropTypes.number
    },
    
    render: function() {

        var barStyle = {
            height: this.props.height
        };

        return <div className='barFill' style={barStyle}></div>;
    }
});

module.exports = BarFill;
