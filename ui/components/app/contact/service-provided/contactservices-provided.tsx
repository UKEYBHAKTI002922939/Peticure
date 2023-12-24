// AboutServicesProvided.tsx

import * as React from "react";
import Container from "@/components/hoc/container/container";
import Row from "@/components/hoc/row/row";
import styles from "./contactservices-provided.module.scss";

/**
   * Renders a section containing contact information blocks.
   * @returns elements - The rendered contact information section.
   */
/**
 * Renders the contact information section of the website.
 * @returns JSX element representing the contact information section.
 */
function ContactServicesProvided() {
  return (
    <>
      <section className={styles.contactSection}>
        <Container>
          <div className={styles.contactWrapper}>
            <div className={styles.headingWrapper}>
              <h1>Contact Us<span className={styles.footerHeadingDot}>.</span></h1>
            </div>
          </div>
        </Container>
      </section>


      <section className={styles.contactBlocksSection}>
        <Container>
          <Row>
            <div className={styles.container}>
              <div className={styles.contactblock}>
                <h3>Email Address</h3>
                <a href="mailto:info@webmail.com">peticure@gmail.com</a>
                <a href="mailto:info@webmail.com">petHelp@gmail.com</a>
              </div>
              <div className={styles.contactblock}>
                <h3>Phone Number</h3>
                <a href="tel:+9234567810">923-456-7810</a>
                <a href="tel:+9087654321">908-765-4321</a>
              </div>
              <div className={styles.contactblock}>
                <h3>Office Address</h3>
                <p>13/A, Jhumando City</p>
                <p>New York, NYC</p>
              </div>
              <div className={styles.contactblock}>
                <h3>Web Connection</h3>
                <a href="https://fb.com/webexample" target="_blank" rel="noopener noreferrer">twitter.com/Peticure</a>
                <a href="https://tw.com/webexample" target="_blank" rel="noopener noreferrer">instagram.com/Peticure</a>
              </div>
            </div>
          </Row>
        </Container>
      </section>


    </>
  );
}

export default ContactServicesProvided;
