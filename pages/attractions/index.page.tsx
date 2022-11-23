import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Attractions() {
  return <div>Attractions</div>;
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "pages/attractions/index",
      ])),
    },
  };
}
