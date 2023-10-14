import styled from "styled-components";
import { faker } from "@faker-js/faker";
import AlternateDisplayPicture from "../../ui/Components/AlternateDisplayPicture";
const UserStyleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

const LeftWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: var(--color-primary-4);
  text-align: left;
  padding: 3rem 5rem;
`;

const RightWrapper = styled.div`
  width: 20%;
  background-color: var(--color-primary-3);
`;

const User = () => {
  const userName = faker.person.fullName();
  return (
    <UserStyleContainer>
      <LeftWrapper>
        <AlternateDisplayPicture scale="l" name={userName} />
        <h3> {userName} </h3>
      </LeftWrapper>
      {/* <RightWrapper>User detail short</RightWrapper> */}
    </UserStyleContainer>
  );
};

export default User;
