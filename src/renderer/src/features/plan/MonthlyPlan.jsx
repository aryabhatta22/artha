import styled from "styled-components";
import Button from "../../ui/Components/Button";
import Row from "../../ui/Components/Row";
import Table from "../../ui/Components/Table";
import { useEffect, useState } from "react";
import Calender from "../../ui/Components/Calender";
import moment from "moment/moment";
import { useOutletContext } from "react-router-dom";
import { sideMenu } from "../../data/SidemenuList";
import { tableColumns } from "../../data/TableColumns";

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

const columns = tableColumns["fixedExpenses"];
const rows = [
  ["1", "2", "3"],
  ["11", "22", "33"],
];

const MonthlyPlan = () => {
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(
    moment().format("YYYY-MM"),
  );
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
        <Button
          type="dark"
          onClick={() => setIsEditModeOn((isEditModeOn) => !isEditModeOn)}
        >
          {isEditModeOn ? "Save" : "Edit"}
        </Button>
      </Row>
      <Row type="notSpaced"></Row>
      <Table columns={columns} rows={rows} editTable={isEditModeOn} />
    </MonthlyPlanStyleContainer>
  );
};

export default MonthlyPlan;
