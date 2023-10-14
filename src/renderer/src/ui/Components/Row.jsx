import styled, { css } from "styled-components";

const RowWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.stack === "row" ? "row" : "column")};

  ${(props) => {
    if (props.type == "spaced")
      return css`
        align-items: center;
        justify-content: space-between;
        & > * {
          margin: 0px 5px;
        }
      `;
  }}
`;

const Row = ({ children, stack = "row", type = "spaced" }) => {
  return (
    <RowWrapper stack={stack} type={type}>
      {children}
    </RowWrapper>
  );
};

export default Row;
