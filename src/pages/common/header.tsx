import * as React from 'react'
import * as styles from '../../assets/styles.module.scss'

export default class Header extends React.Component<{}, {}> {
    render() {
        return (
            <header className={styles.Header}>
                <div className={styles.Centered}>
                    Header goes here
                </div>
            </header>
        )
    }
}