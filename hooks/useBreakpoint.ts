import { useMediaQuery } from "@mantine/hooks";
import { useMemo } from "react";

export type Breakpoint = "xs" | "sm" | "md" | "lg" | "xl";

export default function useBreakpoint() {
  const matchesXS = useMediaQuery("(max-width: 576px)", true, {
    getInitialValueInEffect: false,
  });
  const matchesSM = useMediaQuery("(max-width: 768px)", true, {
    getInitialValueInEffect: false,
  });
  const matchesMD = useMediaQuery("(max-width: 992px)", true, {
    getInitialValueInEffect: false,
  });
  const matchesLG = useMediaQuery("(max-width: 1200px)", true, {
    getInitialValueInEffect: false,
  });
  const matchesXL = useMediaQuery("(max-width: 1400px)", true, {
    getInitialValueInEffect: false,
  });

  const breakpoint: Breakpoint = useMemo(() => {
    if (matchesXS) return "xs";
    if (matchesSM) return "sm";
    if (matchesMD) return "md";
    if (matchesLG) return "lg";
    if (matchesXL) return "xl";
    return "xl";
  }, [matchesXS, matchesSM, matchesMD, matchesLG, matchesXL]);

  const isMobile = useMemo(
    () => breakpoint === "xs" || breakpoint === "sm",
    [breakpoint]
  );
  const isTablet = useMemo(() => breakpoint === "md", [breakpoint]);
  const isDesktop = useMemo(
    () => breakpoint === "lg" || breakpoint === "xl",
    [breakpoint]
  );

  return { breakpoint, isMobile, isTablet, isDesktop };
}
