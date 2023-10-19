import styled from "styled-components";

const TableHeader = styled.tr`
  color: var(--color-primary-1);
`;

const Column = styled.th`
  border-bottom: 1px solid var(--color-primary-2);
  color: var(--color-primary-4);
  background-color: var(--color-primary-1);
`;
const TableColumn = ({ columns }) => {
  return (
    <TableHeader>
      {columns.map((column) => (
        <Column key={column}>{column}</Column>
      ))}
    </TableHeader>
  );
};

export default TableColumn;
