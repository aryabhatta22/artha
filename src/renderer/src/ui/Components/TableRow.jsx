import styled from "styled-components";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import ButtonIcon from "./ButtonIcon";

const Row = styled.tr`
  color: var(--color-primary-1);
`;

const RowData = styled.td`
  border-bottom: 1px solid var(--color-primary-2);
`;

const TableRow = ({ rowData, editRows, setRows, rowNumber }) => {
  return (
    <Row>
      {rowData.map((row, i) => (
        <RowData
          key={i}
          contentEditable={editRows}
          suppressContentEditableWarning={true}
        >
          {row}
        </RowData>
      ))}
      <RowData contentEditable={false} suppressContentEditableWarning={false}>
        <ButtonIcon
          onClick={() =>
            setRows((currentRows) =>
              currentRows.filter((row, i) => i !== rowNumber),
            )
          }
        >
          <DeleteOutlinedIcon />
        </ButtonIcon>
      </RowData>
    </Row>
  );
};

export default TableRow;
