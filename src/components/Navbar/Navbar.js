import React from "react";
import { Nav, NavbarContainer, NavIcon, NavLogo } from "./Navbar.elements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon />
            KAMNYWESO
          </NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
