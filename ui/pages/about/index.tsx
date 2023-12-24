// about.tsx

import Head from 'next/head';
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Slider from '@/components/app/home/slider/slider';
import AboutServicesProvided from '@/components/app/about/aboutservices-provided/aboutservices-provided';

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

const About: NextPageWithLayout = () => {
  const t = useTranslations('Home'); // Assuming 'About' is the translation key for your 'about' page

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/paw-logo.svg" />
      </Head>
      <main>
        <AboutServicesProvided />
        {/* Add other about us content here */}
      </main>
    </>
  );
};

About.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
};

export default About;
