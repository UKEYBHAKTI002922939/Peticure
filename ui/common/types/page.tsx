import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

// Type representing a Next.js page with an optional layout function
export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Type representing Next.js app props with an extended Component type
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
