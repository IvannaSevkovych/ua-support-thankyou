import Link from 'next/link'

import styles from '../styles/HomeLink.module.scss'

export const HomeLink = ({ id, name }) => {
    return (
        <Link key={id} href="/thankyou/[id]" as={`/thankyou/${id}`}>
            <a className={styles.link}>
                <span className={styles.mask}>
                    <div className={styles.link__container}>
                        <span className={`${styles.link__title1} ${styles.title}`}>{name}</span>
                        <span className={`${styles.link__title2} ${styles.title}`}>{name}</span>
                    </div>
                </span>
                <div className={styles.link__icon}>
                    <div className={styles.icon} >
                        &rarr;
                    </div>
                    <div className={styles.icon}>
                        &rarr;
                    </div>
                </div>
            </a>
        </Link>
    )
}
