import styled from "styled-components";

const SideBarWrapper = styled.ul`
  background-color: var(--color-primary-1);
  height: 100%;
  width: 20%;
  color: var(--color-grey-0);
  font-weight: 100;
  padding: 50px 20px;
`;

const ListElement = styled.li`
  padding: 8px 0px;
`;

const SideBar = ({ menuList }) => {
  return (
    <SideBarWrapper>
      {menuList.map((menu, index) => (
        <ListElement>{menu["menuOption"]}</ListElement>
      ))}
    </SideBarWrapper>
  );
};

export default SideBar;
