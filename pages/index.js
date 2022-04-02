import Link from 'next/link'
import Head from 'next/head'
import Emoji from '../components/Emoji'

import styles from '../styles/Home.module.css'

import participantIds from '../data/_ids'

export default function Home({ participantIds }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>TODO</title>
                <meta name="description" content="TODO" />
                {/* TODO */}
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div>
                    <h1 className={styles.title}>
                        Familie Sevkovych Sagt Danke!
                    </h1>

                    <p>
                        Wir, eine seit vielen Jahren in Stuttgart <Emoji symbol='🇩🇪' label='Deutschland' /> lebende Familie aus Kyiv <Emoji symbol='🇺🇦' label='Ukraine' />, wollen uns bei sehr vielen von unseren Mitmenschen bedanken, die Zeit, Kraft und materielle Ressourcen zur Unterstützung der ukrainischen Bevölkerung aufgebracht haben und weiterhin aufbringen. Mit vereinten Kräften helfen wir alle das Elend des Krieges abzuschwächen und die Welt wieder ein Stückchen humaner und lebenswerter zu machen. Danke Euch vom ganzen Herzen <Emoji symbol='❤️' label='Herz' />!
                    </p>

                    <p>
                        Manche von Euch haben unsere Hilfsaktion direkt unterstützt. Andere haben ihre eigenen, viel größeren Hilfsaktionen gestartet und wir haben uns wie ein kleines Zahnrädchen eingefügt. Um Euch allen unsere tiefste Dankbarkeit und Anerkennung zu zeigen, haben wir diese kleine Webseite auf die Beine gestellt. Wir hoffen Euch mit ein bisschen Spaß beim Durchklicken belohnen zu können. Klickt auf START um unserem kleinen Recap von Beginn an zu folgen. Oder springt zu der Euch interessierenden Seite mit den Links weiter unten.
                    </p>
                </div>

                <div>
                    {/* TODO: Section + call to action -> start button */}
                </div>

                <div>
                    {
                        participantIds.map(id => {
                            return (
                                <div key={id}>
                                    <Link href="/thankyou/[id]" as={`/thankyou/${id}`}>
                                        <a>{id}</a>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>

            </main>
        </div >
    )
}

export async function getStaticProps() {
    return {
        props: { participantIds: participantIds }
    }
}