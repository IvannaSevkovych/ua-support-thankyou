import '../styles/globals.scss'
import { Wave } from "../components/Wave";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <AnimatePresence exitBeforeEnter={true}  initial={false}>
                <Component key={router.asPath} {...pageProps} />
            </AnimatePresence>

            {/* Wave */ }
            <Wave />
        </>
    )
}

export default MyApp
