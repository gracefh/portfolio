import { MainProjectGrid } from "../../common/ProjectGrid/ProjectGrid";
import Style from "./ProjectsPage.module.css";

export const ProjectsPage = () => {
  return (
    <>
      <section>
        <div className={"page-intro"}>
          <h2>projects</h2>
          <p> </p>
        </div>
        <MainProjectGrid />
      </section>
    </>
  );
};
