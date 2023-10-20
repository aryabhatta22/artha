import styled from "styled-components";
import Button from "./Button";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

const TableContainer = styled.table`
  margin: 20px 0px;
  font-size: 1rem;
  width: 100%;
`;

const TableBody = styled.tbody`
  margin: 30px 0px;
  font-size: 1rem;
  width: 100%;
`;

const TableHeading = styled.h3`
  text-align: left;
`;

const Table = ({
  tableTitle,
  columns,
  rows,
  editTable,
  setRows,
  addOrDeleteRows = true,
}) => {
  return (
    <>
      {tableTitle && <TableHeading>{tableTitle}</TableHeading>}
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
      {addOrDeleteRows && editTable && (
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
