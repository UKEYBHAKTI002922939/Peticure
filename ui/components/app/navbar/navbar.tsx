// navbar.tsx

import Link from 'next/link';
import Container from "@/components/hoc/container/container";
import Logo from "./logo/logo";
import NavBarList from "./navbar-list/navbar-list";
import styles from "./navbar.module.scss";
import Row from "@/components/hoc/row/row";


const data = [
  { href: "/", label: "Home" },
  { href: "/adoption", label: "Adoption" },
  { href: "/shelter", label: "Shelters" },
  { href: "/foster", label: "Fosters" },
  { href: "/contact", label: "Contact" },
];

/**
 * Renders the navigation bar component.
 * @ {JSX.Element} - The rendered navigation bar component.
 */
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Container>
        <Row>
          <Logo />
          <NavBarList items={data} />
          {/* Link to About Us with legacyBehavior */}
          <Link href="/about" passHref legacyBehavior>
            <a></a>
          </Link>
        </Row>
      </Container>
    </nav>
  );
}
