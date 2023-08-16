import React from "react";
import Styles from "./NavBar.module.css";
import { Link, NavLink } from "react-router-dom";
import ResumePDF from "../../../assets/grace-huang-resume-2023.pdf";

type NavBarItemProps = {
  name: string;
  route: string;
  isResume: boolean;
};

export const NavBarItem = (props: NavBarItemProps) => {
  return props.isResume ? (
    <a
      href={`${props.route}`}
      target="_blank"
      rel="noreferrer"
      className={Styles.navBarItem}
    >
      <div className={Styles.navBarItemBackground}>{props.name}</div>
      <div>{props.name}</div>
    </a>
  ) : (
    <NavLink
      to={`${props.route}`}
      className={({ isActive, isPending }) =>
        isActive ? Styles.navBarItem + " " + Styles.active : Styles.navBarItem
      }
    >
      <div className={Styles.navBarItemBackground}>{props.name}</div>
      <div>{props.name}</div>
    </NavLink>
  );
};

export const NavBar = () => {
  return (
    <section className={Styles.navBar}>
      <h1>
        <Link to="/" className={Styles.title}>
          GH
        </Link>
      </h1>
      <div className={Styles.navBarItems}>
        <NavBarItem name="projects" route="/projects" isResume={false} />
        <NavBarItem name="fun" route="/fun" isResume={false} />
        <NavBarItem name="about" route="/about" isResume={false} />
        <NavBarItem name="resume" route={`${ResumePDF}`} isResume={true} />
      </div>
    </section>
  );
};
