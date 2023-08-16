import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Page from "./components/layout/Page/Page";

function App() {
  return (
    <Page>
      <Outlet />
    </Page>
  );
}

export default App;
