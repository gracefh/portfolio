import { NavLink } from "react-router-dom";
import styles from "./ProjectPreview.module.css";

export type ProjectPreviewProps = {
  projectImage: string;
  projectName: string;
  projectDate: string;
  projectDescription: string;
  projectRoute?: string; // project route will be `project/:projectRoute`
};

export const ProjectPreview = (props: ProjectPreviewProps) => {
  return (
    <div className={styles.projectPreview}>
      <NavLink to={props.projectRoute ?? ""}>
        <img
          className={styles.projectImage}
          src={props.projectImage}
          alt={`${props.projectName} preview`}
        ></img>
        <h3 className={styles.projectName}>{props.projectName}</h3>
        <p className={styles.projectDate}>{props.projectDate}</p>
        <p className={styles.projectDescription}>{props.projectDescription}</p>
      </NavLink>
    </div>
  );
};
