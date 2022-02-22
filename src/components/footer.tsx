import React from 'react'
import * as styles from '../assets/styles.module.scss'

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.BrewedWithLove}>
                <p>Brewed with <img src={'/assets/images/heart.svg'} /> By <a href="https://juvasoft.com">Juvasoft.</a></p>
            </div>
        </footer>
    )
}

export default Footer