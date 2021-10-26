import React from "react";
import styled from "styled-components";

// Create a reusable styled input component
const StyledInput = styled.input`
  margin: 10px;
  border: 1 px solid #dddfe2;
  border-radius: 6px;
  padding: 8px;
`;

export default class Input extends React.Component<InputPrpp> {
  /**
   * Declare default props' value if it doesn't supply
   */
  static defaultProps = {
    type: 'text',
    value: '',
    required: false
  };

  constructor(param: InputPrpp) {
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
      <StyledInput
        onChange={this.onInputChange}
        type={this.props.type}
        name={this.props.name}
        defaultValue={this.props.value}
        required={this.props.required}
      />
    );
  }
}

/**
 * Contains the specific props type that can be passing
 */
interface InputPrpp {
  type: string;
  name: string;
  value: string;
  required: boolean;
  onChangeEvent: (v: string) => void; // Handle event upon onclick
}
