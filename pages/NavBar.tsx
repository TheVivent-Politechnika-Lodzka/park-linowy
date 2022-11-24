import { Center, CSSObject, Paper } from "@mantine/core";
import { NextLink } from "@mantine/next";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import useBreakpoint from "../hooks/useBreakpoint";
import useTheme from "../hooks/useTheme";

const menuStyleBase: CSSObject = {
  borderColor: "gray",
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
  const { isDesktop, isMobile, isTablet } = useBreakpoint();
  const [theme] = useTheme();
  const [menuStyle, setMenuStyle] = useState<CSSObject>(menuStyleBase);

  useEffect(() => {
    const fontSize = isDesktop ? "2.5rem" : isTablet ? "1.5rem" : "1rem";
    const padding = isDesktop ? "0 0.5rem" : isTablet ? "0 0.5rem" : "0 0.5rem";
    const hoverColor = theme === "dark" ? "white" : "black";
    setMenuStyle((old) => ({
      ...old,
      fontSize,
      padding,
      "&:hover": {
        ...old["&:hover"] as object,
        color: hoverColor,
      },
    }));
  }, [isDesktop, isMobile, isTablet, theme]);

  return (
    <>
      <Center>
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
      </Center>
    </>
  );
}
