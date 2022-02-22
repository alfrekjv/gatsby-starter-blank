import React, { useEffect, useState } from 'react'
import * as styles from '../assets/styles.module.scss'

const Navbar = () => {
    const [hideMenu, setHideMenu] = useState(false)

    useEffect(() => {
        _handleResize()
        window.addEventListener('resize', _handleResize)
    }, [])

    const _handleResize = () => {
        const { innerWidth: width } = window
        if (width <= 900) {
            setHideMenu(true)

            return 
        }

        setHideMenu(false)
    }

    const _toggleMenu = () => {
        if (hideMenu) {
            setHideMenu(false)
            return 
        }

        setHideMenu(true)
    }

    return (
        <section className={styles.Navbar}>
            <div className={styles.Logo}>
                <a href="/">
                    <img src={`/assets/images/logo.svg`} />
                </a>
            </div>
        </section>
    )
}

export default Navbar