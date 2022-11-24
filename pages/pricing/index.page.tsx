import { BackgroundImage, Box, Center, Container, Table } from "@mantine/core";
import { t } from "i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import PriceCell, { PriceCellProps } from "./PriceCell";
import ropepark_pricing1 from "../../public/images/ropepark_pricing1.jpg";
import ropepark_pricing2 from "../../public/images/ropepark_pricing2.jpg";
import useTheme from "../../hooks/useTheme";
import useBreakpoint from "../../hooks/useBreakpoint";

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
  const { isMobile } = useBreakpoint();

  return (
    <Container fluid sx={{ height: "100%" }}>
      <BackgroundImage
        src={!isMobile ? ropepark_pricing2.src : ""}
        sx={{ height: "100%", width: "100%", position: "relative" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backdropFilter: "blur(5px)",
          }}
        />
        <Container sx={{ height: "100%" }}>
          <BackgroundImage
            src={!isMobile ? ropepark_pricing1.src : ""}
            sx={{
              height: "100%",
              width: "100%",
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backdropFilter: "blur(-5px)",
              }}
            />
            <Center sx={{ height: "100%" }}>
              <Table
                highlightOnHover
                withColumnBorders
                sx={{
                  backdropFilter: "blur(100px)",
                  marginTop: isMobile ? "3rem" : 0,
                  width: isMobile ? "100%" : "80%",
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
          </BackgroundImage>
        </Container>
      </BackgroundImage>
    </Container>
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
