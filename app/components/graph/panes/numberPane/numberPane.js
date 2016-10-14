var React = require('react');

var NumberPane = React.createClass({
    propTypes: {
        data: React.PropTypes.array
    },

    render: function() {
        var maxValue = Math.max.apply(Math, this.props.data);

        var calculatedNumbers = [];
        for (var i = 0; i < 10; i++) {
            calculatedNumbers[i] = (maxValue - (i * maxValue * 0.1)).toFixed(2);
        }

        for (i = 0; i < calculatedNumbers.length; i++) {
            var itemStyle = {
                bottom: (calculatedNumbers.length - i) * 50 + 1
            };
            calculatedNumbers[i] = <div className='numberPane__item' key={i} style={itemStyle}>{calculatedNumbers[i]}</div>;
        }

        return (
            <div className='numberPane'>
                {calculatedNumbers}
            </div>
        );
    }
});

module.exports = NumberPane;
