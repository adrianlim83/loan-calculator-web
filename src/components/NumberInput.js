import React from 'react';
import PropTypes from "prop-types";

export default class NumberInput extends React.Component {
        constructor(props) {
            super(props);
            this.state = {value: this.props.value};
            this.onInputChange = this.onInputChange.bind(this);
        }
        
        onInputChange(event) {
            this.state.value = event.target.value;
            if (this.props.onChangeEvent) {
                this.props.onChangeEvent(event.target.value);
            }
        }
        
        render() {
            return (
                <input type="number" 
                    name={this.props.name} 
                    defaultValue={this.state.value}
                    onChange={this.onInputChange}
                    required='{this.props.required}'
                    step="any"
                    onKeyPress={(event) => {
                        if (!this.props.allowDecimals && !/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                    />
            )
            
        };
}

NumberInput.defaultProps = {
    required: false,
    allowDecimals: true,
    value: ''
};

NumberInput.propTypes = {
    name: PropTypes.string,
    required: PropTypes.bool,
    allowDecimals: PropTypes.bool,
    onChangeEvent: PropTypes.func // Handle event upon value change
};
