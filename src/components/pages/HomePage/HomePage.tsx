import React from "react";
import styles from "./HomePage.module.css";
import { MainProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import HomeIntroDrawing from "../../../assets/home/home-intro-drawing.png";
import { ReactComponent as TextBlob1 } from "../../../assets/home/text-blob-1.svg";
import { ReactComponent as TextBlob2 } from "../../../assets/home/text-blob-2.svg";
import { ReactComponent as TextBlob3 } from "../../../assets/home/text-blob-3.svg";

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
          <div className={styles.bubble1}>
            <div className={styles.bubbleBackground}>
              <TextBlob1 />
            </div>
            <div className={styles.bubbleText}>
              Hi! I'm Grace, a senior and master's student at MIT
            </div>
          </div>
          <div className={styles.bubble2}>
            <div className={styles.bubbleBackground}>
              <TextBlob2 />
            </div>
            <div className={styles.bubbleText}>studying CS and HCI.</div>
          </div>
          <div className={styles.bubble3}>
            <div className={styles.bubbleBackground}>
              <TextBlob3 />
            </div>
            <div className={styles.bubbleText}>Nice to meet you!</div>
          </div>
        </div>
      </section>
      <section className={styles.projects}>
        <h2 className={styles.sectionHeader}>projects</h2>
        <MainProjectGrid />
      </section>
    </>
  );
};
