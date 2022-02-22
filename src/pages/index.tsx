import React from 'react'
import * as styles from '../assets/styles.module.scss'
import { default as Header } from '../components/header'
import { default as Footer } from '../components/footer'
import { default as Heroshot } from '../components/Heroshot'

const Index = () => {
    return (
        <section>
            <Header />
            <Heroshot />
            <div className={styles.Homepage}>
                <div className={styles.Centered}>
                    <h1>Heading 1</h1>
                    <h2>Heading 2</h2>
                    <h3>Heading 3</h3>
                    <h4>Heading 4</h4>
                    <h5>Heading 5</h5>

                    <p>Hello world!</p>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default Index