import React from "react";
import PropTypes from "prop-types";

import "./ErrorMessage.css";

/**
 * Rendering an error messages
 *
 * @returns quote page
 */
function ErrorMessage(props) {

    return (
        <label id="errorMessage">
            {
                props.message && 
                <label className='error'>{props.message}</label>
            }

        </label>
    );
}

/**
 * Declare default props' value if it doesn't supply
 */
 ErrorMessage.defaultProps = {    
    message: '',
  };
  
  /**
   * Contains the specific props type that can be passing
   */
   ErrorMessage.propTypes = {
    message: PropTypes.string,
  };

export default ErrorMessage;