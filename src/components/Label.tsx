import React from "react";
import styled from "styled-components";

// Create a reusable styled label component
const StyledLabel = styled.label`
  margin: 10px;
  padding: 4px;
`;

export default class Label extends React.Component<LabelProp> {
  /**
   * Declare default props' value if it doesn't supply
   */
  static defaultProps = {
    value: ''
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
