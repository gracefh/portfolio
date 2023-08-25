import React from "react";
import styles from "./HomePage.module.css";
import { MainProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import PlaceholderImage from "../../../assets/placeholder-background.png";
import HomeIntroDrawing from "../../../assets/home-intro-drawing.png";

export const HomePage = () => {
  return (
    <>
      <section className={styles.intro}>
        <img src={"/images/home/blob-1.png"} alt="" className={styles.blob1} />
        <img src={"/images/home/blob-2.png"} alt="" className={styles.blob2} />
        <img
          className={styles.homeIntroDrawing}
          src={HomeIntroDrawing}
          alt={"Drawing of Grace!"}
        />
        <div className={styles.introText}>
          <p>Hi! I'm Grace, a senior at MIT studying</p>
          <p>Computer Science and Human Computer Interaction</p>
          <p>Nice To Meet You!</p>
        </div>
      </section>
      <section className={styles.projects}>
        <h2 className={styles.sectionHeader}>projects</h2>
        <MainProjectGrid />
      </section>
    </>
  );
};
