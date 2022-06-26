import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/main.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Toaster} from 'react-hot-toast'
config.autoAddCss = false
function MyApp({ Component, pageProps }) {
    return(
        <>
        <Toaster />
        <Component {...pageProps} />

        </>
    ) 
    
    
}

export default MyApp