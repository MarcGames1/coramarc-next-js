import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="ro">
            <Head>
                {/* aici vom pune Google Analytics */}
                {/* <!-- google fonts --> */}
                <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,300i,400,400i,600,700,800,900%7CPoppins:300,400,500,600,700,800,900" rel="stylesheet" />
                {/* <!-- Bootstrap CSS --> */}
                <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />
                {/* <!-- Font-awesome CSS --> */}
                <link rel="stylesheet" href="assets/css/vendor/font-awesome.min.css" />
                {/* <!-- Slick slider css --> */}
                <link rel="stylesheet" href="assets/css/plugins/slick.min.css" />
                {/* <!-- animate css --> */}
                <link rel="stylesheet" href="assets/css/plugins/animate.css" />
                {/* <!-- Nice Select css --> */}
                <link rel="stylesheet" href="assets/css/plugins/nice-select.css" />
                {/* <!-- jquery UI css --> */}
                <link rel="stylesheet" href="assets/css/plugins/jqueryui.min.css" />
                {/* <!-- main style css --> */}
                <link rel="stylesheet" href="assets/css/style.css" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>


                
        </Html>
    )
}