import React from "react";
import styled from "styled-components";

// Create a reusable styled button component
const StyledButton = styled.button`
  border-radius: 6px;
  padding: 0.5rem 1rem;
  background-color: #007aff;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 400;
  margin: 40px 0;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 20px 3px rgb(0 122 255 / 30%);
    background-color: #007aff;
  }
`;

export default class Button extends React.Component<ButtonPrpp> {
  /**
   * Declare default props' value if it doesn't supply
   */
  static defaultProps = {
    value: "",
  };

  render() {
    return (
      <StyledButton onClick={this.props.onClick}>
        {this.props.value}
      </StyledButton>
    );
  }
}

/**
 * Contains the specific props type that can be passing
 */
interface ButtonPrpp {
  value: string;
  onClick: () => void; // Handle event upon onclick
}
