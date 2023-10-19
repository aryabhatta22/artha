import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import styled from "styled-components";
import Table from "../../ui/Components/Table";
import { tableColumns } from "../../data/TableColumns";

const Section = styled.section``;
// columns, rows, editTable, setRows

const columns = [];
const rowsDummy = [
  ["Current Salary", 1234],
  ["Projected Target", 10000],
  ["Target Achieved", 10000],
  ["Will be achieved on", "12-MAR-2024"],
];

const otherSavingsColumns = tableColumns["longTermSavings"];

const LongTermSavings = () => {
  //TODO: Replace with redux logic
  const { isEditModeOn } = useOutletContext();
  const [rows, setRows] = useState(rowsDummy);
  const [otherSavingsRows, setOtherSavingsRows] = useState([
    ["Gold", 1234],
    ["Term Insurance", 10000],
    ["Health Insurance", 10000],
    ["Stocks", 1111],
    ["Mutual Funds", 1633],
  ]);
  return (
    <Section>
      <div>
        <Table
          columns={columns}
          rows={rows}
          editTable={false}
          setRows={setRows}
          addOrDeleteRows={false}
        />
      </div>
      <div>
        <Table
          columns={otherSavingsColumns}
          rows={otherSavingsRows}
          editTable={isEditModeOn}
          setRows={setRows}
          addOrDeleteRows={false}
        />
      </div>
    </Section>
  );
};

export default LongTermSavings;
