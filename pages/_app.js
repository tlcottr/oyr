import "../styles/globals.css";
import Head from "next/head";
import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider) {
  return new Web3(provider);
}

function MyApp({ Component, pageProps }) {
  <Head>
    <link
      href="../public/font/Futura Extra Black Condensed Regular.otf"
    />
  </Head>;
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />;
    </Web3ReactProvider>
  );
}

export default MyApp;
