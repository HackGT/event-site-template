import NavbarComponent from "./NavbarComponent";

import styles from "./Navbar.module.scss";
import { VStack } from "@chakra-ui/react";

interface Anchor {
  name: string;
  id: string;
}

interface NavProps {
  anchors: Anchor[];
}

const Navbar = (np: NavProps) => {
  return (
    <VStack className={styles.container} spacing={"30px"}>
      {np.anchors.map((anchor) => (
        <NavbarComponent key={null} name={anchor.name} anchorLink={anchor.id} />
      ))}
    </VStack>
  );
};

export default Navbar;
