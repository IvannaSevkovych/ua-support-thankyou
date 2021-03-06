import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, AnimatePresence } from "framer-motion";
import { getPlaiceholder } from "plaiceholder";

import { ThreeIcon } from "../../components/ThreeIcon";
import { Arrow } from "../../components/Arrow";
import Emoji from '../../components/Emoji'
import { textTransition } from '../../animations/animations.js';

import styles from '../../styles/Participant.module.scss'

import participantIds from '../../data/_ids'

const Participant = ({ participant, imageProps }) => {
    const router = useRouter()
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
                    <AnimatePresence exitBeforeEnter={true}>
                        <motion.div key={router.asPath} variants={textTransition} initial="hidden" animate="enter" exit="exit">
                            <Image
                                className={styles.blue__background}
                                alt={participant.imgAlt}
                                {...imageProps}
                                placeholder="blur"
                                layout="fill"
                                objectFit="cover"
                                quality={40}
                                priority
                            />
                        </motion.div>
                    </AnimatePresence>
                    <div className={styles.blue__foreground}>
                        {/* Desktop prev arrow */}
                        {
                            participant.prevPage && <Arrow display='desktop' prev={participant.prevPage} />
                        }
                        {/* Text content with home navigation */}
                        <div className={styles.blue__content}>
                            <Link href="/">
                                <a className={styles.home__link}><Emoji symbol='????????' label='Ukraine' /> &nbsp; Zur Startseite</a>
                            </Link>
                            <AnimatePresence exitBeforeEnter={true}>
                                <motion.div key={router.asPath} variants={textTransition} initial="hidden" animate="enter" exit="exit" className={styles.headline__wrapper}>
                                    {/* <span>Danke an:</span> */}
                                    <div className={styles.headline__name__nav}>
                                        {/* Mobile prev arrow */}
                                        {
                                            participant.prevPage && <Arrow display='mobile' prev={participant.prevPage} />
                                        }
                                        <h1><Emoji symbol='????' label='Yellow heart' /> Danke <Emoji symbol='????' label='Blue heart' />
                                            <br />
                                            {participant.name}
                                        </h1>
                                        {/* Mobile next arrow with placeholder */}
                                        <Arrow display='mobile' next={participant.nextPage} />
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                            <AnimatePresence exitBeforeEnter={true}>
                                <motion.div key={router.asPath} variants={textTransition} initial="hidden" animate="enter" exit="exit" className={styles.texts__wrapper}>
                                    {
                                        participant.texts.map((text, index) => <div key={index} className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />)
                                    }
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

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
            </div>
        </div>
    )
}

export async function getStaticProps({ params }) {
    const { default: unusedDefault, ...data } = await import(`../../data/${params.id}.json`)
    const { base64, img } = await getPlaiceholder(`/assets/photos/${params.id}.jpg`);

    return {
        props: {
            participant: data,
            imageProps: {
                src: img.src,
                blurDataURL: base64,
            },
        }
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