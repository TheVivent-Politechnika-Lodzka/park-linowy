import { AppProps } from "next/app";
import Head from "next/head";
import { Affix, Center, Container, Text, MantineProvider } from "@mantine/core";
import { appWithTranslation } from "next-i18next";
import useTheme from "../hooks/useTheme";
import NextRouterProgressBar from "../components/NextRouterProgressBar";
import NavBar from "./NavBar";
import useBreakpoint from "../hooks/useBreakpoint";
import MultiSwitch from "./MultiSwitch";

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
        <link rel="icon" href="/fav.ico" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: theme,
        }}
      >
        <NextRouterProgressBar />
        <Container
          fluid
          p={0}
          m={0}
          sx={{ position: "relative", height: "6.5vh" }}
        >
          <NavBar />
        </Container>
        <Container
          fluid
          m={0}
          p={0}
          sx={{ height: "93vh", position: "relative" }}
        >
          <MultiSwitch />
          <Component {...pageProps} />
        </Container>
        <Affix sx={{ backgroundColor: "#333", width: "100vw" }}>
          <Center sx={{ color: "#AAA" }}>
            <Text ta="center">
              <Text>
                &copy; {new Date().getFullYear()} OnlyRopes - All rights
                reserved
              </Text>
              <Text>by Adam Kapuściński</Text>
            </Text>
          </Center>
        </Affix>
      </MantineProvider>
    </>
  );
}

export default appWithTranslation(App);
