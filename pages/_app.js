import '../styles/globals.scss'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
    return (
        <AnimatePresence exitBeforeEnter>
            <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
    )
}

export default MyApp
