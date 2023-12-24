import React from "react";
import styles from "./shelter-title.module.scss";
import { poppins } from "@/common/utils/fonts";

const ShelterTitle: React.FC = () => {
  return (
    <h2 className={`${styles.sheltertitle} ${poppins.className}`}>
      Peticure Approved Shelters
    </h2>
  );
};

export default ShelterTitle;
