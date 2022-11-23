import {
  BackgroundImage,
  Button,
  SegmentedControl,
  SimpleGrid,
  Image,
  Box,
  Center,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import useBreakpoint from "../hooks/useBreakpoint";
import useTheme from "../hooks/useTheme";
import oldgear from "../public/images/oldgear.png";

export default function MultiSwitch() {
  const router = useRouter();
  const [theme, setTheme] = useTheme();
  const { isDesktop } = useBreakpoint();
  const { t } = useTranslation("common");
  const { ref, hovered } = useHover();

  return (
    <Box
      ref={ref}
      sx={{
        position: "fixed",
        right: "1rem",
        top: isDesktop ? "1rem" : "80vh",
        width: "10rem !important",
        height: "10rem !important",
        zIndex: 1000,
      }}
    >
      <BackgroundImage
        src={oldgear.src}
        sx={{ padding: "0.5rem", height: "100%", width: "100%" }}
      >
        <SimpleGrid
          hidden={!hovered}
          cols={1}
          sx={{
            margin: "0.6rem",
          }}
        >
          <SegmentedControl
            data={["light", "dark"]}
            value={theme}
            onChange={(value) => setTheme(value === "light" ? value : "dark")}
          />
          <SegmentedControl
            data={[
              { label: t("languages.pl"), value: "pl" },
              { label: t("languages.en"), value: "en" },
            ]}
            value={router.locale}
            onChange={(value) =>
              router.push(router.pathname, router.pathname, { locale: value })
            }
          />
        </SimpleGrid>
      </BackgroundImage>
    </Box>
  );
}
