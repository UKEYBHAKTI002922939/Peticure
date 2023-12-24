import React, { useState, useEffect } from 'react';
import FosterCard from '../../components/app/foster/foster-card/foster-card';
import FosterTitle from '../../components/app/foster/foster-title/foster-title';
import styles from "../../components/app/foster/foster-card/foster-card.module.scss";
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import Head from 'next/head'
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next';

/**
 * Represents a foster object with the following properties:
 * @ {number} _id - The unique identifier of the foster.
 * @ {string} name - The name of the foster.
 * @ {string} location - The location of the foster.
 * @ {number} phone - The phone number of the foster.
 * @ {string} email - The email address of the foster.
 * @ {string} imageUrl - The URL of the foster's image.
 * @ {string} description - The description of the foster.
 * @ {string} story - The story of the foster.
 */
type Foster = {
    _id: number;
    name: string;
    location: string;
    phone: number;
    email: string;
    imageUrl: string;
    description: string;
    story: string;
};

/**
 * A Next.js page component that displays a list of foster information.
 * @ The rendered FosterPage component.
 */
const FosterPage: NextPageWithLayout = () => {
    const [fosters, setFosters] = useState<Foster[]>([]);

    const t = useTranslations('Foster');

    useEffect(() => {
        // Fetch fosters from the API
        const fetchFosters = async () => {
            try {
                const response = await fetch('http://localhost:8000/foster');
                const data = await response.json();
                setFosters(data);
            } catch (error) {
                console.error('Error fetching fosters:', error);
            }
        };

        fetchFosters();
    }, []);

    return (
        <div>
            <Head>
                <title>{t('title')}</title>
                <meta name="description" content={t('description')} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/paw-logo.svg" />
            </Head>
            <FosterTitle />
            <div className={styles.fosterContainer}>
                {fosters.map(foster => (
                    <FosterCard
                        id={foster._id}
                        key={foster._id}
                        name={foster.name}
                        location={foster.location}
                        phone={foster.phone}
                        email={foster.email}
                        imageUrl={foster.imageUrl}
                        description={foster.description}
                        story={foster.story}
                    />
                ))}
            </div>

        </div>
    );
};

FosterPage.getLayout = function getLayout(page) {
    return <PageLayout>{page}</PageLayout>;
};

/**
 * Retrieves the static props for a Next.js page.
 * @ {GetStaticPropsContext} locale - The locale of the page.
 * @ {Promise} An object containing the static props for the page.
 */
export async function getStaticProps({ locale }: GetStaticPropsContext) {
    return {
        props: {
            messages: (await import(`@/messages/${locale}.json`)).default
        }
    };
}

export default FosterPage;
