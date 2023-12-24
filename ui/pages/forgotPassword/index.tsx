import Head from 'next/head';
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import ForgotPasswordForm from '@/components/app/forgot/ForgotPasswordForm'; // Import login form component
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';

/**
 * The ForgotPassword component is a Next.js page component that renders a form for
 * resetting a forgotten password. It uses the NextPageWithLayout type, which allows it
 * to be wrapped with a layout component. The component also uses the useTranslations
 * hook to access translated strings from the 'Home' namespace.
 * @ The rendered ForgotPassword component.
 */
const ForgotPassword: NextPageWithLayout = () => {
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
        <ForgotPasswordForm /> {/* Include your login form component here */}
      </main>
    </>
  );
};

ForgotPassword.getLayout = (page) => <PageLayout>{page}</PageLayout>;

/**
 * Retrieves the static props for a Next.js page.
 * @ {GetStaticPropsContext} context - The context object containing information about the request.
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

export default ForgotPassword;
