var React = require('react');
var NumberPane = require('./panes/numberPane/numberPane');
var BarPane = require('./panes/barPane/barPane');
var GraphInput = require('./panes/graphInput/graphInput');

var Graph = React.createClass({
    getInitialState: function() {
        return {
            data: [3, 5, 7, 2, 8, 5]
        };
    },
    render: function() {

        return (
            <div className='graph'>
                <NumberPane />
                <BarPane />
                <GraphInput />
            </div>
        );
    }
});

module.exports = Graph;
