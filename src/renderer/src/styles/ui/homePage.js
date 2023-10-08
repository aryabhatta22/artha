import styled from "styled-components";

const WrapperMain = styled.main`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 83%;
`;

const Name = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
  margin: 1.25rem 0;
  color: var(--color-primary-4);
`;

const Footer = styled.footer`
  float: right;
  margin-right: 7rem;
  display: inline-flex;
  padding: 1.75rem 0;
  color: var(--color-primary-4);

  & > * {
    margin: 0px 2px;
  }
`;

export { WrapperMain, Name, Footer };
