import React from 'react'
import styles from './emergnLogo.css'

import white from "./logos/Emergn_logo_WHITE.png"

const imgSrc = {
    black: "./logos/Emergn_logo_BLACK.png",
    grey: "./logos/Emergn_logo_GREY_CMYK.png",
    rgb: "./logos/Emergn_logo_RGB.png",
    white: "./logos/Emergn_logo_WHITE.png"
}

function EmergnLogo(props) {
    const {
        link
    } = props

    return (
        <a href={link ? link : "https://www.emergn.com"}>
            <img 
                src={white} 
                className={styles.logo} 
                alt="Emergn company logo"
            />
        </a>
    );
}

export default EmergnLogo;