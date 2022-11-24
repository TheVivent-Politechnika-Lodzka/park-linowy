import {
  BackgroundImage,
  Box,
  Center,
  Container,
  Image,
  Title,
} from "@mantine/core";
import useTheme from "../hooks/useTheme";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import ropepark_home1 from "../public/images/ropepark_home1.jpg";
import onlyropes_logo1 from "../public/images/onlyropes_logo1.png";

export default function Home() {
  const [theme] = useTheme();
  const { t } = useTranslation("pages/index");

  return (
    <Container fluid p={0} m={0} sx={{ height: "100%" }}>
      <BackgroundImage src={ropepark_home1.src} sx={{ height: "100%" }}>
        <Center sx={{ height: "100%" }}>
          <Box>
            <Image withPlaceholder src={onlyropes_logo1.src} alt="" width="" />
            <Title
              order={1}
              sx={{
                textAlign: "center",
                background:
                  theme === "light"
                    ? "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.5) 100%)"
                    : "radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.5) 100%)",
              }}
            >
              {t("subtitle")}
            </Title>
          </Box>
        </Center>
      </BackgroundImage>
    </Container>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "pages/index"])),
    },
  };
}
