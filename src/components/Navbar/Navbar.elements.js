import styled from "styled-components";

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
