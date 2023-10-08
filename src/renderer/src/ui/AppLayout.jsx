import { Link, Outlet } from "react-router-dom";
import AlternateDisplayPicture from "./Components/AlternateDisplayPicture";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { faker } from "@faker-js/faker";
import WindowContainer from "../styles/other/WindowConatiner";
import Row from "./Components/Row";
import NavBar from "./Components/NavBar";
import {
  MenuList,
  NavMenuLeft,
  NavMenuRight,
  OutletSection,
} from "../styles/other/AppLayoutStyle";

const AppLayout = () => {
  return (
    <WindowContainer theme={"light"}>
      <Row stack="column">
        <NavBar>
          <NavMenuLeft>
            {/* TODO: Replace with Dashboard */}
            <Link to="/">
              <HomeOutlinedIcon />
            </Link>
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
        <OutletSection>
          <Outlet />
        </OutletSection>
      </Row>
    </WindowContainer>
  );
};

export default AppLayout;
