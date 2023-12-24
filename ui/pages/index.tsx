import Head from 'next/head'
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import Slider from '@/components/app/home/slider/slider';
import ServicesProvided from '@/components/app/home/services-provided/services-provided';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
// import * as serviceWorkerRegistration from '../serviceWorkerRegistration';

/**
 * The Home component is a Next.js page component that renders the home page of the website.
 * It uses the NextPageWithLayout type to specify that it should be rendered with a layout component.
 *  The rendered home page content.
 */
const Home: NextPageWithLayout = () => {
  const t = useTranslations('Home');
  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/paw-logo.svg" />
      </Head>
      <main>
        <Slider />
        <ServicesProvided />
      </main>
    </>
  )
}

/**
 * Returns the layout component for the given page.
 *   page - The page component to be wrapped in the layout.
 *  The layout component with the given page component as its child.
 */
Home.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

/**
 * Retrieves the static props for a Next.js page.
 *  - The locale of the page.
 *  - A promise that resolves to an object containing the static props.
 */
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default
    }
  };
}

export default Home;