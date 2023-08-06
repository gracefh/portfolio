import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import styles from "./Page.module.css";

const Page = (props: React.PropsWithChildren<{}>) => {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.pageContent}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Page;
