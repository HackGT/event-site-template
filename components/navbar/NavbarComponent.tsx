import { Link } from "@chakra-ui/react";

import styles from "./Navbar.module.scss";

interface NavbarComponentProps {
  name: string;
  key: null;
  anchorLink: string;
}

const NavbarComponent = (ncp: NavbarComponentProps) => {
  return (
    <div className={styles.component}>
      <Link style={{ textDecoration: "none" }} href={ncp.anchorLink}>
        {ncp.name}
      </Link>
    </div>
  );
};

export default NavbarComponent;
