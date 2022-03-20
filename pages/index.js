import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
                <h1 className={styles.title}>
                    TODO
                </h1>

                {participantIds.map(id => {
                    return (
                        <div>
                            <Link href="/thankyou/[id]" as={`/thankyou/${id}`}>
                                <a>{id}</a>
                            </Link>
                        </div>
                    )
                }
                )}
            </main>
        </div >
    )
}

export async function getStaticProps() {
    const req = await fetch(`http://localhost:3000/participants/_ids.json`);
    const data = await req.json();

    return {
        props: { participantIds: data }
    }
}