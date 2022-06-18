import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="ro">
            <Head>
                {/* aici vom pune Google Analytics */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}