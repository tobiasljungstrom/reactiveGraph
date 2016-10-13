var React = require('react');
var Bar = require('./bar/bar');

var BarPane = React.createClass({
    render: function() {
        return (
            <div className='barPane'>
                <Bar height={100}/>
                <Bar height={200}/>
                <Bar height={300}/>
                <Bar height={400}/>
                <Bar height={300}/>
                <Bar height={100}/>
            </div>
        );
    }
});

module.exports = BarPane;
