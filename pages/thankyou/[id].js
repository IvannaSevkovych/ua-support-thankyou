import Head from "next/head";
import Image from 'next/image'
import { ThreeIcons } from "../../components/ThreeIcon";
import { Arrow } from "../../components/Arrow";

import styles from '../../styles/Participant.module.scss'

const Participant = ({ participant }) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>
                    Danke an {participant.id}
                </title>
            </Head>

            {/* Blue wrapper */}
            <div className={styles.blue__wrapper}>

                {/* Overlay image */}
                <Image
                    className={styles.blue__background}
                    alt={participant.imgAlt}
                    src={`/assets/photos/${participant.id}.jpg`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />

                <div className={styles.blue__foreground}>
                    {/* Desktop prev arrow */}
                    {
                        participant.prevPage && <Arrow className={styles.desktop__only} prev={participant.prevPage} />
                    }
                    {/* Text content with home navigation */}
                    <div>
                        Participant {participant.id}
                        {
                            participant.texts.map((text, index) => <div key={index} className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />)
                        }
                    </div>
                </div>

            </div>

            {/* Yellow wrapper */}
            <div className={styles.yellow__wrapper}>

                {/* Canvas */}
                <ThreeIcons {...participant}></ThreeIcons>

                {/* Desktop next arrow */}
                {
                    participant.nextPage && <Arrow className={styles.desktop__only} next={participant.nextPage} />
                }
            </div>

            {/* <div>
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
            </div> */}
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