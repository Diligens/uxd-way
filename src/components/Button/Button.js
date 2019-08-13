import React from 'react'
import styles from './button.css'


function Button(props) {
    const {
        children,
        title
    } = props

    return (
        <button className={styles.button} title={title}>
            {children}
        </button>
    );
}

// This export will be picked up in ./index.js
export default Button;