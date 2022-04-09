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
                {/* <div className={styles.link__icon}>
                    <svg className={styles.icon} viewBox="0 0 39 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path vectorEffect="non-scaling-stroke" d="M34 154L1.99999 77.5L34 1" strokeWidth="2" />
                        <path vectorEffect="non-scaling-stroke" d="M38 125L18 77.5L38 30" strokeWidth="1" />
                    </svg>
                    <div className={styles.icon}>
                        &rarr;
                    </div>
                </div> */}
            </a>
        </Link>
    )
}
