import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Pricing() {
  return <div>Pricing</div>;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "pages/pricing/index",
      ])),
    },
  };
}
