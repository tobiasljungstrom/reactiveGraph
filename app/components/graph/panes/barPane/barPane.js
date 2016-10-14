var React = require('react');
var Bar = require('./bar/bar');

var BarPane = React.createClass({
    propTypes: {
        data: React.PropTypes.array,
        labels: React.PropTypes.array
    },

    render: function() {

        var maxValue = Math.max.apply(Math, this.props.data);
        if (!maxValue) {maxValue = 1;}

        var calculatedHeights = [];
        for (var i = 0; i < this.props.data.length; i++) {
            calculatedHeights[i] = this.props.data[i] / maxValue * 500;
        }

        var bars = [];

        for (i = 0; i < this.props.data.length; i++) {
            bars[i] = <Bar key={i} height={calculatedHeights[i]} label={this.props.labels[i]}/>;
        }

        return (
            <div className='barPane'>
                {bars}
            </div>
        );
    }
});

module.exports = BarPane;
