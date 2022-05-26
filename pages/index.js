import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { getPlaiceholder } from "plaiceholder";

import { HomeLink } from '../components/HomeLink';
import { textTransition } from '../animations/animations.js';

import styles from '../styles/Home.module.scss'

import participantIds from '../data/_ids'

export default function Home({ participants, imageProps }) {
    return (
        <div>
            <div className={styles.container}>
                <Head>
                    <title>Дякуємо!💛💙</title>
                    <meta name="description" content="Familie Sevkovych sagt Danke für Eure Unterstützung!" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className={styles.container}>
                    {/* Blue wrapper */}
                    <motion.div className={styles.blue__wrapper} transition={{ staggerChildren: 0.3, when: "beforeChildren" }}>
                        <motion.div variants={textTransition} initial="hidden" animate="enter" exit="exit">
                            {/* Overlay image */}
                            <Image
                                className={styles.blue__background}
                                alt="Dima und Ivanna Sevkovych"
                                {...imageProps}
                                placeholder="blur"
                                layout="fill"
                                objectFit="cover"
                                quality={40}
                                priority
                            />
                        </motion.div>
                        <motion.div className={styles.blue__foreground} variants={textTransition} initial="hidden" animate="enter" exit="exit">
                            {/* for aligning the link element */}
                            <div></div>
                            <Link href="/thankyou/jb_steuerberatung">
                                <a className={styles.title}>
                                    Дякуємо!
                                </a>
                            </Link>
                        </motion.div>
                    </motion.div>
                    {/* Yellow wrapper */}
                    <motion.div className={styles.yellow__wrapper}>
                        <motion.div className={styles.subtitle__wrapper} variants={textTransition} initial="hidden" animate="enter" exit="exit">
                            <h1 className={styles.subtitle}>Familie Sevkovych sagt: <span>Danke!</span></h1>
                            <p>
                                Hallo zusammen! Wir sind die Familie Sevkovych: Oleksandr, Nataliia, Dima, Ivanna, Maksym und Sascha. Wir kommen aus Kyiv und leben seit vielen, vielen Jahren in Stuttgart. Der Krieg in unserer alten Heimat hat auch unser Leben stark durcheinander gewirbelt. Zu Beginn des Krieges haben wir beschlossen, dass wir den flüchtenden Menschen irgendwie helfen müssen. Auf unseren Hilferuf haben sehr viele Menschen hier in Deutschland reagiert, und bei diesen Menschen wollen wir uns jetzt bedanken. Danke Euch vom ganzen Herzen!
                            </p>
                            <p>
                                Manche von Euch haben unsere Hilfsaktion direkt unterstützt. Andere haben ihre eigenen, viel größeren Hilfsaktionen gestartet und wir haben uns wie ein kleines Zahnrädchen eingefügt. Um Euch allen unsere tiefste Dankbarkeit und Anerkennung zu zeigen, haben Ivanna und Dima diese kleine Webseite erstellt. Wir hoffen Euch mit ein bisschen Spaß beim Durchklicken belohnen zu können. Klickt auf <span className={styles.headline__font}>Дякуємо!</span> auf dem blauen Hintergrund um unserem Recap von Beginn an zu folgen. Oder springt direkt zu der Euch interessierenden Seite mit den Links weiter unten.
                            </p>
                        </motion.div>
                        <motion.div className={styles.links__wrapper} variants={textTransition} initial="hidden" animate="enter" exit="exit">
                            {
                                participants.map(p => <HomeLink key={p.id} id={p.id} name={p.name} />)
                            }
                        </motion.div>
                    </motion.div>
                </main>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // Participants data
    const participants = []

    const promises = participantIds.map(async id => {
        const { default: unusedDefault, ...data } = await import(`../data/${id}.json`)
        participants.push(data)
    })

    await Promise.all(promises)

    // Background image blur
    const { base64, img } = await getPlaiceholder('/assets/photos/sevkovych_index_overlay.jpg');

    // Return
    return {
        props: {
            participants: participants,
            imageProps: {
                src: img.src,
                blurDataURL: base64,
            }
        }
    }
}