import React from 'react'

function Details(props) {
    const {
        children,
        summary
    } = props

    return (
        <details {...props}>
            <summary>{summary}</summary>
            <p>
                {children}
            </p>
        </details>
    );
}

export default Details;