import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

export default function App(props) {
  const user = {
    name: "shohiiiiiii",
    image: "https://source.unsplash.com/WX4i1Jq_o0Y",
    email: "1234@gmai;.com",
    phone: "090-0909-0909",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
