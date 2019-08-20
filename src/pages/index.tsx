import * as React from 'react'
import * as styles from '../assets/styles.module.scss'
import { default as Header } from './common/header'
import { default as Footer } from './common/footer'
import { Helmet } from 'react-helmet'

interface PageProps {}

export default class Page extends React.Component<PageProps, {}> {

    constructor(props: any) {
        super(props)
    }

    public render() {
        return (
            <section className={styles.Container}>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>GatsbyJS Blank Template by Juvasoft</title>
                    <link rel="canonical" href="https://juvasoft.com/" />
                </Helmet>
                <Header />
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
}