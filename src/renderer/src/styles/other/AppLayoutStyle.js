import styled from "styled-components";

const NavMenuLeft = styled.div`
  float: left;
  display: inline-flex;
  align-items: baseline;
  padding: 0 1.25rem;
`;

const NavMenuRight = styled.div`
  float: right;
  padding: 0 1.5rem;
`;

const MenuList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  & > li {
    margin: 0 0.75rem;
  }
`;

const OutletSection = styled.main`
  height: fit-content;
  width: 100%;
  flex: 1 1 auto;
  margin: 0;
`;
export { NavMenuLeft, NavMenuRight, MenuList, OutletSection };
