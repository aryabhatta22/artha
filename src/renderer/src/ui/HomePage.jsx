import { faker } from "@faker-js/faker";
import AlternateDisplayPicture from "./Components/AlternateDisplayPicture";
import { Button } from "primereact/button";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { Link } from "react-router-dom";

const username = faker.person.fullName();

const HomePage = () => {
  return (
    <div className="window-container bg-primary1">
      <div className="middle-wrapper flex h-5/6 flex-col items-center justify-center">
        <AlternateDisplayPicture
          className="block"
          name={username}
          scale={"l"}
        />
        <span className="text-8 my-5 text-lg text-primary4">{username}</span>
        <div className="home-btn-container space-x-7 py-3">
          <Button raised>
            <span className="inline-flex space-x-2">
              <DescriptionOutlinedIcon />
              <p className="">View Summary</p>
            </span>
          </Button>
          <Button raised>
            <span className="inline-flex space-x-2">
              <AddCircleOutlineOutlinedIcon />
              <p>Create Plan</p>
            </span>
          </Button>
        </div>
      </div>
      <Link to="/app/user">
        <span className="float-right mr-28 inline-flex space-x-2 py-7 text-primary4">
          <EditOutlinedIcon />
          <p>Edit Profile</p>
        </span>
      </Link>
    </div>
  );
};

export default HomePage;
