import {
  ProjectPreview,
  ProjectPreviewProps,
} from "../ProjectPreview/ProjectPreview";
import styles from "./ProjectGrid.module.css";
import { mainProjects } from "./mainProjects";

export type ProjectGridProps = {
  projects: ProjectPreviewProps[];
};

/**
 * 2 column project grid
 */
export const ProjectGrid = (props: ProjectGridProps) => {
  const projects = props.projects;

  return (
    <div className={styles.projectGrid}>
      {projects.map((project) => (
        <ProjectPreview {...project} />
      ))}
    </div>
  );
};

export const MainProjectGrid = () => {
  return <ProjectGrid projects={mainProjects} />;
};
