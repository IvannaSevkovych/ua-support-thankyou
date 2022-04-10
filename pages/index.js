import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'


import { Wave } from "../components/Wave";
import { HomeLink } from '../components/HomeLink';
import { TransitionCurtain } from '../animations/animations.js';

import styles from '../styles/Home.module.scss'

import participantIds from '../data/_ids'

export default function Home({ participants }) {
    return (
        <div>
            <TransitionCurtain/>
            <div className={styles.container}>
                <Head>
                    <title>TODO</title>
                    <meta name="description" content="TODO" />
                    {/* TODO */}
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.container}>
                    {/* Blue wrapper */}
                    <div className={styles.blue__wrapper}>
                        {/* Overlay image */}
                        <Image
                            className={styles.blue__background}
                            alt="Dima und Ivanna Sevkovych"
                            src="/assets/photos/sevkovych_index_overlay.jpg"
                            layout="fill"
                            objectFit="cover"
                            quality={100}
                            priority
                        />
                        <div className={styles.blue__foreground}>
                            {/* for aligning the h1 element */}
                            <div></div>
                            <h1 className={styles.title} >
                                Дякуємо!
                            </h1>
                            <Link href="/thankyou/jb_steuerberatung">
                                <a className={styles.link__wrapper}>
                                    <span>Start</span>
                                    <svg className={styles.link__arrow} viewBox="0 0 39 155" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path vectorEffect="non-scaling-stroke" d="M34 154L1.99999 77.5L34 1" strokeWidth="2" />
                                        <path vectorEffect="non-scaling-stroke" d="M38 125L18 77.5L38 30" strokeWidth="1" />
                                    </svg>
                                </a>
                            </Link>
                        </div>
                        {/* Wave */}
                        <Wave />
                    </div>
                    {/* Yellow wrapper */}
                    <div className={styles.yellow__wrapper}>
                        <div className={styles.subtitle__wrapper}>
                            <h2 className={styles.subtitle}>Familie Sevkovych sagt: <span>Danke!</span></h2>
                            <p>
                                Wir, eine seit vielen Jahren in Stuttgart lebende Familie aus Kyiv, wollen uns bei sehr vielen von unseren Mitmenschen bedanken, die Zeit, Kraft und materielle Ressourcen zur Unterstützung der ukrainischen Bevölkerung aufgebracht haben und weiterhin aufbringen. Mit vereinten Kräften helfen wir alle das Elend des Krieges abzuschwächen und die Welt wieder ein Stückchen humaner und lebenswerter zu machen. Danke Euch vom ganzen Herzen!
                            </p>
                            <p>
                                Manche von Euch haben unsere Hilfsaktion direkt unterstützt. Andere haben ihre eigenen, viel größeren Hilfsaktionen gestartet und wir haben uns wie ein kleines Zahnrädchen eingefügt. Um Euch allen unsere tiefste Dankbarkeit und Anerkennung zu zeigen, haben wir diese kleine Webseite auf die Beine gestellt. Wir hoffen Euch mit ein bisschen Spaß beim Durchklicken belohnen zu können. Klickt auf START um unserem kleinen Recap von Beginn an zu folgen. Oder springt zu der Euch interessierenden Seite mit den Links weiter unten.
                            </p>
                        </div>
                        <div className={styles.links_wrapper}>
                            {
                                participants.map(p => <HomeLink key={p.id} id={p.id} name={p.name} />)
                            }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export async function getStaticProps() {

    const participants = []

    const promises = participantIds.map(async id => {
        const { default: unusedDefault, ...data } = await import(`../data/${id}.json`)
        participants.push(data)
    })

    await Promise.all(promises)

    return {
        props: { participants: participants }
    }
}