import { FlexGrid } from "../layout/FlexGrid";
import Style from "./AboutPage.module.css";
import GraceFace from "../../assets/grace-face.jpg";

export const AboutPage = () => {
  return (
    <>
      <section>
        <h2>about me</h2>
        <FlexGrid columns={2}>
          <div className={Style.aboutImage}>
            <img src={GraceFace} alt={"Grace's Face"}></img>
          </div>
          <div className={Style.aboutContent}>
            <p>
              Hello! My name is Grace Huang, and I'm currently a senior and
              Master's student at MIT studying Computer Science. Through my time
              at MIT, I have become passionate about Human Computer Interaction,
              not only through taking courses like Intelligent Multimodal User
              Interfaces (6.8510), Interactive Data Visualization and Society
              (6.C85), and Software Studio (6.1040), but also through doing
              research in MIT's Visualization Group and interning.
              <br />
              <br />
              Outside of school, you can find me baking random desserts (and
              generally eating), singing a cappella @MIT Syncopasian, doodling
              on Procreate or any other writeable surface, or learning how to
              slackline!
            </p>
          </div>
        </FlexGrid>
      </section>
    </>
  );
};
