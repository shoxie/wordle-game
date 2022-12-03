import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SettingsProvider } from "@/context";
import theme from "../lib/theme";
import Layout from "@/components/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SettingsProvider>
        <Layout>
          <Head>
            <title>Wordie Game</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </SettingsProvider>
    </ChakraProvider>
  );
}
