import React from 'react';
import ButtonCss from './button.css'

function Button(props) {
    return (
        <button className={ButtonCss.button} {...props}>
            {props.children}
        </button>
    );
}

// This export will be picked up in ./index.js
export default Button;