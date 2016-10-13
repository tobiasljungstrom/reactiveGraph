var React = require('react');
var InputField = require('./inputField/inputField');

var GraphInput = React.createClass({
    propTypes:{
        data: React.PropTypes.array,
        updateData: React.PropTypes.func
    },

    updateData: this.props.updateData;
    },

    render: function() {

        var fields = [];

        for (var i = 0; i < this.props.data.length; i++) {
            fields[i] = <InputField key={i} inputId={i} defaultValue={this.props.data[i]} updateColumn={this.updateData}/>;
        }
        return (
            <div className='graphInput'>
                {fields}
            </div>
        );
    }
});

module.exports = GraphInput;
