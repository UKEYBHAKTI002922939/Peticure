// AboutServicesProvided.tsx

import * as React from "react";
import ServicesCard, {
  IAboutServicesCardProps,
} from "./services-card/services-card";
import Container from "@/components/hoc/container/container";
import Row from "@/components/hoc/row/row";
import styles from "./aboutservices-provided.module.scss";
import Image from "next/image";
/**
 * Renders the HTML markup for the "About Us" section of a pet care agency website.
 * @returns The HTML markup for the "About Us" section.
 */

/**
 * Renders the About Services Provided section of the website.
 * @returns JSX element representing the About Services Provided section.
 */
/**
 * An array of objects representing the data for the "About Us" services cards.
 * Each object contains the following properties:
 * - image: The URL of the image associated with the service.
 * - serviceName: The name of the service.
 * - serviceDescription: A description of the service.
 * - href: The URL to navigate to when the service card is clicked.
 * @type
 */
const aboutUsData: IAboutServicesCardProps[] = [
  {
    image: "/images/value1.jpg",
    serviceName: "Our Mission",
    serviceDescription:
      "At PetCare, our mission is to provide a loving and secure environment for every pet. We strive to find forever homes for animals in need, ensuring their well-being and happiness.",
    href: "/about#our-mission",
  },
  {
    image: "/images/value3.jpg",
    serviceName: "Meet Our Team",
    serviceDescription:
      "Get to know our dedicated team members who are passionate about animal welfare. They work tirelessly to support our cause and provide the best care for our furry friends.",
    href: "/about#team-members",
  },
  {
    image: "/images/value4.jpg",
    serviceName: "Our Values",
    serviceDescription:
      "Discover the core values that guide us in our commitment to pet care. Integrity, compassion, and responsibility are at the heart of everything we do.",
    href: "/about#our-values",
  },
];

function AboutServicesProvided() {
  return (
    <>
      <section className={styles.servicesProvidedSection}>
        <Container>
          <Row>
            {aboutUsData.map((item, index) => (
              <ServicesCard key={index} {...item} />
            ))}
          </Row>
        </Container>
      </section>

      {/* Make Appointment Section */}
      <section className={styles.makeAppointmentSection}>
        <Container>
          <Row>
            <div className={styles.aboutUsBox}>
              <h1>About Us</h1>
              <h2>Best Agency for your pet</h2>
              <p>
                We&apos;ve been setting new standards for pet-care facilities.
                Individual suites are offered in all CarePress locations, and
                they are spotless and climate controlled, with excellent food,
                bedding, and a broad variety of tailored activities and
                services. You can rest assured that your dog is in the best,
                most qualified hands in the industry with CarePress. We&apos;ve
                been providing entertaining and dependable dog care services to
                parents and puppies since 1999.
              </p>
              <div className={styles.appointmentContent}>
                <a
                  className={`${styles.btnone} ${styles.makeAppointmentButton} ${styles.makeappointment}`}
                  href="http://el.commonsupport.com/newwp/carepress/contact/"
                >
                  <span className={styles.txt}>Make Appointment</span>
                </a>

                <a
                  className={`${styles.btnone} style2 marleft`}
                  href="tel:98787687687"
                >
                  <i className="fa fa-phone" aria-hidden="true"></i>
                  <span className={styles.txt}>987-876-876-87</span>
                </a>
              </div>
            </div>

            <div>
              <Image
                src="/images/videogallery.jpg"
                alt="Video Gallery"
                width={400}
                height={400}
              />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default AboutServicesProvided;
