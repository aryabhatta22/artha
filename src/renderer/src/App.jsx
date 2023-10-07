import "./index.css";
import "./theme/theme.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import User from "./features/user/User";
import Error from "./ui/Error";
import MonthlyPlan from "./features/plan/MonthlyPlan";
import Account from "./features/account/Account";
import AnnualSummary from "./features/stats/AnnualSummary";
import Graph from "./features/stats/Graph";
import HomePage from "./ui/HomePage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <Error />,
    },
    {
      path: "/app",
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "user",
          element: <User />,
        },
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "plan/create/:month",
          element: <MonthlyPlan />,
        },
        {
          path: "stats/summary/:year",
          element: <AnnualSummary />,
        },
        {
          path: "stats/graph/:year",
          element: <Graph />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
