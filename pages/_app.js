import '../styles/globals.scss'
import { Wave } from "../components/Wave";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />

            {/* Wave */}
            <Wave />
        </>
    )
}

export default MyApp
