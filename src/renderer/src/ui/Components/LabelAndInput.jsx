import styled from "styled-components";

const Span = styled.span`
  margin: 20px 0px;
  display: block;
  align-items: center;
  justify-content: space-around;

  & > * {
    margin: 0px 5px;
  }
`;

const Label = styled.label`
  color: var(--color-primary-1);
  font-weight: 600;
  text-align: right;
`;

const Input = styled.input`
  background-color: var(--color-primary-5);
  border: none;
  border-bottom: 1px solid var(--color-primary-1);
  color: var(--color-primary-1);
  text-align: center;
  width: 150px;

  &[disabled] {
    background-color: var(--color-primary-5);
    /* color: var(--color-green-700); */
    font-weight: bold;
    border: none;
    font-size: 1.25rem;
    text-align: left;
  }
`;
const LabelAndInput = ({
  labelText,
  inputType,
  id = "",
  value,
  setValue,
  disable = false,
}) => {
  return (
    <Span>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        id={id}
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disable}
      />
    </Span>
  );
};

export default LabelAndInput;
