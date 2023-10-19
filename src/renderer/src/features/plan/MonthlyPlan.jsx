import styled from "styled-components";
import Button from "../../ui/Components/Button";
import Row from "../../ui/Components/Row";
import Table from "../../ui/Components/Table";
import { useEffect, useState } from "react";
import Calender from "../../ui/Components/Calender";
import moment from "moment/moment";
import { Outlet, useOutletContext } from "react-router-dom";
import { sideMenu } from "../../data/SidemenuList";
import { tableColumns } from "../../data/TableColumns";
import LabelAndInput from "../../ui/Components/LabelAndInput";

const MonthlyPlanStyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-color: var(--color-primary-5);
  width: 100%;
  height: 100%;
  padding: 2rem 5rem;
`;

const MonthlyPlan = () => {
  // TODO: To be replaced by context
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(
    moment().format("YYYY-MM"),
  );
  const [income, setIncome] = useState(0);

  const { setSidebarMenu } = useOutletContext();

  useEffect(() => {
    setSidebarMenu(sideMenu["monthlyPlanning"]);
  });

  return (
    <MonthlyPlanStyleContainer>
      <Row>
        <Calender
          selectedMonth={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          max={moment().add("1", "M").format("YYYY-MM")}
        />
        <LabelAndInput
          labelText={"Income"}
          inputType={"number"}
          id="income"
          value={income}
          setValue={setIncome}
          disable={!isEditModeOn}
        />
        <Button
          type="dark"
          onClick={() => setIsEditModeOn((isEditModeOn) => !isEditModeOn)}
        >
          {isEditModeOn ? "Save" : "Edit"}
        </Button>
      </Row>
      <Outlet context={{ isEditModeOn }} />
    </MonthlyPlanStyleContainer>
  );
};

export default MonthlyPlan;
