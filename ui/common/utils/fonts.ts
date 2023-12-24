import { Open_Sans, Poppins } from 'next/font/google';
/**
 * Defines the Open Sans font with specified configurations.
 */
export const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

/**
 * Defines the Poppins font with specified configurations.
 */
export const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});
