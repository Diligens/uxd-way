import React from 'react'

function Image(props) {
    const {
        imgSrc,
        imgAlt,
        imgCaption
    } = props

    return (
        <figure {...props}>
            <img src={imgSrc} alt={imgAlt}/>
            <figcaption>{imgCaption}</figcaption>
        </figure>
    );
}

export default Image;