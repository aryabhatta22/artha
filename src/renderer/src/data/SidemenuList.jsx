import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export const sideMenu = {
  monthlyPlanning: [
    {
      menuOption: (
        <span>
          <PaymentsOutlinedIcon />
          <p>Fixed Expenses</p>
        </span>
      ),
      link: "monthlyPlan/fixedExpenses",
    },
    {
      menuOption: (
        <span>
          <AccountBalanceOutlinedIcon />
          <p>Long Term Saving</p>
        </span>
      ),
      link: "monthlyPlan/longTermSavings",
    },
    {
      menuOption: (
        <span>
          <SavingsOutlinedIcon />
          <p>Short Term Savings</p>
        </span>
      ),

      link: "monthlyPlan/shortTermSavings",
    },
    {
      menuOption: (
        <span>
          <ShoppingCartOutlinedIcon />
          <p>Variable Expenses</p>
        </span>
      ),

      link: "monthlyPlan/variableExpenses",
    },
  ],
};
