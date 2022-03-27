import Link from 'next/link'

import styles from '../styles/Arrow.module.scss'


export const Arrow = ({ next, prev }) => {

    const style = [styles.arrow]
    if (next) {
        style.push(styles.arrow__next)
    }

    const page = next ? next : prev;

    return (
        <Link href="/thankyou/[id]" as={`/thankyou/${page}`}>
            <a>
                <svg className={style.join(' ')} viewBox="0 0 39 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path vectorEffect="non-scaling-stroke" d="M34 154L1.99999 77.5L34 1" strokeWidth="2" />
                    <path vectorEffect="non-scaling-stroke" d="M38 125L18 77.5L38 30" strokeWidth="1" />
                </svg>
            </a>
        </Link>
    )

}