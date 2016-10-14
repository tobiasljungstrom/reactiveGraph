var React = require('react');

var NumberPane = React.createClass({
    propTypes: {
        data: React.PropTypes.array
    },

    render: function() {
        var maxValue = Math.max.apply(Math, this.props.data);

        var calculatedNumbers = [];
        for (var i = 0; i < 5; i++) {
            calculatedNumbers[i] = Math.round(maxValue - (i * maxValue * 0.2));
        }

        for (var j = 0; j < calculatedNumbers.length; j++) {
            calculatedNumbers[j] = <div className='numberPane__item' key={j}>{calculatedNumbers[j]}</div>;
        }

        return (
            <div className='numberPane'>
                {calculatedNumbers}
            </div>
        );
    }
});

module.exports = NumberPane;
