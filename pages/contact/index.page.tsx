import {
  BackgroundImage,
  Center,
  Container,
  Title,
  Text,
  Grid,
  ActionIcon,
  Table,
  Space,
  Group,
  Box,
  Anchor,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMail,
  IconMapPin,
  IconPhone,
  IconRoute,
} from "@tabler/icons";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SP } from "next/dist/shared/lib/utils";
import { useTranslation } from "react-i18next";
import useBreakpoint from "../../hooks/useBreakpoint";
import useTheme from "../../hooks/useTheme";
import ropepark_contact1 from "../../public/images/ropepark_contact1.jpg";

export default function Contact() {
  const { t } = useTranslation("pages/contact/index");
  const { isMobile } = useBreakpoint();
  const [theme] = useTheme();

  return (
    <Center>
      <Grid
        p="xl"
        sx={{
          marginTop: "6rem",
          backdropFilter: "blur(5px)",
          borderRadius: "10px",
        }}
      >
        <Grid.Col xs={12} lg={6}>
          <Center>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.510938049495!2d-67.06149718410576!3d-4.119351046441548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x921fcbda8e554701%3A0x500c9f15cadc21fc!2sPuszcza%20Amazo%C5%84ska!5e0!3m2!1spl!2spl!4v1669251184096!5m2!1spl!2spl"
              width={isMobile ? "400" : "540"}
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            />
          </Center>
        </Grid.Col>
        <Grid.Col xs={12} lg={6}>
          <Table
            highlightOnHover
            sx={{
              backgroundColor:
                theme === "dark"
                  ? "rgba(0, 0, 0, 0.5)"
                  : "rgba(255, 255, 255, 0.5)",
            }}
          >
            <tbody>
              <tr>
                <td>
                  <Center inline sx={{ height: "100%" }}>
                    <Title order={2}>{t("contact.phone")}</Title>
                  </Center>
                </td>
                <td>
                  <Center inline sx={{ height: "100%", fontSize: "1.5rem" }}>
                    <ActionIcon
                      sx={{ display: "inline" }}
                      component="a"
                      href="tel:+48 360 741 229"
                    >
                      <IconPhone stroke={3} size={30} />
                    </ActionIcon>
                    <Space w="sm" />
                    +48 360 741 229
                  </Center>
                </td>
              </tr>
              <tr>
                <td>
                  <Center inline sx={{ height: "100%" }}>
                    <Title order={2}>{t("contact.email")}</Title>
                  </Center>
                </td>
                <td>
                  <Center inline sx={{ height: "100%", fontSize: "1.5rem" }}>
                    <ActionIcon
                      sx={{ display: "inline" }}
                      component="a"
                      href="mailto: example@email.com
                                "
                    >
                      <IconMail stroke={3} size={30} />
                    </ActionIcon>
                    <Space w="sm" />
                    example@email.com
                  </Center>
                </td>
              </tr>
              <tr>
                <td>
                  <Center inline sx={{ height: "100%" }}>
                    <Title order={2}>{t("contact.address")}</Title>
                  </Center>
                </td>
                <td>
                  <Group>
                    <ActionIcon
                      component="a"
                      href="https://goo.gl/maps/ECnNAs4hkDtguZyE7"
                      target="_blank"
                    >
                      <IconMapPin stroke={3} size={30} />
                    </ActionIcon>
                    <Box>
                      <Text sx={{ display: "block" }}>ul. Przykładowa 1</Text>
                      <Text>00-000 Przykładowe Miasto</Text>
                    </Box>
                  </Group>
                </td>
              </tr>
              <tr>
                <td>
                  <Center inline sx={{ height: "100%" }}>
                    <Title>{t("contact.nip")}</Title>
                  </Center>
                </td>
                <td>
                  <Center inline sx={{ height: "100%", fontSize: "1.5rem" }}>
                    1234567890
                  </Center>
                </td>
              </tr>
              <tr>
                <td>
                  <Center inline sx={{ height: "100%" }}>
                    <Title>{t("contact.socials")}</Title>
                  </Center>
                </td>
                <td>
                  <Group>
                    <Anchor href="https://www.twitter.com" target="_blank">
                      <IconBrandTwitter size={30} />
                    </Anchor>
                    <Anchor href="https://www.facebook.com" target="_blank">
                      <IconBrandFacebook size={30} />
                    </Anchor>
                    <Anchor href="https://www.instagram.com" target="_blank">
                      <IconBrandInstagram size={30} />
                    </Anchor>
                  </Group>
                </td>
              </tr>
            </tbody>
          </Table>
        </Grid.Col>
      </Grid>
    </Center>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "pages/contact/index",
      ])),
    },
  };
}
