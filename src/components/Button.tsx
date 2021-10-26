import React from "react";
import styled from "styled-components";

// Create a reusable styled button component
const StyledButton = styled.button`
  background-color: #1877f2;
  color: #fff;
  font-weight: 400;
  margin: 20px 0;

  border: none;
  border-radius: 6px;
  border-color: #4267b2;
  font-size: 20px;
  line-height: 48px;
  padding: 0 16px;
  width: auto;

  &:hover,
  &:focus {
    box-shadow: 0px 3px 20px 3px rgb(0 122 255 / 30%);
    background-color: #4267b2;
  }
`;

export default class Button extends React.Component<ButtonPrpp> {
  /**
   * Declare default props' value if it doesn't supply
   */
  static defaultProps = {
    value: ''
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
