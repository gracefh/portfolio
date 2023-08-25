import React, { useState } from "react";
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
  let [displayHamburger, setDisplayHamburger] = useState(false);

  const removeHamburger = () => {
    console.log("clicked");
    setDisplayHamburger(false);
    // ev.stopPropagation();
  };
  const onClickHamburger = () => {
    setDisplayHamburger(!displayHamburger);
    if (displayHamburger === true) {
      document.addEventListener("click", removeHamburger, {
        // passive: true,
        once: true,
      });
    }
  };

  return (
    <section className={Styles.navBar}>
      <Link to="/" className={Styles.title}>
        <h1 className={Styles.titleText}>GH</h1>
      </Link>
      <div className={Styles.navBarItems}>
        <NavBarItem name="projects" route="/projects" isResume={false} />
        <NavBarItem name="fun" route="/fun" isResume={false} />
        <NavBarItem name="about" route="/about" isResume={false} />
        <NavBarItem name="resume" route={`${ResumePDF}`} isResume={true} />
      </div>
      <button onClick={onClickHamburger} className={Styles.hamburger}>
        <i className="fa fa-solid fa-bars fa-lg"></i>
      </button>
      {displayHamburger && (
        <>
          {/* <div className={Styles.blocker} onClick={onClickHamburger}></div> */}
          <div
            onClick={removeHamburger}
            className={Styles.navBarItemsHamburger}
          >
            <NavBarItem name="projects" route="/projects" isResume={false} />
            <NavBarItem name="fun" route="/fun" isResume={false} />
            <NavBarItem name="about" route="/about" isResume={false} />
            <NavBarItem name="resume" route={`${ResumePDF}`} isResume={true} />
          </div>
        </>
      )}
    </section>
  );
};
