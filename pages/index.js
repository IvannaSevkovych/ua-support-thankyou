import Head from 'next/head'
import Image from 'next/image'

import { Wave } from "../components/Wave";
import { HomeLink } from '../components/HomeLink';
import { StartButton } from '../components/StartButton';
import { TransitionCurtain } from '../components/TransitionCurtain.js';

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
                            <StartButton />
                        </div>
                        {/* Wave */}
                        <Wave />
                    </div>
                    {/* Yellow wrapper */}
                    <div className={styles.yellow__wrapper}>
                        <div className={styles.subtitle__wrapper}>
                            <h2 className={styles.subtitle}>Familie Sevkovych sagt: <span>Danke!</span></h2>
                            <p>
                                Hallo zusammen! Wir sind die Familie Sevkovych: Oleksandr, Nataliia, Dima, Ivanna, Maksym und Sascha. Wir kommen aus Kyiv und leben seit vielen, vielen Jahren in Stuttgart. Der Krieg in unserer alten Heimat hat auch unser Leben start durcheinander gewirbelt. Zu Beginn des Krieges haben wir beschlossen, dass wir den flüchtenden Menschen irgendwie helfen müssen. Auf unseren Hilferuf haben sehr viele Menschen hier in Deutschland reagiert, und bei diesen Menschen wollen wir uns jetzt bedanken. Danke Euch vom ganzen Herzen!
                            </p>
                            <p>
                                Manche von Euch haben unsere Hilfsaktion direkt unterstützt. Andere haben ihre eigenen, viel größeren Hilfsaktionen gestartet und wir haben uns wie ein kleines Zahnrädchen eingefügt. Um Euch allen unsere tiefste Dankbarkeit und Anerkennung zu zeigen, haben Ivanna und Dima diese kleine Webseite erstellt. Wir hoffen Euch mit ein bisschen Spaß beim Durchklicken belohnen zu können. Klickt auf &quot;START&quot; um unserem Recap von Beginn an zu folgen. Oder springt direkt zu der Euch interessierenden Seite mit den Links weiter unten.
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