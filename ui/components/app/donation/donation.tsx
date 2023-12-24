/**
 * This function takes in a number and returns its square.
 * @param {number} num - The number to be squared.
 * @returns {number} The square of the input number.
 */
/**
 * A functional component that renders a donation section.
 * @returns JSX elements representing the donation section.
 */
import Link from "next/link";
import styles from "./donation.module.scss";
import { poppins } from "@/common/utils/fonts";
import Row from "@/components/hoc/row/row";
import Image from "next/image";
import Container from "@/components/hoc/container/container";

/**
 * Renders a donation component with a title and a link to donate.
 * @ {JSX.Element} - The rendered donation component.
 */
export default function Donation() {
  return (
    <div className={`${styles.donationWrapper} ${poppins.className}`}>
      <h2 className={styles.donationTitle}>Donate to save a life!</h2>
      <Container>
        <Row>
          <div className="col-2"></div>
          <p className={`${styles.donationText} col-md-4`}>
            Every donation plays a vital role in securing a brighter future for
            our furry friends. Your support can make a profound difference in
            the lives of animals in need. From providing shelter and medical
            care to offering love and nourishment, your contribution
            significantly impacts their well-being. Together, we can create a
            better world for them. Your generosity is key to safeguarding these
            defenseless beings. Please consider making a donation today to help
            ensure they receive the care and attention they deserve.
          </p>
          <Image
            src="/images/adoption/donationsHome.jpeg"
            alt="donation"
            width={300}
            height={220}
            className={styles.petImage}
          />
          <div className="col-2"></div>
        </Row>
        <Row customClasses={[styles.buttonsWrapper]}>
        <div className="col-4"></div>
          <a
            className={styles.donationsButton}
            href="https://buy.stripe.com/test_eVabMJ20jgPUeLm7su"
            target="_blank"
          >
            $10
          </a>
          <a
            className={styles.donationsButton}
            href="https://buy.stripe.com/test_14kaIFdJ19ns6eQcMP"
            target="_blank"
          >
            $20
          </a>
          <a
            className={styles.donationsButton}
            href="https://buy.stripe.com/test_8wM3gd8oH9nsfPq5ko"
            target="_blank"
          >
            $50
          </a>
          <div className="col-4"></div>
        </Row>
      </Container>
    </div>
  );
}
