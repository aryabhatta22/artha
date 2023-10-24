import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SideBarWrapper = styled.ul`
  background-color: var(--color-primary-1);
  height: 100%;
  width: 20%;
  color: var(--color-grey-0);
  font-weight: 100;
  padding: 40px 0px;
`;

const ListElement = styled.li`
  margin: 8px 0px;
  text-align: center;

  & a.active {
    color: var(--color-primary-1);
    font-weight: bold;
  }
  & a.active span {
    background: var(--color-primary-5);
  }
  & a span {
    padding: 8px;
    vertical-align: middle;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  &:hover {
    background: var(--color-primary-4);
    color: var(--color-primary-1);
  }
`;

const SideBar = ({ menuList }) => {
  return (
    <SideBarWrapper>
      {menuList.map((menu, index) => (
        <ListElement key={index}>
          <NavLink to={menu["link"]}>{menu["menuOption"]}</NavLink>
        </ListElement>
      ))}
    </SideBarWrapper>
  );
};

export default SideBar;
