import { Carousel } from "@mantine/carousel";
import { BackgroundImage } from "@mantine/core";
import ropepark_attractions_easy1 from "../../public/images/ropepark_attractions_easy1.jpg";

export default function EasyTrack() {
  return (
    <Carousel.Slide >
      <BackgroundImage
        src={ropepark_attractions_easy1.src}
        sx={{ height: "100%" }}
      >
        test
      </BackgroundImage>
    </Carousel.Slide>
  );
}
