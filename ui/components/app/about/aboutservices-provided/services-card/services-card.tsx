// AboutServicesCard.tsx

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./services-card.module.scss";

/**
 * Interface representing the props for the AboutServicesCard component.
 * @interface IAboutServicesCardProps
 * @property {string} image - The image URL for the service.
 * @property {string} serviceName - The name of the service.
 * @property {string} serviceDescription - The description of the service.
 * @property {string} href - The URL to navigate to when the card is clicked.
 */
export interface IAboutServicesCardProps {
  image: string;
  serviceName: string;
  serviceDescription: string;
  href: string;
}

/**
 * A functional component that renders a card displaying information about a service.
 * @param {IAboutServicesCardProps} props - The props object containing the necessary data for rendering the card.
 * @returns The rendered JSX element representing the service card.
 */
export default function AboutServicesCard({
  image,
  serviceName,
  serviceDescription,
  href,
}: IAboutServicesCardProps) {
  return (

    <div className={`col-xl-4 col-md-4`}>
      <div className={styles.servicesCard}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={serviceName} height={400} width={400} className="relative" />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.serviceName}>{serviceName}</h3>
          <p className={styles.serviceDescription}>
            {serviceDescription}
          </p>
          <Link href={href} className={styles.readMore}>Learn More</Link>
        </div>
      </div>
    </div>
  );
}
