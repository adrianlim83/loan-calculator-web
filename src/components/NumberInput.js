import React from 'react';

function NumberInput( {onChange, name, value, required, decimal}) {

    const onInputChange = (event) => {
        onChange(event);
    }

    return (
            <input
                type="number"
                name={name}
                defaultValue={value}
                onChange={event => onInputChange(event)}
                required='{required}'
                step="any"
                onKeyPress={(event) => {
                        if (decimal && !/[0-9]/.test(event.key)) {
                            event.preventDefault();
                        }
                    }}
                />
            )

}

export default NumberInput;