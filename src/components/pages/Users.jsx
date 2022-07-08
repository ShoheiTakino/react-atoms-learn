import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";

export const Users = () => {
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
