var React = require('react');
var InputField = require('./inputField/inputField');

var GraphInput = React.createClass({

    render: function() {
        return (
            <div className='graphInput'>
                <InputField />
                <InputField />
                <InputField />
                <InputField />
                <InputField />
                <InputField />
            </div>
            );
    }
});

module.exports = GraphInput;
