"use client";
import React, { useState, useEffect } from 'react';
import styles from "./login.module.scss";
import { NextPageWithLayout } from '@/common/types/page';
import PageLayout from '@/components/hoc/page-layout/page-layout';
import Head from 'next/head'
import { useTranslations } from 'next-intl';
import { GetStaticPropsContext } from 'next';
import { group } from 'console';
import Link from 'next/link';
//import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import {useRouter} from "next/navigation"; // router 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {logIn,logOut , toggleLoginLogout} from "../../../reduxStore/features/auth-slice"; // importing functions from reduxStore
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/reduxStore/store';
import { useAppSelector } from '@/reduxStore/store';


const LoginForm:  NextPageWithLayout = ()  => {
    const email = useAppSelector((state) => state.authReducer.value.email);
    const username = useAppSelector((state) => state.authReducer.value.fullname);


    const isLoggedIn = useAppSelector((state) => state.authReducer.value.isLoggedIn);


    const router = useRouter();
    const notify = () => toast("Login Succesfull");

    const [user, setUser] = React.useState({
    email:"",
    password: "", 
    fullname:"",
  })
   
  const dispatch = useDispatch<AppDispatch>();
  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
        event.preventDefault();
        const response = await axios.post("http://localhost:8000/user/users/login",user);
        dispatch(logIn(user.email))
        dispatch(toggleLoginLogout());
        console.log("Login success", response.data);
        toast.success("Login success");
        router.push("/");
    } catch (error:any) {
        console.log("Login failed", error.message);
        toast.error(`Login Failed ${error.message}`);
    } 

}

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle the login logic here
       // console.log('Login Submitted', { email , password });
    };

    return (
        <div >
            <h2 className={styles.loginTitle}>Log In</h2>
        <div className={styles.container}>
            <form onSubmit={onLogin}>
                <div className={styles.group}>
                    <label className={styles.label} htmlFor="Email">Email:</label>
                    <input
                        className={styles.input}
                        type="text"
                        id="Email"
                        value={user.email}
                        onChange={(e) => setUser({...user, email: e.target.value})}
                        placeholder="email"
                    />
                </div>
                <div className={styles.group}>
                    <label className={styles.label} htmlFor="password">Password:</label>
                    <input
                        className={styles.input}
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={(e) => setUser({...user, password: e.target.value})}
                        placeholder="password"
                    />
                </div>
                <div className={styles.linksWrapper}>
                    <button className={styles.button} type="submit">Login</button>
                    {/* Links for signup page and Forgot Password */}   
                    <div className={styles.links}>
                        <Link href="/forgotPassword">Forgot Password?</Link>
                        <Link href="/signup">Sign Up</Link>
                    </div>
                </div>
                <ToastContainer />
            </form>
           </div>
        </div>
    );
};

   LoginForm.getLayout = function getLayout(page) {
    return <PageLayout>{page}</PageLayout>;
  };
  
  export async function getStaticProps({locale}: GetStaticPropsContext) {
    return {
      props: {
        messages: (await import(`@/messages/${locale}.json`)).default
      }
    };
  }

export default LoginForm;
