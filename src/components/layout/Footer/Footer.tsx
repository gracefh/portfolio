import React from "react";
import styles from "./Footer.module.css";
import { Icon } from "../../common/Icon/Icon";

export const Footer = () => {
  const email = "grace.f.huang@gmail.com";
  const github = "gracefh";
  const linkedin = "g-huang";

  return (
    <section className={styles.footer}>
      <div className={styles.icons}>
        <Icon link={`https://linkedin.com/in/${linkedin}`} iconClassName={"fa fa-brands fa-linkedin fa-2x"}/>
        <Icon link={`https://github.com/${github}`} iconClassName={"fa fa-brands fa-github fa-2x"}/>
        <Icon link={`mailto:${email}`} iconClassName={"fa fa-solid fa-envelope fa-2x"}/>
      </div>
    </section>
  );
};
