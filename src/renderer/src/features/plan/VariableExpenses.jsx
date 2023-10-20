import { useState } from "react";
import { tableColumns } from "../../data/TableColumns";
import Table from "./../../ui/Components/Table";
import { useOutletContext } from "react-router-dom";

const initialHighColumns = tableColumns["variableExpensesHigh"];
const initialHighRows = [["Shopping", 2000]];
const initialLowColumns = tableColumns["variableExpensesLow"];
const initialLowRows = [["Shopping", 2000]];

const VariableExpenses = () => {
  const { isEditModeOn } = useOutletContext();

  const [highPriorityColumns, setHighPriorityColumns] =
    useState(initialHighColumns);
  const [hightPriorityRows, setHightPriorityRows] = useState(initialHighRows);
  const [lowPriorityColumns, setLowPriorityColumns] =
    useState(initialLowColumns);
  const [lowPriorityRows, setLowPriorityRows] = useState(initialLowRows);

  return (
    <div>
      <Table
        tableTitle={"High Priority"}
        columns={highPriorityColumns}
        rows={hightPriorityRows}
        editTable={isEditModeOn}
        setRows={setHightPriorityRows}
        addOrDeleteRows={true}
      />
      <Table
        tableTitle={"Low Priority"}
        columns={lowPriorityColumns}
        rows={lowPriorityRows}
        editTable={isEditModeOn}
        setRows={setLowPriorityRows}
        addOrDeleteRows={true}
      />
    </div>
  );
};

export default VariableExpenses;
