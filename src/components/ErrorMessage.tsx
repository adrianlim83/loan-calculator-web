import React from "react";

import "./ErrorMessage.css";

/**
 * Rendering an error messages
 *
 * @returns quote page
 */
export class ErrorMessage extends React.Component<Exception> {
  render() {
    const { message } = this.props;
    return (
      <label id="errorMessage">
        {message && <label className="error">{message}</label>}
      </label>
    );
  }
}

/**
 * Contains the specific props type that can be passing
 */
interface Exception {
  message: String;
}

export default ErrorMessage;
