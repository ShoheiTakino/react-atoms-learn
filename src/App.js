import React from "react";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

export default function App(props) {
  return (
    <UserProvider>
      <Router />;
    </UserProvider>
  );
}
