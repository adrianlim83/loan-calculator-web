import React from "react";
import styled from "styled-components";
import { mediaQuery } from "./MediaQuery";

// Create a reusable styled input component
const StyledInput = styled.input`
  width: 80%;
  padding: 12px;
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
  height: 1rem;

  ${mediaQuery("tablet")`
    width: 90%;
  `};
`;

export default class Input extends React.Component<InputPrpp> {
  /**
   * Declare default props' value if it doesn't supply
   */
  static defaultProps = {
    type: "text",
    value: "",
    required: false,
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
