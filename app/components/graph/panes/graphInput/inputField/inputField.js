var React = require('react');

var InputField = React.createClass({
    propTypes: {
        defaultValue: React.PropTypes.number,
        updateColumn: React.PropTypes.func,
        inputId: React.PropTypes.number
    },

    handleChange: function(event) {
        var value = event.target.value;
        if(!value){
            value = 0;
        }
        this.props.updateColumn(this.props.inputId, parseInt(value));
    },

    render: function() {



        return (
            <div className='inputField'>
                <input type="text" value={this.props.defaultValue} onChange={this.handleChange}/>
            </div>
            );
    }
});

module.exports = InputField;
