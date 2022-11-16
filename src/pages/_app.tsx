import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SettingsProvider } from "@/context";
import theme from "../lib/theme";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SettingsProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SettingsProvider>
    </ChakraProvider>
  );
}
