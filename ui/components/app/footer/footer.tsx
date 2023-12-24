// Import necessary dependencies
import React, { useState } from 'react';
import axios from 'axios';
import Container from "@/components/hoc/container/container";
import Row from "@/components/hoc/row/row";
import styles from "./footer.module.scss";
import LogoFooter from "./logoFooter/logoFooter";
import { poppins } from "@/common/utils/fonts";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";

export default function Footer() {
  // State for email form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {
      // Send email using Axios
      await axios.post('http://localhost:3000/api/email', { email });
      toast.success('Email sent successfully!');

      // Clear form fields
      setFullName('');
      setEmail('');
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error('Error sending email', error);
    }
  };

  return (
    <footer className={`${styles.footer} ${poppins.className}`}>
      <div className={styles.footerTop}>
        <Container>
          <Row>
            <div className="col-lg-4">
              <div>
                <LogoFooter />
              </div>
              <div className={styles.contactInfoDiv}>
                <span className={styles.contactInfoHeading}> Address</span>
                <br />
                <span className={styles.contactInfo}>290 Quarry street</span>
                <br />
                <span className={styles.contactInfo}>Quincy, 02169</span>
                <br />
                <span className={styles.contactInfoHeading}> Email</span>
                <br />
                <span className={styles.contactInfo}>peticure@gmail.com</span>
              </div>
            </div>
            <div className="col-lg-4">
              <div>
                <span className={styles.footerHeadings}>
                  Our Services<span className={styles.footerHeadingDot}>.</span>
                </span>
                <div>
                  <Link href="/adoption" className={styles.ourServicesText}>
                    Adoption
                  </Link>
                  <Link href="/foster" className={styles.ourServicesText}>
                    Foster
                  </Link>
                  <Link href="/shelter" className={styles.ourServicesText}>
                    Shelter
                  </Link>
                  <Link href="/donation" className={styles.ourServicesText}>
                    Donation
                  </Link>
                  <Link href="/reportAbuse" className={styles.ourServicesText}>
                    Report abuse
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <span className={styles.footerHeadings}>
                Newsletter<span className={styles.footerHeadingDot}>.</span>
              </span>
              <div>
                {/* Add form for newsletter */}
                <form onSubmit={handleSubmit}>
                  <div className={styles.inputBox}>
                    <input
                      type="text"
                      placeholder="Enter full name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <button type="submit" className={styles.navBarListButton}>
                    Submit
                  </button>
                </form>
                <ToastContainer />

              </div>
            </div>
          </Row>
        </Container>
      </div>
      <Container>
        <Row customClasses={[styles.subFooter]}>
          <div className={`col-md-1 ${styles.bottomFooterText}`}></div>PetiCure @ 2023. All rights reserved.
        </Row>
      </Container>
    </footer>
  );
}
