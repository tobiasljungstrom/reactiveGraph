var React = require('react');
var NumberPane = require('./panes/numberPane/numberPane');
var BarPane = require('./panes/barPane/barPane');
var GraphInput = require('./panes/graphInput/graphInput');

var Graph = React.createClass({
    getInitialState: function() {
        return {
            data: [
                3,
                4,
                7,
                10,
                8,
                5
            ],
            labels: [
                'A',
                'B',
                'C',
                'D',
                'E',
                'F'
            ]
        };
    },
    updateData: function(index, data) {
        var newData = this.state.data;
        newData[index] = data;
        this.setState({data: newData});
    },

    render: function() {

        return (
            <div className='graph'>
                <NumberPane data={this.state.data}/>
                <BarPane data={this.state.data} labels={this.state.labels}/>
                <GraphInput data={this.state.data} updateData={this.updateData}/>
            </div>
        );
    }
});

module.exports = Graph;
