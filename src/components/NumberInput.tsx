import React from "react";

/**
 * Extended React component to render a specific input html tag
 * which accept decimal or non decimal, event function binding, and any
 * reusable attributes we can simplify on top of html input
 */
export default class NumberInput extends React.Component<NumberInputProp> {
  /**
   * Declare default props' value if it doesn't supply
   */
  static defaultProps = {
    required: false,
    allowDecimals: true,
    value: "",
  };

  constructor(param: NumberInputProp) {
    super(param);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event: any) {
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
        value={this.props.value}
        onChange={this.onInputChange}
        required={this.props.required}
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
 * Contains the specific props type that can be passing
 */
interface NumberInputProp {
  name: string;
  value: string;
  required: boolean;
  allowDecimals: boolean;
  onChangeEvent: (v: string) => void; // Handle event upon value change
}
