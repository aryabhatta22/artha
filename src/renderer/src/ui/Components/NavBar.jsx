import styled from "styled-components";

const NavBarWrapper = styled.nav`
  height: auto;
  width: 100%;
  flex: 0 1 auto;
  background-color: var(--color-primary-1);
  padding: 0.25rem 0.75rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 200;
  color: var(--color-primary-4);
`;

const NavBar = ({ children }) => {
  return <NavBarWrapper>{children}</NavBarWrapper>;
};

export default NavBar;
