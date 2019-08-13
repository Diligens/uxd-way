import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styles from './nav.css'

export default class Nav extends Component {
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
                <ul className={styles.ul}>
                    <li className={styles.li}><a href={linkUrl}>{linkText}</a></li>
                    <li className={styles.li}><a href={linkUrl}>{linkText}</a></li>
                    <li className={styles.li}><a href={linkUrl}>{linkText}</a></li>
                </ul>
            </nav>
        )
    }
}