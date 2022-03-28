import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="preload"
                    href="/assets/fonts/bosch/Bosch.otf"
                    as="font"
                    crossOrigin=""
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}