require('./app.scss');

var React = require('react');
var Graph = require('./graph/graph');

var App = React.createClass({
    render: function() {
        return (

            <div>
                <h1>Reactive!</h1>
                <div>
                    <Graph />
                </div>
            </div>

        );
    }
});

module.exports = App;
