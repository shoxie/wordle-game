import "../styles/globals.css";
import Layout from "@/components/Layout";
import { SettingsProvider } from "@/context";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import theme from "../lib/theme";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SettingsProvider>
        <QueryClientProvider client={queryClient} contextSharing>
          <Layout>
            <DefaultSeo
              defaultTitle="Wordle Game"
              titleTemplate={`%s - Wordle Game`}
              description="A word guessing game."
              robotsProps={{
                nosnippet: true,
                notranslate: true,
                noimageindex: true,
                noarchive: true,
                maxSnippet: -1,
                maxImagePreview: "none",
                maxVideoPreview: -1,
              }}
              additionalLinkTags={[
                {
                  rel: "apple-touch-icon",
                  sizes: "76x76",
                  href: "/static/favicon/apple-touch-icon.png",
                },
                {
                  rel: "icon",
                  sizes: "32x32",
                  type: "image/png",
                  href: "/static/favicon/favicon-32x32.png",
                },
                {
                  rel: "icon",
                  sizes: "16x16",
                  type: "image/png",
                  href: "/static/favicon/favicon-16x16.png",
                },
                {
                  rel: "manifest",
                  href: "/static/favicon/manifest.json",
                },
                {
                  rel: "mask-icon",
                  href: "/static/favicon/safari-pinned-tab.svg",
                  color: "#5bbad5",
                },
                {
                  rel: "alternate",
                  type: "application/rss+xml",
                  href: "/feed.xml",
                },
              ]}
              openGraph={{
                type: "website",
                locale: "en_US",
                url: "https://wrosedev.tech",
                site_name: "WhiteRose Space",
                profile: {
                  firstName: "Đào",
                  lastName: "Tuấn Anh",
                  username: "whiterose.uchiha",
                  gender: "male",
                },
                images: [
                  {
                    url: "https://wordie-game.vercel.app/static/images/socialbanner.png",
                    alt: "Banner",
                  },
                ],
              }}
            />
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      </SettingsProvider>
    </ChakraProvider>
  );
}
