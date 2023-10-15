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
`;

const Input = styled.input`
  background-color: var(--color-primary-5);
  border: none;
  border-bottom: 1px solid var(--color-primary-1);
  color: var(--color-primary-1);
  text-align: center;
  width: 150px;
`;
const LabelAndInput = ({ labelText, inputType, id = "", value, setValue }) => {
  return (
    <Span>
      <Label htmlFor={id}>{labelText}</Label>
      <Input
        id={id}
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Span>
  );
};

export default LabelAndInput;
