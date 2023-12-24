import React, { useState, useEffect } from 'react';
import ShelterCard from '../../components/app/shelter/shelter-card/shelter-card';
import ShelterTitle from '../../components/app/shelter/shelter-title/shelter-title';
import styles from "../../components/app/shelter/shelter-card/shelter-card.module.scss";
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import Head from 'next/head'
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next';

/**
 * Represents a shelter object with the following properties:
 * @ {Object} Shelter
 * @ {number} _id - The unique identifier of the shelter.
 * @ {string} name - The name of the shelter.
 * @ {string} location - The location of the shelter.
 * @ {number} phone - The phone number of the shelter.
 * @ {string} email - The email address of the shelter.
 * @ {string} imageUrl - The URL of the image associated with the shelter.
 * @ {string} description - The description of the shelter.
 * @ {string} story - The story of the shelter.
 */
type Shelter = {
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
 * A Next.js page component for displaying a list of shelters.
 * @ JSX element representing the shelter page.
 */
const ShelterPage: NextPageWithLayout = () => {
    const [shelters, setShelters] = useState<Shelter[]>([]);

    const t = useTranslations('Shelter');

    useEffect(() => {
        // Fetch shelters from the API
        const fetchShelters = async () => {
            try {
                const response = await fetch('http://localhost:8000/shelter');
                const data = await response.json();
                setShelters(data);
            } catch (error) {
                console.error('Error fetching shelters:', error);
            }
        };

        fetchShelters();
    }, []);

    return (
        <div>
            <Head>
                <title>{t('title')}</title>
                <meta name="description" content={t('description')} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/paw-logo.svg" />
            </Head>
            <ShelterTitle />
            <div className={styles.shelterContainer}>
                {shelters.map(shelter => (
                    <ShelterCard
                        id={shelter._id}
                        key={shelter._id}
                        name={shelter.name}
                        location={shelter.location}
                        phone={shelter.phone}
                        email={shelter.email}
                        imageUrl={shelter.imageUrl}
                        description={shelter.description}
                        story={shelter.story}
                    />
                ))}
            </div>

        </div>
    );
};

/**
 * Returns the layout component for the given page.
 * @ {React.Component} page - The page component to be wrapped in the layout.
 * @ {React.Component} - The layout component with the page component as its child.
 */
ShelterPage.getLayout = function getLayout(page) {
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

export default ShelterPage;
