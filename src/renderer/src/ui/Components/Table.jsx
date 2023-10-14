import styled from "styled-components";
import Row from "./Row";
import TableColumn from "./TableColumn";
import TableRow from "./TableRow";

const TableContainer = styled.table`
  margin: 30px 0px;
`;

const Table = ({ columns, rows, editTable }) => {
  return (
    <TableContainer>
      <tbody>
        {/* Column Data */}

        <TableColumn columns={columns} />

        {/* Row Data */}
        {/*TODO: Replace the key id  */}
        {rows.map((row) => (
          <TableRow key={row[0]} rowData={row} editRows={editTable} />
        ))}
      </tbody>
    </TableContainer>
  );
};

export default Table;
