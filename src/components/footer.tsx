import React from 'react'
import * as styles from '../assets/styles.module.scss'
import Heart from '../../assets/vectors/heart.svg'

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.BrewedWithLove}>
                <p>Brewed with <Heart /> By <a href='https://juvasoft.com'>Juvasoft.</a></p>
            </div>
        </footer>
    )
}

export default Footer