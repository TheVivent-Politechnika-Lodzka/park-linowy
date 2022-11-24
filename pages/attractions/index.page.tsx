import { BackgroundImage, Center, Container } from "@mantine/core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Carousel } from "@mantine/carousel";
import EasyTrack from "./EasyTrack";
import useBreakpoint from "../../hooks/useBreakpoint";

export default function Attractions() {
  const { isMobile } = useBreakpoint();

  return (
    <Container fluid p="xl">
      <Center>
        <Carousel
          sx={{ width: isMobile ? "100%" : "60%" }}
          mt="xl"
          height={isMobile ? 300 : 500}
          withIndicators
          slideSize="40%"
          slideGap="md"
          loop
          align="start"
          slidesToScroll={3}
        >
          <EasyTrack />
        </Carousel>
      </Center>
    </Container>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "pages/attractions/index",
      ])),
    },
  };
}
