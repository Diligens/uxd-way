import React from 'react'

function Meter(props) {
    const {
        children
    } = props

    return (
        <meter {...props}>
            {children}
        </meter>
    );
}

export default Meter;