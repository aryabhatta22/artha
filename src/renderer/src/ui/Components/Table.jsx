import styled from "styled-components";
import Button from "./Button";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

const TableContainer = styled.table`
  margin: 30px 0px;
  font-size: 1rem;
  width: 100%;
`;

const TableBody = styled.tbody`
  margin: 30px 0px;
  font-size: 1rem;
  width: 100%;
`;

const Table = ({
  columns,
  rows,
  editTable,
  setRows,
  addOrDeleteRows = true,
}) => {
  return (
    <>
      <TableContainer>
        <TableBody>
          {/* Column Data */}

          <TableColumn columns={columns} />

          {/* Row Data */}
          {/*TODO: Replace the key id  */}
          {rows.map((row, rowNumber) => (
            <TableRow
              key={rowNumber}
              rowData={row}
              editRows={editTable}
              setRows={setRows}
              rowNumber={rowNumber}
              addOrDeleteRows={addOrDeleteRows}
            />
          ))}
        </TableBody>
      </TableContainer>
      {addOrDeleteRows && (
        <div>
          <Button
            onClick={() =>
              setRows((currentRows) => [
                ...currentRows,
                Array(columns.length).fill(""),
              ])
            }
          >
            Add Row
          </Button>
        </div>
      )}
    </>
  );
};

export default Table;
