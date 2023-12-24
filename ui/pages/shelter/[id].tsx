import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../components/app/shelter/shelter-details/shelterDetail.module.scss'; // Assume you have corresponding styles
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import Image from "next/image";

type Shelter = {
    id: number;
    name: string;
    location: string;
    phone: number;
    email: string;
    imageUrl: string;
    description: string;
    story: string;
};

const ShelterDetail: NextPageWithLayout = () => {
    const router = useRouter();
    const { id } = router.query;

    const [shelter, setShelter] = useState<Shelter | null>(null); // Adjust 'ShelterType' according to your data structure
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * Fetches shelter details from the server based on the provided ID and updates the state accordingly.
     * @ {string} id - The ID of the shelter to fetch details for.
     * @ None
     */
    useEffect(() => {
        const fetchShelterDetails = async () => {
            if (!id) return;
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/shelter/${id}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Shelter not found');
                }
                const data = await response.json();
                setShelter(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unexpected error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchShelterDetails();
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    /**
     * Renders the details of a shelter in a container.
     * @ {Object} shelter - The shelter object containing details such as name, location, phone, email, etc.
     * @ {JSX.Element} - The JSX element representing the shelter details.
     */
    return (
        <div className={styles.shelterDetailContainer}>
            <Head>
                <title>{'Shelter'}</title>
                <meta name="description" content={'Shelter Details'} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/paw-logo.svg" />
            </Head>

            {shelter && (
                <div>
                    <div className={styles.imageWrapper}>
                        <Image src={shelter.imageUrl} alt={"shelter"} height={400} width={180} className="relative" />
                    </div>
                    <h1>{shelter.name}</h1>
                    <p>Location: {shelter.location}</p>
                    <p>Phone: {shelter.phone}</p>
                    <p>Email: {shelter.email}</p>
                    <hr />
                    <h3>What We Offer</h3>
                    <p>{shelter.description}</p>
                    <h3>Our Story</h3>
                    <p>{shelter.story}</p>
                </div>
            )}
        </div>
    );
};

/**
 * Returns the layout for the ShelterDetail page.
 * @ {ReactNode} page - The content to be rendered within the layout.
 * @ {ReactNode} - The layout component with the provided content.
 */
ShelterDetail.getLayout = function getLayout(page) {
    return <PageLayout>{page}</PageLayout>;
};

export default ShelterDetail;
