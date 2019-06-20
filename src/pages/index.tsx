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
                    <title>Title</title>
                    <link rel="canonical" href="https://juvasoft.com/" />
                </Helmet>
                <Header />
                <div className={styles.Homepage}>
                    <h1>Welcome!</h1>
                </div>
                <Footer />
            </section>
        )
    }
}