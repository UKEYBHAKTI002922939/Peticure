import React from 'react';
import styles from './foster-title.module.scss';
import { poppins } from "@/common/utils/fonts";

/**
 * A functional component that renders the title for Peticure Approved Foster Homes.
 * @ {ReactElement} - The rendered title component.
 */
const FosterTitle: React.FC = () => {
    return (
        <h2 className={`${styles.fostertitle} ${poppins.className}`}>
        Peticure Approved Foster Homes
      </h2>
    );
};

export default FosterTitle;
