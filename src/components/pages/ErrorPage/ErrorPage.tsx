import React from "react";
import Page from "../../layout/Page/Page";
import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <Page>
      <section className={styles.ErrorPage}>
        <div className={styles.ErrorPageContent}>
          <h1>Oops!</h1>
          <p>You found an invalid page</p>
          <a href="/">Go back Home</a>
        </div>
      </section>
    </Page>
  );
};
