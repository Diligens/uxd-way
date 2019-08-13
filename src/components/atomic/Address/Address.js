import React from 'react'

function Address(props) {
    const {
        children
    } = props

    return (
        <address {...props}>
            {children}
        </address>
    );
}

export default Address;