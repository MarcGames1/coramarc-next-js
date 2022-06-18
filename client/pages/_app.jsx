import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

export default MyApp