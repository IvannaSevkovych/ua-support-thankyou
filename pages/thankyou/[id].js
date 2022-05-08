import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

import { ThreeIcon } from "../../components/ThreeIcon";
import { Arrow } from "../../components/Arrow";
import { Wave } from "../../components/Wave";
import Emoji from '../../components/Emoji'
import { textTransition } from '../../animations/animations.js';

import styles from '../../styles/Participant.module.scss'

import participantIds from '../../data/_ids'

const Participant = ({ participant }) => {
    return (
        <div className={styles.container__wrapper}>
            <div className={styles.container}>
                <Head>
                    <title>
                        {participant.name}, danke!
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
                        quality={40}
                        priority
                    />
                    <div className={styles.blue__foreground}>
                        {/* Desktop prev arrow */}
                        {
                            participant.prevPage && <Arrow display='desktop' prev={participant.prevPage} />
                        }
                        {/* Text content with home navigation */}
                        <motion.div
                            transition={{ staggerChildren: 0.3, when: "beforeChildren" }}
                            className={styles.blue__content}>
                            <Link href="/">
                                <a className={styles.home__link}><Emoji symbol='🇺🇦' label='Ukraine' /> &nbsp; Zur Startseite</a>
                            </Link>
                            <motion.div variants={textTransition} initial="hidden" animate="enter" exit="exit" className={styles.headline__wrapper}>
                                {/* <span>Danke an:</span> */}
                                <div className={styles.headline__name__nav}>
                                    {/* Mobile prev arrow */}
                                    {
                                        participant.prevPage && <Arrow display='mobile' prev={participant.prevPage} />
                                    }
                                    <h1><Emoji symbol='💛' label='Yellow heart' /> Danke <Emoji symbol='💙' label='Blue heart' />
                                        <br />
                                        {participant.name}
                                    </h1>
                                    {/* Mobile next arrow with placeholder */}
                                    <Arrow display='mobile' next={participant.nextPage} />
                                </div>
                            </motion.div>
                            <motion.div variants={textTransition} initial="hidden" animate="enter" exit="exit" className={styles.texts__wrapper}>
                                {
                                    participant.texts.map((text, index) => <div key={index} className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />)
                                }
                            </motion.div>
                        </motion.div>
                    </div>
                    {/* Wave */}
                    <Wave />
                </div>
                {/* Yellow wrapper */}
                <div className={styles.yellow__wrapper}>
                    {/* Canvases */}
                    <div className={styles.canvas__wrapper}>
                        <div className={styles.canvas__overlay}></div>
                        {
                            participant.iconFiles.map((iconFile, index) => <ThreeIcon display='desktop' key={index} iconFile={iconFile} iconIndex={index} iconsTotal={participant.iconFiles.length} />)
                        }
                        {
                            participant.iconFiles.map((iconFile, index) => <ThreeIcon display='mobile' key={index} iconFile={iconFile} iconIndex={index} iconsTotal={participant.iconFiles.length} />)
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