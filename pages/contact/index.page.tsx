import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Contact() {
  return <div>Contact</div>;
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
