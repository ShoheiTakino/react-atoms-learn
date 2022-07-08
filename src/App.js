import { Router } from "./router/Router";
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
  return <Router />;
}
