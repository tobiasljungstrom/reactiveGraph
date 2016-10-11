var React = require('react');

var Graph = React.createClass({
    getInitialState: function() {
        return {
            bars: [3, 5, 7, 2]
        };
    },
    render: function() {

        var returnBars = [];

        for (var i = 0; i < this.state.bars.length; i++) {
            returnBars[i] = <div className='bar'>{this.state.bars[i]}</div>;
        }

        return (
            <div className='graph'>
                {returnBars}
            </div>
        );
    }
});

module.exports = Graph;
