import HeaderImage from "../../../../assets/project-previews/mmdt-preview.png";
import { ImageCarousel } from "../../../common/Carousel/ImageCarousel";
import { Link } from "../../../common/Link/Link";

import Style from "../ProjectPages.module.css";
import CarouselStyle from "../../../common/Carousel/ImageCarousel.module.css";

export const MigrationMotivationsPage = () => {
  return (
    <>
      <section className={Style.projectHeader}>
        <h2>Central American Migration Motivations</h2>
        <div>
          <Link href="https://migration-mdt.vercel.app/" className="text-link">
            https://migration-mdt.vercel.app/
          </Link>
        </div>
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
        <p>
          Within the group, I worked mainly on wireframing and coding, working
          on all of the visualizations and code except for the third
          visualization. I mainly used D3.js for the visualizations I created,
          as well as Svelte for the overall website.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Brainstorming</h3>
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
              className={CarouselStyle.carouselImage}
              src="/images/mmdt/department_migrating_to.png"
              alt=""
            />
          </div>
          <div key={2}>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/mmdt/funding_and_debt_sources.png"
              alt=""
            />
          </div>
          <div key={3}>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/mmdt/internal_migration_and_departments.png"
              alt=""
            />
          </div>
        </ImageCarousel>
        <p>
          After an individual assignment to explore the data that the WFP
          collected, we formed groups of 3 and went through multiple stages of
          iteration to produce a final visualization. After initial
          brainstorming sessions, we decided to create a Scrollytelling
          visualization looking at the motivations behind why people decide to
          migrate. The decision to implement Scrollytelling was because we
          wanted to promote exploration of the data while still providing
          readers with a certain amount of guidance through the data, in order
          to allow the information to be more accessible.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Wireframes</h3>
        <p>
          Having decided on our topic for our final project, we started
          brainstorming what we wanted the visualization to actually look like.
          We took inspiration from various visualizations, from a{" "}
          <a
            href="https://benjerry.heshlindsdataviz.com/"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            data visualization
          </a>{" "}
          about Ben & Jerry's ice cream flavors to{" "}
          <a
            href="https://www.nytimes.com/interactive/2022/10/20/upshot/biden-budget-before-after-animation.html"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            NYT's analysis
          </a>{" "}
          of Biden's legislative agenda.
        </p>
        <p>
          We wanted to design the visualizations to communicate that the data is
          surveyed from individual people, each with their own stories and
          backgrounds. In order to do so, for the first two visualizations, we
          represented each surveyed response as an individual dot on the screen.
        </p>
        <iframe
          style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
          // width="800"
          // height="450"
          title="Project Wireframes"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FdGABJoUftUrtMTv0EmFuJM%2FWireframes%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DiWP42QLp5r4VMO4a-1"
          allowFullScreen={true}
        ></iframe>
      </section>
      <section className={Style.projectSection}>
        <h3>Implementation</h3>
        <p>
          As briefly mentioned previously, the site was created using Svelte,
          and the visualizations I worked on used D3.js. The following images
          offer a look at the various parts of the site.
        </p>
        <ImageCarousel>
          <div key={1}>
            <img
              className={Style.carouselImage}
              src="/images/mmdt/impl-1.png"
              alt=""
            />
          </div>
          <div key={2}>
            <img
              className={Style.carouselImage}
              src="/images/mmdt/impl-2.png"
              alt=""
            />
          </div>
          <div key={3}>
            <img
              className={Style.carouselImage}
              src="/images/mmdt/impl-3.png"
              alt=""
            />
          </div>
        </ImageCarousel>
        <p>
          Additionally, here is a look at the interactions that occur when a
          user scrolls.
        </p>
        <div>
          <video
            className={Style.video}
            controls={true}
            title={"Scrolling Replay"}
          >
            <source src="/images/mmdt/impl-recording.mov" />
          </video>
        </div>
      </section>
      <section className={Style.projectSection}>
        <h3>Learnings</h3>
        <p>
          From the project, I gained a lot more in-depth knowledge of
          scrollytelling as a means to portray data and about how to create
          interactive data visualizations that are both <i>compelling</i> and{" "}
          <i>engaging</i> for readers.
        </p>
        <p>
          I also learned a lot from my group mates, who both had somewhat
          different backgrounds from me. As someone who mostly specialized in
          the programming portion, I learned a lot about cleaning and working
          with data from my teammate who was studying Data Science at grad
          school. Both of my teammates also helped a ton on constructing the
          writing for the visualization, something that I also was less
          experienced in.
        </p>
        <p>
          Lastly, by being able to delve in-depth into real-world data, I gained
          a lot of perspective into the reasons why people living in El
          Salvador, Honduras, and Guatemala might want to migrate. And by being
          able to examine this data, talking with some professionals who
          collected and work with this data, and reading various papers
          throughout the semester on the ethics of data visualization, I learned
          a lot about the importance of presenting data in order to amplify the
          voices of those who were surveyed.
        </p>
      </section>
    </>
  );
};
