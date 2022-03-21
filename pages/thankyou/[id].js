import Head from "next/head";
import Link from 'next/link'
import { ThreeIcons } from "../../components/ThreeIcon";

import styles from '../../styles/Participant.module.css'

const Participant = ({ participant }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Danke an {participant.id}
                </title>
            </Head>
            <div>
                Participant {participant.id}

                {
                    participant.texts.map((text, index) => <div key={index} className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />)
                }

            </div>

            <ThreeIcons {...participant}></ThreeIcons>
            <div>
                {
                    participant.prevPage && <Link href="/thankyou/[id]" as={`/thankyou/${participant.prevPage}`}>
                        <a>&larr;</a>
                    </Link>
                }
                <Link href="/">
                    <a>Home</a>
                </Link>
                {
                    participant.nextPage && <Link href="/thankyou/[id]" as={`/thankyou/${participant.nextPage}`}>
                        <a>&rarr;</a>
                    </Link>
                }
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const req = await fetch(`http://localhost:3000/participants/${params.id}.json`);
    const data = await req.json();

    return {
        props: { participant: data }
    }
}

export async function getStaticPaths() {
    const req = await fetch(`http://localhost:3000/participants/_ids.json`);
    const data = await req.json();

    const paths = data.map(participantId => {
        return { params: { id: participantId } }
    })

    return {
        paths,
        fallback: false
    }
}


export default Participant;