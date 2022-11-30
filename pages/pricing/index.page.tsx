import { BackgroundImage, Box, Center, Container, Table } from "@mantine/core";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import PriceCell, { PriceCellProps } from "./PriceCell";
import ropepark_pricing1 from "../../public/images/ropepark_pricing1.jpg";
import ropepark_pricing2 from "../../public/images/ropepark_pricing2.jpg";
import useBreakpoint from "../../hooks/useBreakpoint";
import useTheme from "../../hooks/useTheme";

// prettier-ignore
const pricing: PriceCellProps[][] = [
  [{ normalPrice: 10 }, { normalPrice: 5 },     { normalPrice: 0 }, { normalPrice: 5 }],
  [{ normalPrice: 15 }, { normalPrice: "7.50" },{ normalPrice: 0 }, { normalPrice: "7.50", discountPrice: 0 }],
  [{ normalPrice: 20 }, { normalPrice: 10 },    { normalPrice: 0 }, { normalPrice: 10, discountPrice: 0 }],
  [{ normalPrice: 25 }, { normalPrice: "12.50" }, { normalPrice: 0 }, { normalPrice: "12.50", discountPrice: 0 }],
  [{ normalPrice: 30 }, {  },                   { normalPrice: 0 }, { normalPrice: 1 }],
  [{ normalPrice: 35 }, {  },                   { normalPrice: 0 }, { normalPrice: 1 }],
  [{ normalPrice: 200 }, { normalPrice: 500 },  { normalPrice: 1 }, { normalPrice: 0 }],
];

export default function Pricing() {
  const { t } = useTranslation("pages/pricing/index");
  const { isMobile, isTablet } = useBreakpoint();
  const [theme] = useTheme();

  return (
    <Center sx={{height: "100%"}}>
      <Table
        highlightOnHover
        withColumnBorders
        sx={{
          backdropFilter: "blur(100px)",
          marginTop: isMobile ? "3rem" : 0,
          width: isMobile ? "100%" : isTablet ? "80%" : "50%",
          backgroundColor:
            theme === "dark"
              ? "rgba(0, 0, 0, 0.5)"
              : "rgba(255, 255, 255, 0.5)",
        }}
      >
        <thead>
          <tr>
            <th>{t("table.header.attraction")}</th>
            <th>{t("table.header.normalTicket")}</th>
            <th>{t("table.header.childTicket")}</th>
            <th>{t("table.header.studentTicket")}</th>
            <th>{t("table.header.seniorTicket")}</th>
          </tr>
        </thead>
        <tbody>
          {pricing.map((row, i) => (
            <tr key={i}>
              <td>{t(`attractionNames.${i}`)}</td>
              {row.map((cell, j) => (
                <PriceCell {...cell} key={j} />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Center>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "pages/pricing/index"],
        null,
        ["en", "pl"]
      )),
    },
  };
}
