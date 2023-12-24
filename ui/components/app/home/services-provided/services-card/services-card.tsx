import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./services-card.module.scss";
import { useRouter } from "next/navigation";

export interface IServicesCardProps {
  image: string;
  serviceName: string;
  serviceDescription: string;
  href: string;
}

export default function ServicesCard({
  image,
  serviceName,
  serviceDescription,
  href,
}: IServicesCardProps) {
  const router = useRouter();
  return (
    <div className={`col-xl-3 col-md-6`}>
      <div className={styles.servicesCard} onClick={() => router.push(href)}>
        <div className={styles.imageWrapper}>
          <Image src={image} alt={"logo"} height={171} width={180} className="relative" />
        </div>
        <div className={styles.textWrapper}>
          <h3 className={styles.serviceName}>{serviceName}</h3>
          {/* Adoption */}
          <p className={styles.serviceDescription}>
            {/* Pet adoption is an act of love and compassion, bringing joy to both
          animals and humans alike. It's a chance to provide a forever home to a
          furry friend in need. Through adoption, bonds are formed that
          transcend words, built on trust, care, and unwavering companionship.
          Each adoption story is unique, filled with hope, transformation, and a
          new chapter of happiness for the pet and their adoptive family.
          Adopting a pet isn't just giving them a home; it's embracing a
          lifetime of shared moments, laughter, and unconditional love. */}
            {serviceDescription}
          </p>
          <Link href={href} className={styles.readMore}>Read more</Link>
        </div>
      </div>
    </div>
  );
}
