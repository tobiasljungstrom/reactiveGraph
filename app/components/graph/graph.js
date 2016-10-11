var React = require('react');

var Graph = React.createClass({
    getInitialState: function() {
        return {
            data: [3, 5, 7, 2]
        };
    },
    render: function() {

        var returnBars = [];

        for (var i = 0; i < this.state.data.length; i++) {
            returnBars[i] = <div className='bar'>{this.state.data[i]}</div>;
        }

        return (
            <div className='graph'>
                {returnBars}
            </div>
        );
    }
});

module.exports = Graph;
