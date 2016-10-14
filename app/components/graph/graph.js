var React = require('react');
var NumberPane = require('./panes/numberPane/numberPane');
var BarPane = require('./panes/barPane/barPane');
var GraphInput = require('./panes/graphInput/graphInput');

var Graph = React.createClass({
    getInitialState: function() {
        return {
            data: [3, 4, 7, 1, 8, 5]
        };
    },

    updateData: function(index, data) {
        var newData = this.state.data;
        newData[index] = data;
        this.setState({
            data: newData
        });
    },

    render: function() {

        return (
            <div className='graph'>
                <NumberPane />
                <BarPane data={this.state.data}/>
                <GraphInput data={this.state.data} updateData={this.updateData}/>
            </div>
        );
    }
});

module.exports = Graph;
