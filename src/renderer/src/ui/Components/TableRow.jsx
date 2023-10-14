import styled from "styled-components";

const Row = styled.tr`
  color: var(--color-primary-1);
`;

const RowData = styled.td`
  border-bottom: 1px solid var(--color-primary-2);
`;

const TableRow = ({ rowData, editRows }) => {
  return (
    <Row>
      {rowData.map((row) => (
        <RowData
          key={row}
          contentEditable={editRows}
          suppressContentEditableWarning={true}
        >
          {row}
        </RowData>
      ))}
    </Row>
  );
};

export default TableRow;
