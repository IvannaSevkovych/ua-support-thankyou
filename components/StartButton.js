import Link from 'next/link'
import styles from '../styles/StartButton.module.scss'

export const StartButton = props => {
    return (
        <Link href="/thankyou/jb_steuerberatung">
            <a className={styles.link__wrapper}>
                <span>Start</span>
                <svg className={styles.link__arrow} viewBox="0 0 39 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path vectorEffect="non-scaling-stroke" d="M34 154L1.99999 77.5L34 1" strokeWidth="2" />
                    <path vectorEffect="non-scaling-stroke" d="M38 125L18 77.5L38 30" strokeWidth="1" />
                </svg>
            </a>
        </Link>
    )
}