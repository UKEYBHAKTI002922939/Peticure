import React from 'react';
import styles from "./shelter-card.module.scss";
import Image from "next/image";
import Link from 'next/link';

type ShelterCardProps = {
    id: number;
    name: string;
    location: string;
    phone: number;
    email: string;
    imageUrl: string;
    description: string;
    story: string;
};

const ShelterCard: React.FC<ShelterCardProps> = ({ id, name, location, phone, email, imageUrl, description, story}) => {
    return (
        <div className={styles.shelterCard}>
            <div className={styles.imageWrapper}>
                <Image src={imageUrl} alt={"shelter"} height={171} width={180} className="relative" />
            </div>
            <h2 className={styles.shelterName}>{name}</h2>
            <p>{description}</p>
            {/* <p>Location: {location}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p> */}
            <Link href={`/shelter/${id}`} passHref>
                <button className={styles.viewDetailsButton}>View Details</button>
            </Link>
        </div>
    );
};

export default ShelterCard;
