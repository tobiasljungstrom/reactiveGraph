var React = require('react');

var BarFill = React.createClass({
    render: function() {

        var barStyle = {
            height: this.props.height
        };

        return <div className='barFill' style={barStyle}></div>;
    }
});

module.exports = BarFill;
