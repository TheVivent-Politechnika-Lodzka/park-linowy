import { AppProps } from "next/app";
import Head from "next/head";
import {
  Affix,
  Center,
  Container,
  Text,
  MantineProvider,
  AppShell,
} from "@mantine/core";
import { appWithTranslation } from "next-i18next";
import useTheme from "../hooks/useTheme";
import NextRouterProgressBar from "../components/NextRouterProgressBar";
import NavBar from "./NavBar";
import useBreakpoint from "../hooks/useBreakpoint";
import MultiSwitch from "./MultiSwitch";
import Footer from "./Footer";
import ropepark_attractions1 from "../public/images/ropepark_attractions1.jpg";

function App({ Component, pageProps }: AppProps) {
  const [theme] = useTheme();
  const { isMobile, isDesktop, isTablet } = useBreakpoint();

  return (
    <>
      <Head>
        <title>OnlyRopes</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: theme,
        }}
      >
        <NextRouterProgressBar />
        {/* <Affix sx={{ top: 0, right: 0 }}>
          <MultiSwitch />
        </Affix> */}
        <AppShell
          header={<NavBar />}
          footer={<Footer />}
          sx={{
            backgroundImage: `url(${ropepark_attractions1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backdropFilter: "blur(5px)",
          }}
        >

          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}

export default appWithTranslation(App);
