"use client";
import { IPropsChildren } from "@/common/interfaces";
import Footer from "@/components/app/footer/footer";
import Navbar from "@/components/app/navbar/navbar";
import { ReduxProvider } from "@/reduxStore/provider";
import { useMemo } from "react";

/**
 * A functional component that represents the layout of a page.
 * @ {IPropsChildren} props - The props object containing the children components.
 * @ The JSX elements representing the page layout.
 */
const PageLayout: React.FC<IPropsChildren> = ({ children }) => {
  return (
    <>
      <ReduxProvider>
        <Navbar />
        {children}
        <Footer />
      </ReduxProvider>

    </>
  );
};

export default PageLayout;
