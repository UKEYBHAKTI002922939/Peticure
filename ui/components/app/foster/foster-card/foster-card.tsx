import React from 'react';
import styles from "./foster-card.module.scss";
import Image from "next/image";
import Link from 'next/link';

type FosterCardProps = {
    id: number;
    name: string;
    location: string;
    phone: number;
    email: string;
    imageUrl: string;
    description: string;
    story: string;
};

/**
 * A functional component that represents a foster card.
 * @ {FosterCardProps} id - The ID of the foster card.
 * @ {FosterCardProps} name - The name of the foster card.
 * @ {FosterCardProps} location - The location of the foster card.
 * @ {FosterCardProps} phone - The phone number of the foster card.
 * @ {FosterCardProps} email - The email address of the foster card.
 * @ {FosterCardProps} imageUrl - The URL of the image for the foster card.
 * @ {FosterCardProps} description - The description of the foster card.
 * @ {FosterCardProps
 */
const FosterCard: React.FC<FosterCardProps> = ({ id, name, location, phone, email, imageUrl, description, story }) => {
    return (
        <div className={styles.fosterCard}>
            <div className={styles.imageWrapper}>
                <Image src={imageUrl} alt={"foster"} height={171} width={180} className="relative" />
            </div>
            <h2 className={styles.fosterName}>{name}</h2>
            <p>{description}</p>
            {/* <p>Location: {location}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p> */}
            <Link href={`/foster/${id}`} passHref>
                <button className={styles.viewDetailsButton}>View Details</button>
            </Link>
        </div>
    );
};

export default FosterCard;
