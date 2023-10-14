import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: ${(props) =>
    props.type === "dark"
      ? "var(--color-primary-1)"
      : "var(--color-primary-4)"};
  border: 1px solid
    ${(props) =>
      props.type === "dark"
        ? "var(--color-primary-1)"
        : "var(--color-primary-4)"};
  color: ${(props) =>
    props.type === "dark"
      ? "var(--color-primary-4)"
      : "var(--color-primary-1)"};
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 3px;
  font-weight: normal;

  box-shadow: 0px 3px 1px -2px ${(props) => (props.type === "dark" ? "var(--color-primary-0)" : "var(--color-grey-0)")};

  &:hover {
    background-color: ${(props) =>
      props.type === "dark"
        ? "var(--color-primary-2)"
        : "var(--color-primary-3)"};

    color: ${(props) =>
      props.type === "dark"
        ? "var(--color-primary-4)"
        : "var(--color-primary-1)"};
  }
`;

const Span = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * {
    margin: 0px 5px;
  }
`;

const Button = ({ children, type = "light", onClick = "" }) => {
  return (
    <ButtonWrapper type={type} onClick={() => onClick()}>
      <Span>{children}</Span>
    </ButtonWrapper>
  );
};

export default Button;
