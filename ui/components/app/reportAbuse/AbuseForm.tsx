import React, { useState } from "react";
import styles from "./abuse.module.scss";
import { NextPageWithLayout } from "@/common/types/page";
import PageLayout from "@/components/hoc/page-layout/page-layout";
import { GetStaticPropsContext } from "next";
//import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import { useRouter } from "next/navigation"; // router
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { poppins } from "@/common/utils/fonts";

const AbuseForm: NextPageWithLayout = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    animalDescription: "",
    location: "",
    incidentDetails: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add logic to submit the form data (e.g., send a request to a server)
    try {
      // to prevent reloading of the form
      event.preventDefault();
      console.log("Signup");
      //setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/abuse",
        formData
      );
      console.log("", response.data);
      toast.success("Report submitted successfully!");
      console.log("Form submitted:", formData);
      //push the user to the next page
      //console.log('Form submitted:', formData);
    } catch (error: any) {
      console.log("failed ", error.message);
      toast.error("Form Submisssion failed");
    }
    // You can add further logic here, such as sending the form data to a server.
  };

  return (
    <>
      <h2 className={`${styles.reportAbuseTitle} ${poppins.className}`}>
        Report animal abuse
      </h2>
      <div className={styles.abuseForm}>
        {/* Animal Image */}
        <img
          className={`${styles.animalImage} ${poppins.className}`}
          src="/images/reportAbuse.webp" // Replace with the actual URL of the animal image
          alt="Animal Image"
        />
        {/* Information Cards */}
        <div className={styles.infoCards}>
          <div className={styles.infoCard}>
            <h2>What is Animal Abuse?</h2>
            <p>
              Animal abuse is any action or neglect that causes unnecessary harm
              or suffering to an animal. This includes physical harm, neglect,
              and intentional cruelty.
            </p>
          </div>
        </div>

        {/* Report Form */}
        <form onSubmit={handleSubmit} className={styles.reportForm}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Animal Description:
            <textarea
              name="animalDescription"
              value={formData.animalDescription}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </label>
          <label>
            Incident Details:
            <textarea
              name="incidentDetails"
              value={formData.incidentDetails}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Submit Report</button>
        </form>

        {/* Toast Container for Notifications */}
        <ToastContainer />
      </div>
    </>
  );
};

AbuseForm.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default AbuseForm;
