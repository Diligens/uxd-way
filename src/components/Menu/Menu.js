import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './menu.css'

export default class Menu extends Component {
    static propTypes = {
        linkUrl: PropTypes.string,
        linkText: PropTypes.string
    }

    render() {
        const {
            linkUrl,
            linkText
        } = this.props

        return (
            <nav className={styles.nav}>
                <ul>
                    <li><a href={linkUrl}>{linkText}</a></li>
                </ul>
            </nav>
        )
    }
}