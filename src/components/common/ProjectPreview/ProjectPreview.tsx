import styles from "./ProjectPreview.module.css";

export type ProjectPreviewProps = {
  projectImage: string;
  projectName: string;
  projectDate: string;
  projectDescription: string;
};

export const ProjectPreview = (props: ProjectPreviewProps) => {
  return (
    <div className={styles.projectPreview}>
      <img
        className={styles.projectImage}
        src={props.projectImage}
        alt={`${props.projectName} preview`}
      ></img>
      <h4 className={styles.projectName}>{props.projectName}</h4>
      <p className={styles.projectDate}>{props.projectDate}</p>
      <p className={styles.projectDescription}>{props.projectDescription}</p>
    </div>
  );
};
