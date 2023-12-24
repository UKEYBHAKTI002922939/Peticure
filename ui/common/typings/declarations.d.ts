// Declaration for handling SCSS modules in TypeScript
declare module '*.scss' {
  // Object containing CSS class names as keys with their associated values
  const classes: { readonly [key: string]: string };
  // Exporting the classes object
  export default classes;
}

// Declaration for importing styles from 'react-awesome-slider/src/styles'
declare module 'react-awesome-slider/src/styles';

// Declaration for importing the 'react-awesome-slider/dist/autoplay' module
declare module 'react-awesome-slider/dist/autoplay';
