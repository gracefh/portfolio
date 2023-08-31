import React from "react";
import Page from "../layout/Page";
import Style from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

export const ErrorMessage = () => {
  return (
    <section className={Style.ErrorPage}>
      <div className={Style.ErrorPageContent}>
        <h1>Oops!</h1>
        <p>You found an invalid page</p>
        <Link to="/" className={"link-dark"}>
          Go back Home
        </Link>
      </div>
    </section>
  );
};

export const ErrorPage = () => {
  return (
    <Page>
      <ErrorMessage />
    </Page>
  );
};
