import { Pet } from "@/common/types";
import { NextPageWithLayout } from "@/common/types/page";
import PetComponent from "@/components/app/pet/pet-component";
import PageLayout from "@/components/hoc/page-layout/page-layout";
import { GetStaticPaths, GetStaticPropsContext } from "next";
import { useTranslations } from "next-intl";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

/**
 * A Next.js page component that displays details of a pet.
 * @ The PetsPage component.
 */
const PetsPage: NextPageWithLayout = () => {
  const t = useTranslations("Home");
  const router = useRouter();
  const { id } = router.query;

  const [pet, setPet] = useState<Pet>();
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPetDetails = async () => {
      if (!id) {
        return;
      }
      try {
        const response = await fetch(`http://localhost:8000/pets/${id}`);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || "Pet not found");
        }
        const data = await response.json();
        setPet(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPetDetails();
  }, [id]);

  if (!id) {
    return (
      <Dimmer active>
        <Loader indeterminate content="Loading" />
      </Dimmer>
    );
  }

  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/paw-logo.svg" />
      </Head>
      <main>
        {isLoading && (
          <Dimmer active>
            <Loader indeterminate content="Loading" />
          </Dimmer>
        )}
        {error && (
          <h2 style={{ textAlign: "center", margin: "100px auto" }}>{error}</h2>
        )}
        {pet && <PetComponent pet={pet} />}
      </main>
    </>
  );
};

/**
 * Returns the layout component for the PetsPage.
 * @ {React.Component} page - The page component to be wrapped in the layout.
 * @ The layout component with the provided page component as its child.
 */
PetsPage.getLayout = function getLayout(page) {
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

/**
 * Retrieves the static paths for a Next.js page with dynamic routes.
 * @ An object containing the paths and fallback value.
 */
export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default PetsPage;
