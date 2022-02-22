import React, { useState, useEffect } from 'react'
import * as styles from '../assets/styles.module.scss'
import { Helmet } from 'react-helmet'
import Navbar from '../components/navbar'

interface Props {
    link?: string
    title?: string
    description?: string
    coverImage?: string
}

const Header = (props: Props) => {
    const [title, setTitle] = useState(props.title)
    const [link, setLink] = useState(props.link)
    const [description, setDescription] = useState(props.description)
    const [coverImage, setCoverImage] = useState(props.coverImage)

    useEffect(() => {
        setTitle(props.title || 'Title')
        setLink(props.link || 'https://juvasoft.com')
        setDescription(props.description || 'Description')
        setCoverImage(props.coverImage || 'https://juvasoft.com')
    }, [props])

    return(
        <header>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <link rel="canonical" href={link} />
                <meta name="author" content="@juvasoft" />

                <link rel="apple-touch-icon" sizes="57x57" href="/assets/images/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/assets/images/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/assets/images/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/assets/images/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/assets/images/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/assets/images/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/assets/images/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/assets/images/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192"  href="/assets/images/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/assets/images/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#ffffff" />
                <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
                <meta name="theme-color" content="#ffffff" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@juvasoft" />
                <meta name="twitter:creator" content="@juvasoft" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image:src" content={coverImage} />

                <meta property="og:title" content={title} />
                <meta property="og:site_name" content={title} />
                <meta property="og:url" content={link} />
                <meta property="og:type" content="website" />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={coverImage} />
            </Helmet>

            <Navbar />

        </header>
    )

}

export default Header