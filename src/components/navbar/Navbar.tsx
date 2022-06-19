import NavbarComponent from "./NavbarComponent";

import styles from "./Navbar.module.scss";
import { Menu, MenuButton, IconButton, MenuItem, MenuList} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

interface Anchor {
  name: string;
  id: string;
}

interface NavProps {
  anchors: Anchor[];
}

const Navbar = (np: NavProps) => {
  return (
    <div  className={styles.container}>
    <Menu>
      <MenuButton as={IconButton} aria-label='Options'icon={<HamburgerIcon />} variant='outline'/>
    <MenuList>
      {np.anchors.map((anchor) => (
        <MenuItem><NavbarComponent key={null} name={anchor.name} anchorLink={anchor.id}/></MenuItem>
      ))}
      </MenuList>
    </Menu>
    </div>
  );
};

export default Navbar;
