import {
  BackgroundImage,
  Blockquote,
  Center,
  Container,
  SimpleGrid,
  Space,
} from "@mantine/core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Carousel } from "@mantine/carousel";
import EasyTrack from "./Track";
import useBreakpoint from "../../hooks/useBreakpoint";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import ropepark_attractions_easy1 from "../../public/images/ropepark_attractions_easy1.jpg";
import ropepark_attractions_medium1 from "../../public/images/ropepark_attractions_medium1.jpg";
import ropepark_attractions_hard1 from "../../public/images/ropepark_attractions_hard1.jpg";
import ropepark_attractions_veryhard1 from "../../public/images/ropepark_attractions_veryhard1.jpg";
import ropepark_attractions_almostdie1 from "../../public/images/ropepark_attractions_almostdie1.jpg";
import ropepark_attractions_imdead1 from "../../public/images/ropepark_attractions_imdead1.jpg";
import Track from "./Track";

export type SlideNumber = 0 | 1 | 2 | 3 | 4 | 5;

const comments: { author: string; textKey: string }[][] = [
  [
    { author: "John", textKey: "attractions.easy.comment.0" },
    { author: "Carolina", textKey: "attractions.easy.comment.1" },
    { author: "Tobi", textKey: "attractions.easy.comment.2" },
  ],
  [
    { author: "Zea", textKey: "attractions.medium.comment.0" },
    { author: "Grzegorz", textKey: "attractions.medium.comment.1" },
  ],
  [
    { author: "Martyna", textKey: "attractions.hard.comment.0" },
    { author: "Michał", textKey: "attractions.hard.comment.1" },
  ],
  [
    { author: "Gilbert", textKey: "attractions.veryhard.comment.0" },
    { author: "Adelajda", textKey: "attractions.veryhard.comment.1" },
    { author: "Henryk", textKey: "attractions.veryhard.comment.2" },
  ],
  [
    { author: "Łukasz", textKey: "attractions.almostdie.comment.0" },
    { author: "Konstantyn", textKey: "attractions.almostdie.comment.1" },
  ],
  [{ author: "Charon", textKey: "attractions.imdead.comment.0" }],
];

export default function Attractions() {
  const { isMobile, isDesktop } = useBreakpoint();
  const [activeSlide, setActiveSlide] = useState<SlideNumber>(0);
  const { t } = useTranslation("pages/attractions/index");

  return (
    <Container fluid p="xl">
      <Center>
        <Carousel
          sx={{ width: isMobile ? "100%" : "60%" }}
          mt="xl"
          height={isMobile ? 300 : 500}
          withIndicators
          slideSize={isDesktop ? "33.333333%" : "90vw"}
          slideGap="md"
          dragFree
          loop
          align="start"
          slidesToScroll={1}
        >
          <Track
            label={t("attractions.easy.label")}
            onClick={() => setActiveSlide(0)}
            src={ropepark_attractions_easy1}
          />
          <Track
            label={t("attractions.medium.label")}
            onClick={() => setActiveSlide(1)}
            src={ropepark_attractions_medium1}
          />
          <Track
            label={t("attractions.hard.label")}
            onClick={() => setActiveSlide(2)}
            src={ropepark_attractions_hard1}
          />
          <Track
            label={t("attractions.veryhard.label")}
            onClick={() => setActiveSlide(3)}
            src={ropepark_attractions_veryhard1}
          />
          <Track
            label={t("attractions.almostdie.label")}
            onClick={() => setActiveSlide(4)}
            src={ropepark_attractions_almostdie1}
          />
          <Track
            label={t("attractions.imdead.label")}
            onClick={() => setActiveSlide(5)}
            src={ropepark_attractions_imdead1}
          />
        </Carousel>
      </Center>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Center>
        <SimpleGrid cols={1} breakpoints={[{ minWidth: "md", cols: 3 }]}>
          {comments[activeSlide].map((comment, index) => (
            <Blockquote
              cite={`~${comment.author}`}
              key={index}
              sx={{ fontSize: "2rem" }}
            >
              {t(comment.textKey)}
            </Blockquote>
          ))}
        </SimpleGrid>
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
