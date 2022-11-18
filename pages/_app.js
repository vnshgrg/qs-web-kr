import Head from "next/head";
import "../styles/tailwind.css";
const qsRemit = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content="upgrade-insecure-requests"
                />
            </Head>
            <Component {...pageProps} />
            <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
        </>
    );
};

export default qsRemit;
