import { useState } from "react";
import { tableColumns } from "../../data/TableColumns";
import Table from "../../ui/Components/Table";
import { faker } from "@faker-js/faker";
import { useOutletContext } from "react-router-dom";

const initialColumns = tableColumns["shortTermSavings"];
const initialRows = [
  ["Trip to Goa", "12-MAR-1233", "18-oct-1234", 2000, 100, 20],
];

const ShortTermSavings = () => {
  const { isEditModeOn } = useOutletContext();
  const [columns, setColumns] = useState(initialColumns);
  const [rows, setRows] = useState(initialRows);

  return (
    <div>
      <Table
        columns={columns}
        rows={rows}
        editTable={isEditModeOn}
        setRows={setRows}
        addOrDeleteRows={true}
      />
    </div>
  );
};

export default ShortTermSavings;
