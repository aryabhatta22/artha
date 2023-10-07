import { Link, Outlet } from "react-router-dom";
import AlternateDisplayPicture from "./Components/AlternateDisplayPicture";
import { faker } from "@faker-js/faker";

const AppLayout = () => {
  return (
    <div className="window-container flex flex-col">
      <div className="navigation-wrapper font-core h-auto w-full flex-initial content-around bg-primary1 py-3 text-lg font-normal text-primary4 ">
        <div className="float-left inline-flex  items-center px-6">
          {/* TODO: Replace with Dashboard */}
          <Link to="/">Home</Link>
        </div>
        <div className="float-right px-6">
          <ul className="flex flex-row items-center space-x-5">
            <li>Create Plan</li>
            <li>Summary</li>
            <li>
              <AlternateDisplayPicture
                name={faker.person.fullName()}
                scale="s"
              />
            </li>
          </ul>
        </div>
      </div>
      <div className="main-container h-fit w-full flex-auto bg-primary4">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
