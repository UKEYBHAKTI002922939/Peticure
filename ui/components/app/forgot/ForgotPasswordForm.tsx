import React, { useState, useEffect } from 'react';
import styles from "./forgotPass.module.scss"; // Import the SCSS file for the forgot password page
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import Head from 'next/head';
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next';
import { group } from 'console';
import Link from 'next/link';

interface ForgotPasswordProps {
  // You can add props if needed
}

/**
 * A functional component that renders a form for resetting a forgotten password.
 * @ The JSX elements representing the form.
 */
const ForgotPasswordForm: NextPageWithLayout = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle the forgot password logic here
    // Send email with password reset instructions
    console.log('Forgot Password Submitted:', { email });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label className={styles.label} htmlFor="email"> Enter Registered Email:</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className={styles.button} type="submit">Reset Password</button>
      </form>
    </div>
  );
};

ForgotPasswordForm.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default ForgotPasswordForm;
