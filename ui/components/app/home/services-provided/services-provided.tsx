import * as React from "react";
import ServicesCard, {
  IServicesCardProps,
} from "./services-card/services-card";
import Container from "@/components/hoc/container/container";
import Row from "@/components/hoc/row/row";
import styles from "./services-provided.module.scss";

/**
 * An array of objects representing different pet services.
 * Each object contains the following properties:
 * - image: The URL of the image associated with the service.
 * - serviceName: The name of the pet service.
 * - serviceDescription: A description of the pet service.
 * - href: The URL to navigate to when the service is clicked.
 * @type {Array<Object>}
 */
const data = [
  {
    image: "/images/adoption.jpeg",
    serviceName: "Adoption",
    serviceDescription:
      "Pet adoption is an act of love and compassion, bringing joy to both animals and humans alike. ",
    href: "/adoption",
  },
  {
    image: "/images/foster.jpeg",
    serviceName: "Shelters",
    serviceDescription:
      "Pet shelters provide safe havens and care for animals in need, offering them a chance for a loving home. ",
    href: "/shelter",
  },
  {
    image: "/images/DonationPug.jpeg",
    serviceName: "Donation",
    serviceDescription:
      "Donating to pet causes ensures support for animals in need and promotes their well-being. ",
    href: "/donation",
  },
  {
    image: "/images/reportAbuse.webp",
    serviceName: "Report Abuse",
    serviceDescription:
      "Reporting pet abuse is crucial in safeguarding animal welfare and ensuring safety for animals. ",
    href: "/reportAbuse",
  },
];


/**
 * Interface representing the properties for a component that provides a list of services.
 * @interface IServicesProvidedProps
 * @property {IServicesCardProps[]} items - An array of service card properties.
 */
export interface IServicesProvidedProps {
  items: IServicesCardProps[];
}

function ServicesProvided({ items = data }: Partial<IServicesProvidedProps>) {
  /**
   * Renders a section containing a list of services provided.
   * @param {Array} items - An array of objects representing each service item.
   * @returns The JSX code for rendering the section.
   */
  return (
    <section className={styles.servicesProvidedSection}>
      <Container>
        <Row>
          {items.map((item, index) => (
            <ServicesCard key={index} {...item} />
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default ServicesProvided;
