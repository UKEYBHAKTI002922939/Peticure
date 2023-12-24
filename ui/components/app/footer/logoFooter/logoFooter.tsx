import Image from "next/image";
import Link from "next/link";
import styles from "./logoFooter.module.scss";

/**
 * Renders the logo and footer for the PetiCure pet care website.
 * @ {JSX.Element} - The logo and footer component.
 */
function LogoFooter() {
  return (
    <Link className={styles.logo} href="/">
      <Image src={"/images/paw-logo.svg"} alt={"logo"} width={50} height={50} />
      <span className={styles.logoName}>
        <span>
          PetiCure<span className={styles.logoDot}>.</span>
        </span>
        <span className={styles.logoSub}>Pet Care Website</span>
      </span>
    </Link>
  );
}

export default LogoFooter;