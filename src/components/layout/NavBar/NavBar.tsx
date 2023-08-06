import React from "react";
import Styles from "./NavBar.module.css";

type NavBarItemProps = {
  name: string;
  route: string;
};

export const NavBarItem = (props: NavBarItemProps) => {
  return (
    <a href={`${props.route}`} className={Styles.navBarItem}>
      <div className={Styles.navBarItemBackground}>{props.name}</div>
      <div>{props.name}</div>
    </a>
  );
};

export const NavBar = () => {
  return (
    <section className={Styles.navBar}>
      <h1 className={Styles.title}>GH</h1>
      <div className={Styles.navBarItems}>
        <NavBarItem name="projects" route="/projects" />
        <NavBarItem name="fun" route="/fun" />
        <NavBarItem name="about" route="/about" />
        <NavBarItem name="resume" route="/resume" />
      </div>
    </section>
  );
};
