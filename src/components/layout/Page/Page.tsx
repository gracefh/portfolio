import React from "react";
import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";
import styles from "./Page.module.css";
import { BackToTopButton } from "../../common/Buttons/BackToTopButton";

const Page = (props: React.PropsWithChildren<{}>) => {
  return (
    <div className={styles.page}>
      <NavBar />
      <main className={styles.pageContent}>{props.children}</main>
      <Footer />
      <BackToTopButton />
    </div>
  );
};

export default Page;
