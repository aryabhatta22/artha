import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import User from "./features/user/User";
import Error from "./ui/Error";
import {
  FixedExpenses,
  LongTermSavings,
  MonthlyPlan,
  ShortTermSavings,
  VariableExpenses,
} from "./features/plan/MonthlyPlanComponents";
import Account from "./features/account/Account";
import AnnualSummary from "./features/stats/AnnualSummary";
import Graph from "./features/stats/Graph";
import HomePage from "./ui/HomePage";
import GlobalStyles from "./styles/GlobalStyle";

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
          index: true,
          element: <User />,
        },
        {
          path: "user",
          element: <User />,
        },
        {
          path: "account",
          element: <Account />,
        },
        {
          path: "monthlyPlan",
          element: <MonthlyPlan />,
          children: [
            {
              index: true,
              element: <FixedExpenses />,
            },
            {
              path: "fixedExpenses",
              element: <FixedExpenses />,
            },
            {
              path: "longTermSavings",
              element: <LongTermSavings />,
            },
            {
              path: "shortTermSavings",
              element: <ShortTermSavings />,
            },
            {
              path: "variableExpenses",
              element: <VariableExpenses />,
            },
          ],
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
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
