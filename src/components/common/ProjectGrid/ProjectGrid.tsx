import {
  ProjectPreview,
  ProjectPreviewProps,
} from "../ProjectPreview/ProjectPreview";
import styles from "./ProjectGrid.module.css";

export type ProjectGridProps = {
  columns?: number;
  projects: ProjectPreviewProps[];
};

/**
 * N column project grid; if column property is not specified,
 * defaults to 2
 */
export const ProjectGrid = (props: ProjectGridProps) => {
  const projects = props.projects;
  const columns = props.columns ? props.columns : 2;
  const rows = [];

  for (let ind = 0; ind < projects.length; ind += columns) {
    rows.push(
      <div className={styles.projectGridRow}>
        {projects
          .slice(ind, ind + columns)
          .map((project) => project && <ProjectPreview {...project} />)}
      </div>
    );
  }
  return <div className={styles.projectGrid}>{rows}</div>;
};
