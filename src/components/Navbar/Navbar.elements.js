import styled from "styled-components";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Container } from "../../globalStyles";

export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  justify-content: center;
  align-content: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;
  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-self: center;
`;

export const NavIcon = styled(FaBeer)`
  margin-right: 0.5rem;
`;
