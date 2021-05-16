import React, { useEffect, useState } from 'react'
import * as styles from '../assets/styles.module.scss'
import Logo from '../assets/vectors/amordemi.svg'
import MobileMenu from '../assets/vectors/menu.svg'

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
            <section className={styles.Centered}>
                <div className={styles.Logo}>
                    <a href="/">
                        <Logo />
                    </a>
                </div>
                <nav className={`${styles.Menu} ${hideMenu ? styles.Hidden : ''}`}>
                    <a href="/">Inicio</a>
                </nav>
                <div className={styles.MobileMenu}>
                    <a onClick={_toggleMenu}>
                        <MobileMenu />
                    </a>
                </div>
            </section>
        </section>
    )
}

export default Navbar