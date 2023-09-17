import { Link, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <p>App Layout</p>
      <Link to="/user">User</Link>

      <Outlet />
      <Link to="/">Back to main menu</Link>
    </div>
  );
};

export default AppLayout;
