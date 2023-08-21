import Style from "../ProjectPages.module.css";
import HeaderImage from "../../../../assets/project-previews/mmdt-preview.png";
import { FlexGrid } from "../../../layout/grids/FlexGrid/FlexGrid";
import { ImageCarousel } from "../../../common/Carousel/ImageCarousel";

export const MigrationMotivationsPage = () => {
  return (
    <>
      <section className={Style.projectHeader}>
        <h2>Central American Migration Motivations</h2>
        <img
          src={HeaderImage}
          alt="Central American Migration Motivations Preview"
        ></img>
      </section>
      <section className={Style.projectSection}>
        <h3>Intro</h3>
        <p>
          I took MIT's Interactive Data Visualization and Society course (6.c85)
          in the spring semester of 2023. For the class, our final project
          involved creating an interactive data visualization using information
          surveyed by the World Food Program (WFP) about food security, income,
          and migration of residents of Guatemala, El Salvador, and Honduras.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Process</h3>
        <p>
          We first got acquainted with the dataset through an individual process
          of exploring the data, where we formed our own questions based on
          context given about the dataset and created a set of data
          visualizations and analysis to investigate said questions. I cleaned
          some parts of the dataset and created data visualizations mainly
          through Tableau.
        </p>
        <ImageCarousel>
          <div key={1}>
            <img
              className={Style.carouselImage}
              src="/images/mmdt/department_migrating_to.png"
              alt=""
            />
          </div>
          <div key={2}>
            <img
              className={Style.carouselImage}
              src="/images/mmdt/funding_and_debt_sources.png"
              alt=""
            />
          </div>
          <div key={3}>
            <img
              className={Style.carouselImage}
              src="/images/mmdt/internal_migration_and_departments.png"
              alt=""
            />
          </div>
        </ImageCarousel>
        <p>
          After an individual assignment to explore the data that the WFP
          collected, we formed groups of 3 and went through multiple stages of
          iteration to produce a final visualization. After initial
          brainstorming sessions, we decided to create a scrolly-telling
          visualization looking at the motivations behind why people decide to
          migrate.
        </p>
        <p>
          Within the group, I worked mainly on wireframing and coding, working
          on all of the visualizations and code except for the third
          visualization. I mainly used D3.js for the visualizations I created,
          as well as Svelte for the overall website.
        </p>
      </section>
    </>
  );
};
