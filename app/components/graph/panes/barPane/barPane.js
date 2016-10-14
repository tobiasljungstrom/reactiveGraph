var React = require('react');
var Bar = require('./bar/bar');

var BarPane = React.createClass({
    propTypes: {
        data: React.PropTypes.array
    },

    render: function() {

        var calculatedMaxValue = Math.max.apply(Math, this.props.data);

        var calculatedHeights = [];
        for (var i = 0; i < this.props.data.length; i++) {
            calculatedHeights[i] = this.props.data[i] / calculatedMaxValue * 500;
        }

        var bars = [];

        for (var i = 0; i < this.props.data.length; i++) {
            bars[i] = <Bar key={i} height={calculatedHeights[i]} />;
        }

        return (
            <div className='barPane'>
                {bars}
            </div>
        );
    }
});

module.exports = BarPane;
