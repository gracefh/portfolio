import React from "react";
import Style from "./Footer.module.css";
import { Icon } from "../common/Icon/Icon";

export const Footer = () => {
  const email = "grace.f.huang@gmail.com";
  const github = "gracefh";
  const linkedin = "g-huang";

  return (
    <section className={Style.footer}>
      <div>
        <h3 className={Style.contact}>Let's Connect!</h3>
      </div>
      <div className={Style.icons}>
        <Icon
          link={`https://linkedin.com/in/${linkedin}`}
          iconClassName={"fa fa-brands fa-linkedin fa-2x"}
        />
        <Icon
          link={`https://github.com/${github}`}
          iconClassName={"fa fa-brands fa-github fa-2x"}
        />
        <Icon
          link={`mailto:${email}`}
          iconClassName={"fa fa-solid fa-envelope fa-2x"}
        />
      </div>
      <div>
        <p className={Style.copyright}>© 2023 by Grace Huang</p>
      </div>
    </section>
  );
};
