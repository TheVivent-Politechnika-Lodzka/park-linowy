import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Button, Paper, Title } from "@mantine/core";
import { StaticImageData } from "next/image";
import { useTranslation } from "react-i18next";

export interface TrackProps {
  label: string;
  onClick: () => void;
  src: StaticImageData;
}

export default function Track({ onClick, src, label }: TrackProps) {
  const { t } = useTranslation("pages/attractions/index");

  return (
    <Carousel.Slide >
      <BackgroundImage
        p="md"
        src={src.src}
        sx={{ height: "100%", position: "relative" }}
      >
        <Paper>
          <Title order={1} ta="center">{label}</Title>
        </Paper>
        <Button
          onClick={onClick}
          sx={{ position: "absolute", bottom: "30px", right: "20px" }}
        >
          {t("checkComments")}
        </Button>
      </BackgroundImage>
    </Carousel.Slide>
  );
}
