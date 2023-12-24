import Head from 'next/head';
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import { GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import ContactServicesProvided from '@/components/app/contact/service-provided/contactservices-provided';

/**
 * An array of contact data objects.
 * @ {Array<Object>}
 * @ {string} image - The image URL for the contact service.
 * @ {string} serviceName - The name of the contact service.
 * @ {string} serviceDescription - The description of the contact service.
 * @ {string} href - The URL to navigate to when the contact service is clicked.
 */
const newContactData = [
  {
    image: "/images/service1.jpeg",
    serviceName: "Service 1 for Contact",
    serviceDescription:
      "Description for the service 1 on the Contact page.",
    href: "/",
  },
  // Add more service data as needed
];

/**
 * A Next.js page component for the Contact page.
 * @ The Contact page component.
 */
const Contact: NextPageWithLayout = () => {
  const t = useTranslations('Home'); // Assuming 'Contact' is the translation key for your 'contact' page

  return (
    <>
      <Head>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/paw-logo.svg" />
      </Head>
      <main>
        <ContactServicesProvided data={newContactData} />
        {/* Add other contact us content here */}
      </main>
    </>
  );
};

Contact.getLayout = function getLayout(page) {
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
};

export default Contact;
