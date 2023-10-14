import styled from "styled-components";

const WindowContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) =>
    props.theme === "dark"
      ? "var(--color-primary-1)"
      : "var(--color-primary-5)"};
`;

export default WindowContainer;
