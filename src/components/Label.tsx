import React from "react";
import styled from "styled-components";
import { mediaQuery } from "./MediaQuery";

// Create a reusable styled label component
const StyledLabel = styled.label`
  width: 80%;
  padding: 12px;
  margin: 10px;
  resize: vertical;
  height: 1rem;

  ${mediaQuery("tablet")`
    width: 90%;
  `};
`;

export default class Label extends React.Component<LabelProp> {
  /**
   * Declare default props' value if it doesn't supply
   */
  static defaultProps = {
    value: "",
  };

  render() {
    return <StyledLabel>{this.props.value}</StyledLabel>;
  }
}

/**
 * Contains the specific props type that can be passing
 */
interface LabelProp {
  value: any;
}
