import React from "react";
import styles from "./HomePage.module.css";
import { ProjectPreviewProps } from "../../common/ProjectPreview/ProjectPreview";
import {
  MainProjectGrid,
  ProjectGrid,
} from "../../common/ProjectGrid/ProjectGrid";
import PlaceholderImage from "../../../assets/placeholder-background.png";
import HomeIntroDrawing from "../../../assets/home-intro-drawing.png";
import Page from "../../layout/Page/Page";
// TODO @Grace: Lift this into a separate file
const placeholderProjects: ProjectPreviewProps[] = [
  {
    projectImage: PlaceholderImage,
    projectName: "Northern Triangle Migration Motivations",
    projectDate: "2023",
    projectDescription: "I did a project!",
  },
  {
    projectImage: PlaceholderImage,
    projectName: "Fritter",
    projectDate: "2022",
    projectDescription: "I did a project!",
  },
];
export const HomePage = () => {
  return (
    <>
      <section className={styles.intro}>
        <img
          className={styles.homeIntroDrawing}
          src={HomeIntroDrawing}
          alt={"Drawing of Grace!"}
        />
        <div className={styles.introText}>
          <p>Hi! I'm Grace, a senior at MIT studying</p>
          <p>Computer Science | Human Computer Interaction | Web Engineering</p>
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
