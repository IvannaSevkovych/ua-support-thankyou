import Head from "next/head";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                {/* This ways to add css on global website use local asset folder withhtml link tag */}
                <link
                    href="/assets/fonts/bosch/Bosch.otf"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
