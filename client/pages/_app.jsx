import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nextjs-breadcrumbs/dist/index.css'
import '../styles/main.css'
import "/public/assets/css/style.css"
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {Toaster} from 'react-hot-toast'
import { AuthProvider } from '../context/auth';
import 'nextjs-breadcrumbs/dist/index.css'
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.core.css';



config.autoAddCss = false
function MyApp({ Component, pageProps }) {
    return(
        <>

                
        <AuthProvider>
        <Toaster />
        <Component {...pageProps} />
        </AuthProvider>

        </>
    ) 
    
    
}

export default MyApp