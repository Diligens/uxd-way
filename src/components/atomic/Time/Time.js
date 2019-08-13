import React from 'react'

function Time(props) {
    const {
        children
    } = props

    return (
        <time {...props}>
            {children}
        </time>
    );
}

export default Time;