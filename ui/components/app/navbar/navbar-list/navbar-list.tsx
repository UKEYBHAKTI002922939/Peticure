"use client";
import Link from 'next/link';
import NavBarListItem, { NavBarListItemProps } from './navbar-list-item/navbar-list-item';
import styles from './navbar-list.module.scss';
import { useSession } from "next-auth/react";
import React, { useState } from 'react';
import { BsFillPersonFill } from 'react-icons/bs'
import { logIn, logOut, toggleLoginLogout } from "../../../../reduxStore/features/auth-slice"; // importing functions from reduxStore
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/reduxStore/store';
import { useAppSelector } from '@/reduxStore/store';



/**
 * Renders a navigation bar list component with the given items.
 * @ {NavBarListProps} props - The props for the NavBarList component.
 * @ The rendered NavBarList component.
 */
export type NavBarListProps = {
  items: NavBarListItemProps[];
};

// functiom for Nav Bar
function NavBarList({ items }: NavBarListProps) {
  const isLoggedIn = useAppSelector((state) => state.authReducer.value.isLoggedIn);
  const dispatch = useDispatch<AppDispatch>();

  const onClickToggle = () => {
    dispatch(toggleLoginLogout());
    dispatch(logOut());

  }

  return (
    <>
      <ul className={styles.navBarList}>
        {items.map((item, index) => (
          <NavBarListItem key={index} {...item} />
        ))}
      </ul>
      <div className={styles.btnWrapper}>
        {isLoggedIn ? (
          <button className={styles.navBarListButton} onClick={onClickToggle}>
            Logout
          </button>
        ) : (
          <Link href="/login" passHref legacyBehavior>
            <a className={styles.navBarListButton}>Login | Sign up</a>
          </Link>
        )}
      </div>
    </>
  );
}

export default NavBarList;