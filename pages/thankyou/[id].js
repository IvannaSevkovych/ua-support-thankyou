import Head from "next/head";
import Image from 'next/image'

import { ThreeIcon } from "../../components/ThreeIcon";
import { Arrow } from "../../components/Arrow";
import { Wave } from "../../components/Wave";

import styles from '../../styles/Participant.module.scss'

import participantIds from '../../data/_ids'

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
                        participant.prevPage && <Arrow display='desktop' prev={participant.prevPage} />
                    }
                    {/* Text content with home navigation */}
                    <div>

                        <div className={styles.headline__wrapper}>
                            {/* Mobile prev arrow */}
                            {
                                participant.prevPage && <Arrow display='mobile' prev={participant.prevPage} />
                            }
                            <h1>{participant.name}</h1>
                            {/* Mobile next arrow */}
                            {
                                participant.nextPage && <Arrow display='mobile' next={participant.nextPage} />
                            }
                        </div>

                        {
                            participant.texts.map((text, index) => <div key={index} className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />)
                        }

                    </div>
                </div>

                {/* Wave */}
                <Wave />

            </div>

            {/* Yellow wrapper */}
            <div className={styles.yellow__wrapper}>

                {/* Canvases */}
                    <div className={styles.canvas__wrapper}>
                        {
                            participant.iconFiles.map((iconFile, index) => <ThreeIcon key={index} iconFile={iconFile} iconIndex={index} iconsTotal={participant.iconFiles.length} />)
                        }
                    </div>

                {/* Desktop next arrow */}
                {
                    participant.nextPage && <Arrow display='desktop' next={participant.nextPage} />
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
    const { default: unusedDefault, ...data } = await import(`../../data/${params.id}.json`)
    return {
        props: { participant: data }
    }
}

export async function getStaticPaths() {
    const paths = participantIds.map(participantId => {
        return { params: { id: participantId } }
    })

    return {
        paths,
        fallback: false
    }
}


export default Participant;