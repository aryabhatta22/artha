import styled from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: ${(props) => (props.stack === "row" ? "row" : "column")};
  & > * {
    margin: 0px 5px;
  }
`;

const Row = ({ children, stack = "row" }) => {
  return <RowWrapper stack={stack}>{children}</RowWrapper>;
};

export default Row;
