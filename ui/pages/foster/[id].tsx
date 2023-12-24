import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../../components/app/foster/foster-details/fosterDetail.module.scss'; // Assume you have corresponding styles
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import Image from "next/image";

type Foster = {
    id: number;
    name: string;
    location: string;
    phone: number;
    email: string;
    imageUrl: string;
    description: string;
    story: string;
};

const FosterDetail: NextPageWithLayout = () => {
    const router = useRouter();
    const { id } = router.query;

    const [foster, setFoster] = useState<Foster | null>(null); // Adjust 'FosterType' according to your data structure
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * Fetches foster details from the server based on the provided ID and updates the state accordingly.
     * @ {string} id - The ID of the foster to fetch details for.
     * @ None
     */
    useEffect(() => {
        const fetchFosterDetails = async () => {
            if (!id) return;
            setLoading(true);
            try {
                const response = await fetch(`http://localhost:8000/foster/${id}`);
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || 'Foster not found');
                }
                const data = await response.json();
                setFoster(data);
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

        fetchFosterDetails();
    }, [id]);

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    /**
     * Renders the details of a foster in a container.
     * @ {Object} foster - The foster object containing details such as name, location, phone, email, etc.
     * @ {JSX.Element} - The JSX element representing the foster details container.
     */
    return (
        <div className={styles.fosterDetailContainer}>
            <Head>
                <title>{'Foster'}</title>
                <meta name="description" content={'Foster Details'} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/images/paw-logo.svg" />
            </Head>

            {foster && (
                <div>
                    <div className={styles.imageWrapper}>
                        <Image src={foster.imageUrl} alt={"foster"} height={400} width={180} className="relative" />
                    </div>
                    <h1>{foster.name}</h1>
                    <p>Location: {foster.location}</p>
                    <p>Phone: {foster.phone}</p>
                    <p>Email: {foster.email}</p>
                    <hr />
                    <h3>What We Offer</h3>
                    <p>{foster.description}</p>
                    <h3>Our Story</h3>
                    <p>{foster.story}</p>
                    
                    
                </div>
            )}
        </div>
    );
};

FosterDetail.getLayout = function getLayout(page) {
    return <PageLayout>{page}</PageLayout>;
};

export default FosterDetail;
