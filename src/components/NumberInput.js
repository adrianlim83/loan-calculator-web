import React from "react";
import PropTypes from "prop-types";

/**
 * Extended React component to render a specific input html tag
 * which accept decimal or non decimal, event function binding, and any
 * reusable attributes we can simplify on top of html input
 */
export default class NumberInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.value };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ value: event.target.value });
    if (this.props.onChangeEvent) {
      this.props.onChangeEvent(event.target.value);
    }
  }

  render() {
    return (
      <input
        type="number"
        name={this.props.name}
        defaultValue={this.state.value}
        onChange={this.onInputChange}
        required="{this.props.required}"
        step="any"
        onKeyPress={(event) => {
          if (!this.props.allowDecimals && !/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
    );
  }
}

/**
 * Declare default props' value if it doesn't supply
 */
NumberInput.defaultProps = {
  required: false,
  allowDecimals: true,
  value: "",
};

/**
 * Contains the specific props type that can be passing
 */
NumberInput.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  allowDecimals: PropTypes.bool,
  onChangeEvent: PropTypes.func, // Handle event upon value change
};