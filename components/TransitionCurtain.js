import { motion } from "framer-motion";

import { pageTransition } from '../animations/animations.js';
import { Wave } from "../components/Wave";

import styles from '../styles/TransitionCurtain.module.scss'

export const TransitionCurtain = () => {

    return (
        <div className={styles.container}>
            <Wave />
            <motion.div
                transition={{ duration: 1, ease: 'easeInOut' }}
                variants={pageTransition}
                initial="hidden"
                animate="enter"
                exit="exit"
                className={styles.TransitionCurtain}
            >
            </motion.div>
        </div>
    )

}