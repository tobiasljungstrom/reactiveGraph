var React = require('react');
var Bar = require('./bar/bar');

var BarPane = React.createClass({
    propTypes: {
        data: React.PropTypes.array
    },

    render: function() {

        var bars = [];

        for (var i = 0; i < this.props.data.length; i++) {
            bars[i] = <Bar key={i} height={this.props.data[i]} />;
        }

        return (
            <div className='barPane'>
                {bars}
            </div>
        );
    }
});

module.exports = BarPane;
