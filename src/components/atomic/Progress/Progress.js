import React from 'react'

function Progress(props) {
    const {
        children
    } = props

    return (
        <progress {...props}>
            {children}
        </progress>
    );
}

export default Progress;