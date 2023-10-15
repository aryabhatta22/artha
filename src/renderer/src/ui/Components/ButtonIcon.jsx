import styled from "styled-components";

const Button = styled.button`
  background: none;
  border: none;
  color: var(--color-primary-1);
`;

const ButtonIcon = ({ children, onClick }) => {
  return <Button onClick={() => onClick()}>{children}</Button>;
};

export default ButtonIcon;
