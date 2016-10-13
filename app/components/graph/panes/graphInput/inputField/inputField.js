var React = require('react');

var InputField = React.createClass({
    propTypes: {
        defaultValue: React.PropTypes.number,
        updateColumn: React.PropTypes.func,
        inputId: React.PropTypes.number
    },

    handleChange: function(event) {
        this.props.updateColumn(this.props.inputId, event.target.value);
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
