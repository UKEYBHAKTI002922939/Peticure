import Link from "next/link";
import styles from './navbar-list-item.module.scss';
import { poppins } from "@/common/utils/fonts";

export type NavBarListItemProps = {
  href: string;
  label: string;
};

/**
 * Renders a single item in the navigation bar list.
 * @ {NavBarListItemProps} props - The props object containing the href and label.
 * @ The JSX element representing the navigation bar list item.
 */
function NavBarListItem({ href, label }: NavBarListItemProps) {
  return (
    <li className={`${styles.navBarListItemWrapper} ${poppins.className}`}>
      <Link href={href} className={styles.navBarListItem}>{label}</Link>
    </li>
  );
}

export default NavBarListItem;
