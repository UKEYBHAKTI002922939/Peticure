// about.tsx

import Head from "next/head";
import { NextPageWithLayout } from "@/common/types/page";
import PageLayout from "@/components/hoc/page-layout/page-layout";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Slider from "@/components/app/home/slider/slider";
import AbuseForm from "@/components/app/reportAbuse/AbuseForm";
/**
 * Represents the Abuse page component.
 * @ JSX elements representing the Abuse page.
 */
const aboutUsData = [
  {
    image: "/images/adoption.jpeg",
    serviceName: "Adoption",
    serviceDescription:
      "Pet adoption is an act of love and compassion, bringing joy to both animals and humans alike.",
    href: "/",
  },
  // Add more service data as needed
];

/**
 * A Next.js page component for reporting abuse.
 * @ JSX elements representing the page content.
 */
const Abuse: NextPageWithLayout = () => {
  const t = useTranslations("ReportAbuse"); // Assuming 'About' is the translation key for your 'about' page

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/paw-logo.svg" />
      </Head>
      <main>
        <AbuseForm />
        {/* Add other about us content here */}
      </main>
    </>
  );
};

Abuse.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

/**
 * Retrieves the static props for a Next.js page.
 * @ {GetStaticPropsContext} - The context object containing information about the request.
 * @ {Promise} - A promise that resolves to an object containing the static props.
 */
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default Abuse;
