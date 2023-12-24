import { NextPageWithLayout } from "@/common/types/page";
import Donation from "@/components/app/donation/donation";
import PageLayout from "@/components/hoc/page-layout/page-layout";
import { GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";

/**
 * A Next.js page component for the donation page.
 * @ The rendered donation page component.
 */
const DonationPage: NextPageWithLayout = () => {
  const t = useTranslations("Donation");
  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/paw-logo.svg" />
      </Head>
      <Donation />
    </>
  );
};

DonationPage.getLayout = function getLayout(page) {
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

export default DonationPage;
