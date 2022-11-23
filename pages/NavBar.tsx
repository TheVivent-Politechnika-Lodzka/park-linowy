import {
  Button,
  Center,
  CSSObject,
  Grid,
  Group,
  Paper,
  Sx,
  Tabs,
  TabsValue,
} from "@mantine/core";
import { NextLink } from "@mantine/next";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import useBreakpoint from "../hooks/useBreakpoint";

const menuStyleBase: CSSObject = {
  borderLeft: "1px solid",
  borderRight: "1px solid",
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
    border: "1px solid",
    transition: "all 0.3s ease",
  },
  transition: "all 0.1s ease",
};

export default function NavBar() {
  const { t } = useTranslation("common", { keyPrefix: "navbar" });
  const { isDesktop, isMobile, isTablet } = useBreakpoint();
  const [menuStyle, setMenuStyle] = useState<CSSObject>(menuStyleBase);

  useEffect(() => {
    const fontSize = isDesktop ? "2.5rem" : isTablet ? "1.5rem" : "1rem";
    const padding = isDesktop ? "0 0.5rem" : isTablet ? "0 0.5rem" : "0 0.5rem";
    setMenuStyle((old) => ({
      ...old,
      fontSize,
      padding,
    }));
  }, [isDesktop, isMobile, isTablet]);

  return (
    <>
      <Center >
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
