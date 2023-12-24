"use client";

import Head from 'next/head';
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import LoginForm from '@/components/app/login/LoginForm'; // Import login form component
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

const Login: NextPageWithLayout = () => {
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
        <LoginForm /> {/* Include your login form component here */}
      </main>
    </>
  );
};

Login.getLayout = (page) => <PageLayout>{page}</PageLayout>;

/**
 * Retrieves the static props for a Next.js page.
 * @ {GetStaticPropsContext} - The context object containing information about the request.
 * @ {Promise<{ props: { messages: any } }>} - A promise that resolves to an object containing the static props.
 */
export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    props: {
      messages,
    },
  };
}

export default Login;
