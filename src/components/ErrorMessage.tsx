import React from "react";
import styled from "styled-components";
import Label from "./Label";

// Create a reusable styled label component
const StyledLabel = styled.label`
  border: 1px solid;
  padding: 3px;
  margin: 1rem;
  height: auto;
  background-repeat: no-repeat;
  background-position: 10px center;
  color: #D8000C;
  background-color: #FFBABA;
  border-radius: 4px;
`;

/**
 * Rendering an error messages
 *
 * @returns quote page
 */
export class ErrorMessage extends React.Component<ExceptionProp> {
  render() {
    const { message } = this.props;
    return (
      <>
        {message && <StyledLabel><Label value={message} /></StyledLabel>}
      </>
    );
  }
}

/**
 * Contains the specific props type that can be passing
 */
interface ExceptionProp {
  message: String | undefined;
}

export default ErrorMessage;
