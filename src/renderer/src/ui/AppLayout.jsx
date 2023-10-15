import { Link, Outlet } from "react-router-dom";
import AlternateDisplayPicture from "./Components/AlternateDisplayPicture";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import { faker } from "@faker-js/faker";
import WindowContainer from "../styles/other/WindowContainer";
import Row from "./Components/Row";
import NavBar from "./Components/NavBar";
import {
  MenuList,
  NavMenuLeft,
  NavMenuRight,
  OutletSection,
  OutletWrapper,
} from "../styles/other/AppLayoutStyle";
import SideBar from "./Components/SideBar";
import Button from "./Components/Button";
import { useState } from "react";
// import { getCurrentWindow } from "electron";

// const reload = () => getCurrentWindow().reload();

const AppLayout = () => {
  const [sideBarMenu, setSideBarMenu] = useState([]);

  return (
    <WindowContainer theme={"light"}>
      <Row stack="column" type="noSpaced">
        <NavBar>
          <NavMenuLeft>
            {/* TODO: Replace with Dashboard */}
            <MenuList>
              <li>
                <Link to="/">
                  <HomeOutlinedIcon />
                </Link>
              </li>
              {/* <li>
                <Button>
                  <RefreshOutlinedIcon />
                </Button>
              </li> */}
            </MenuList>
          </NavMenuLeft>
          <NavMenuRight>
            <MenuList>
              <li>Create Plan</li>
              <li>Summary</li>
              <li>
                <AlternateDisplayPicture
                  name={faker.person.fullName()}
                  scale="s"
                />
              </li>
            </MenuList>
          </NavMenuRight>
        </NavBar>
      </Row>
      <OutletWrapper>
        <SideBar menuList={sideBarMenu} />
        <OutletSection>
          <Outlet context={{ setSidebarMenu: setSideBarMenu }} />
        </OutletSection>
      </OutletWrapper>
    </WindowContainer>
  );
};

export default AppLayout;
