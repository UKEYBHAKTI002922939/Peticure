import React, { useEffect } from "react";
import styles from "./signup.module.scss";
import { NextPageWithLayout } from "@/common/types/page";
import PageLayout from "@/components/hoc/page-layout/page-layout";
import { GetStaticPropsContext } from "next";
import axios from "axios";
import { useRouter } from "next/navigation"; // router
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupForm: NextPageWithLayout = () => {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    fullname: "",
    confirmPassword: "",
  });

  // disable user button function till field is entered
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onSingup = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      // to prevent reloading of the form
      event.preventDefault();
      console.log("Signup");
      //setLoading(true);
      const response = await axios.post(
        "http://localhost:8000/user/users/signup",
        user
      );
      console.log("Signup Successful", response.data);
      toast.success("Succesfull Signup");

      //push the user to the next page
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error("Signup failed");
    } finally {
      //setLoading(false);
    }
  };
  // effect to enable  user
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.fullname.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div>
      <h2 className={styles.signUpTitle}>Sign up</h2>
      <div className={styles.container}>
        <form onSubmit={onSingup}>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="fullname">
              Full Name:
            </label>
            <input
              className={styles.input}
              type="text"
              id="fullname"
              value={user.fullname}
              onChange={(e) => setUser({ ...user, fullname: e.target.value })}
              placeholder="Fullname"
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="email">
              Email:
            </label>
            <input
              className={styles.input}
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              placeholder="Email"
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="password">
              Password:
            </label>
            <input
              className={styles.input}
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              placeholder="Password"
            />
          </div>
          <div className={styles.group}>
            <label className={styles.label} htmlFor="confirmPassword">
              Confirm Password:
            </label>
            <input
              className={styles.input}
              type="password"
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e.target.value })
              }
              placeholder="Confirm password"
            />
          </div>
          <button //calling the method
            className={styles.button}
            type="submit"
          >
            {buttonDisabled ? "Submit " : "Sign up"}
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

SignupForm.getLayout = function getLayout(page) {
  return <PageLayout>{page}</PageLayout>;
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default SignupForm;
