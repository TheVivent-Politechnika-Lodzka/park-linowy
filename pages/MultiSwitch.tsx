import {
  SimpleGrid,
  Box,
  Center,
  Switch,
} from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import useBreakpoint from "../hooks/useBreakpoint";
import useTheme from "../hooks/useTheme";
import { IconSun, IconMoonStars, IconSettings } from "@tabler/icons";
import { FlagIcon } from "react-flag-kit";

export default function MultiSwitch() {
  const router = useRouter();
  const [theme, setTheme] = useTheme();
  const { isMobile } = useBreakpoint();
  const { t } = useTranslation("common");
  const { ref, hovered } = useHover();

  return (
    <Box
      ref={ref}
      sx={{
        // position: "absolute",
        // top: 0,
        // right: 0,
        transform: isMobile && !hovered ? "scale(0.4) translate(100px, -100px)" : "scale(1)",
        width: "9rem !important",
        height: "9rem !important",
        borderRadius: "100%",
        zIndex: 1000,
      }}
    >
      <IconSettings color="#DDD" style={{ position: "absolute" }} size={140} />
      <Center>
        <SimpleGrid
          hidden={!hovered}
          cols={1}
          sx={{
            margin: "0.6rem",
          }}
        >
          <Switch
            size="lg"
            onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
            onLabel={<IconSun size={16} stroke={2.5} color="yellow" />}
            offLabel={<IconMoonStars size={16} stroke={2.5} color="yellow" />}
          />
          <Switch
            size="lg"
            onLabel={<FlagIcon code="PL" size={16} />}
            offLabel={<FlagIcon code="GB" size={16} />}
            onChange={() =>
              router.push(router.pathname, router.pathname, {
                locale: router.locale === "pl" ? "en" : "pl",
              })
            }
          />
        </SimpleGrid>
      </Center>
    </Box>
  );
}
