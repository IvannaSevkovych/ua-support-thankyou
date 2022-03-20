import Head from "next/head";
import { ThreeIcons } from "../../components/ThreeIcon";

import styles from '../../styles/Participant.module.css'

const participant = ({ participant }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Danke an {participant.id}
                </title>
            </Head>
            <div>
                Participant {participant.id}

                <div className={styles.text} dangerouslySetInnerHTML={{__html: participant.text}} />
            </div>

            <ThreeIcons {...participant}></ThreeIcons>
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

    const paths = data.map( participantId => {
        return { params: { id : participantId } }
    })

    return {
        paths,
        fallback: false
    }
}


export default participant;