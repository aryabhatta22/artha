import styled from "styled-components";
import { getInitials } from "../../Utility/Text/getInitials";

const WrapperDisplayPicture = styled.div`
  display: flex;
  height: ${(props) =>
    props.scale === "s" ? "3rem" : props.scale === "m" ? "6rem" : "12rem"};
  width: ${(props) =>
    props.scale === "s" ? "3rem" : props.scale === "m" ? "6rem" : "12rem"};
  align-items: center;
  justify-content: center;
  border-radius: ${(props) =>
    props.scale === "s" ? "30px" : props.scale === "m" ? "60px" : "120px"};
  text-align: center;
  background-color: var(--color-primary-2);
`;

const DisplayPicture = styled.div`
  font-size: ${(props) =>
    props.scale === "s" ? "1rem" : props.scale === "m" ? "2rem" : "4rem"};
  color: var(--color-primary-4);
`;

const AlternateDisplayPicture = ({ name, scale = "s" }) => {
  return (
    <WrapperDisplayPicture scale={scale}>
      <DisplayPicture scale={scale}>{getInitials(name)}</DisplayPicture>
    </WrapperDisplayPicture>
  );
};

export default AlternateDisplayPicture;
