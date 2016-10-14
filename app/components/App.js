require('./app.scss');

var React = require('react');
var Graph = require('./graph/graph');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Graph/>
            </div>
        );
    }
});

module.exports = App;
