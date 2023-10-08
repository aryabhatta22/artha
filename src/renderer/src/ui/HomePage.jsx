import { faker } from "@faker-js/faker";
import AlternateDisplayPicture from "./Components/AlternateDisplayPicture";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link } from "react-router-dom";
import WindowContainer from "../styles/other/WindowConatiner";
import { WrapperMain, Name, Footer } from "../styles/ui/homePage";

import Button from "./Components/Button";
import Row from "./Components/Row";

const username = faker.person.fullName();

const HomePage = () => {
  return (
    <WindowContainer theme={"dark"}>
      <WrapperMain>
        <AlternateDisplayPicture name={username} scale={"l"} />
        <Name>{username}</Name>
        <Row>
          <Button type="dark">
            <DescriptionOutlinedIcon />
            <p className="">View Summary</p>
          </Button>
          <Button type="dark">
            <AddCircleOutlineOutlinedIcon />
            <p>Create Plan</p>
          </Button>
        </Row>
      </WrapperMain>
      <Link to="/app/user">
        <Footer>
          <EditOutlinedIcon />
          <p>Edit Profile</p>
        </Footer>
      </Link>
    </WindowContainer>
  );
};

export default HomePage;
