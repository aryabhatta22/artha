import { faker } from "@faker-js/faker";
import AlternateDisplayPicture from "./Components/AlternateDisplayPicture";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link, useNavigate } from "react-router-dom";
import WindowContainer from "../styles/other/WindowContainer";
import { WrapperMain, Name, Footer } from "../styles/ui/homePage";

import Button from "./Components/Button";
import Row from "./Components/Row";

const username = faker.person.fullName();

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <WindowContainer theme={"dark"}>
      <WrapperMain>
        <AlternateDisplayPicture name={username} scale={"l"} />
        <Name>{username}</Name>
        <Row type="spaced">
          <Button
            type="dark"
            onClick={() => navigate("/app/stats/summary/2023")}
          >
            <DescriptionOutlinedIcon />
            <p className="">View Summary</p>
          </Button>
          <Button type="dark" onClick={() => navigate("/app/plan/create/jan")}>
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
