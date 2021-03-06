import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import React from "react";
//import { UserContext } from "../../providers/UserProvider";
import { useRecoilState } from "recoil";
import { userState } from "../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `shohi${val}`,
    image: "https://source.unsplash.com/WX4i1Jq_o0Y",
    email: "1234@gmai;.com",
    phone: "090-0909-0909",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  //const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <USerArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </USerArea>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const USerArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
