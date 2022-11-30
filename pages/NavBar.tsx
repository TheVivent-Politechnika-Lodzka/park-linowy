import {
  CSSObject,
  Grid,
  Paper,
  Switch,
  Image,
  Center,
  SimpleGrid,
  ActionIcon,
  Anchor,
  Drawer,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import { IconSun, IconMoonStars, IconMenu, IconMenu2 } from "@tabler/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FlagIcon } from "react-flag-kit";
import { useTranslation } from "react-i18next";
import useBreakpoint from "../hooks/useBreakpoint";
import useTheme from "../hooks/useTheme";
import onlyropes_logo1 from "../public/images/onlyropes_logo1.png";

const menuStyleBase: CSSObject = {
  backgroundColor: "rgba(0, 0, 0, 0)",
  display: "flex",
  justifyContent: "center",
  fontSize: "2.5rem",
  fontWeight: "bold",
  marginTop: "0.5rem",
  marginBottom: "0.5rem",
  marginLeft: "0.5rem",
  padding: "0 0.5rem",
  color: "gray",
  "&:hover": {
    transform: "scaleX(1.1)",
    color: "black",
    transition: "all 0.3s ease",
  },
  transition: "all 0.1s ease",
};

export default function NavBar() {
  const { t } = useTranslation("common", { keyPrefix: "navbar" });
  const router = useRouter();
  const [theme, setTheme] = useTheme();
  const [menuStyle, setMenuStyle] = useState<CSSObject>(menuStyleBase);
  const matchesLogoNoShrink = useMediaQuery("(max-width: 1200px)", true, {
    getInitialValueInEffect: false,
  });
  const [drawerOpened, setDrawerOpened] = useState(false);

  useEffect(() => {
    if (!matchesLogoNoShrink) setDrawerOpened(false);
  }, [matchesLogoNoShrink]);

  useEffect(() => {
    const hoverColor = theme === "dark" ? "white" : "black";
    setMenuStyle((old) => ({
      ...old,
      "&:hover": {
        ...(old["&:hover"] as object),
        color: hoverColor,
      },
    }));
  }, [theme]);

  return (
    <>
      <Drawer opened={drawerOpened} onClose={() => setDrawerOpened(false)}>
        <Anchor
          component={NextLink}
          href={{
            pathname: "/",
          }}
          legacyBehavior
        >
          <Image
            src={onlyropes_logo1.src}
            alt="logo"
            height={80}
            fit="contain"
          />
        </Anchor>
        <SimpleGrid cols={1}>
          <Paper
            component={NextLink}
            href={{ pathname: "/" }}
            legacyBehavior
            sx={menuStyle}
          >
            {t("home")}
          </Paper>
          <Paper
            component={NextLink}
            href={{ pathname: "/pricing" }}
            legacyBehavior
            sx={menuStyle}
          >
            {t("pricing")}
          </Paper>
          <Paper
            component={NextLink}
            href={{ pathname: "/contact" }}
            legacyBehavior
            sx={menuStyle}
          >
            {t("contact")}
          </Paper>
          <Paper
            component={NextLink}
            href={{ pathname: "/attractions" }}
            legacyBehavior
            sx={menuStyle}
          >
            {t("attractions")}
          </Paper>
        </SimpleGrid>
      </Drawer>
      <Paper p="xs">
        <Grid>
          <Grid.Col span="auto" ta="start">
            <Center sx={{ height: "100%" }} inline>
              <Anchor
                component={NextLink}
                href={{
                  pathname: "/",
                }}
                legacyBehavior
              >
                <Image
                  src={onlyropes_logo1.src}
                  alt="logo"
                  height={80}
                  fit="contain"
                />
              </Anchor>
            </Center>
          </Grid.Col>
          <Grid.Col span="content" hidden={matchesLogoNoShrink}>
            <Paper
              component={NextLink}
              href={{ pathname: "/" }}
              legacyBehavior
              sx={menuStyle}
            >
              {t("home")}
            </Paper>
          </Grid.Col>
          <Grid.Col span="content" hidden={matchesLogoNoShrink}>
            <Paper
              component={NextLink}
              href={{ pathname: "/pricing" }}
              legacyBehavior
              sx={menuStyle}
            >
              {t("pricing")}
            </Paper>
          </Grid.Col>
          <Grid.Col span="content" hidden={matchesLogoNoShrink}>
            <Paper
              component={NextLink}
              href={{ pathname: "/contact" }}
              legacyBehavior
              sx={menuStyle}
            >
              {t("contact")}
            </Paper>
          </Grid.Col>
          <Grid.Col span="content" hidden={matchesLogoNoShrink}>
            <Paper
              component={NextLink}
              href={{ pathname: "/attractions" }}
              legacyBehavior
              sx={menuStyle}
            >
              {t("attractions")}
            </Paper>
          </Grid.Col>
          <Grid.Col span="auto" ta="end" px="xl">
            <SimpleGrid verticalSpacing={0} cols={1}>
              <Switch
                size="lg"
                onChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                onLabel={<IconSun size={16} stroke={2.5} color="yellow" />}
                offLabel={
                  <IconMoonStars size={16} stroke={2.5} color="yellow" />
                }
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
          </Grid.Col>
          <Grid.Col span="content" hidden={!matchesLogoNoShrink}>
            <Center sx={{ height: "100%", width: "70px" }}>
              <ActionIcon
                sx={{ scale: "3" }}
                onClick={() => setDrawerOpened(true)}
              >
                <IconMenu2 size={148} />
              </ActionIcon>
            </Center>
          </Grid.Col>
        </Grid>
      </Paper>
    </>
  );
}
