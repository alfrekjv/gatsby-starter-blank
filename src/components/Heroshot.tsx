import React, { useState } from 'react'
import * as styles from '../assets/styles.module.scss'

interface Props {
    title?: String,
    subtitle?: String
}

const Heroshot = (props: Props) => {
    const [title] = useState(props.title)
    const [subtitle] = useState(props.subtitle)

    return(
        <div className={styles.Heroshot}>
            <div className={styles.Centered}>
                <div className={styles.HeroshotMainText}>
                    {title && ( <h1>{title}</h1> )}
                    {subtitle && ( <h2>{subtitle}</h2> )}
                </div>
            </div>
        </div>
    )
}

export default Heroshot