import Style from "../ProjectPages.module.css";
import CarouselStyle from "../../common/Carousel/ImageCarousel.module.css";
import HeaderImage from "../../../assets/project-previews/fritter-preview.png";
import ActivitySketch from "../../../assets/fritter/fritter-activity-sketch.jpg";
import GroupsSketch from "../../../assets/fritter/fritter-groups-sketch.jpg";
import { Link } from "../../common/Link/Link";
import { ImageCarousel } from "../../common/Carousel/ImageCarousel";

export const FritterPage = () => {
  return (
    <>
      <section className={Style.projectHeader}>
        <h2>Fritter</h2>
        <div>
          <Link
            href="https://61040-fa22.github.io/portfolio-gracefh/"
            className="text-link"
          >
            https://61040-fa22.github.io/portfolio-gracefh/
          </Link>
        </div>
        <img src={HeaderImage} alt="Fritter Preview"></img>
      </section>
      <section className={Style.projectSection}>
        <h3>Intro</h3>
        <p>
          In the 2022 Fall semester, I took Software Studio (6.1040), a class
          about software design. Incidentally, this was the first HCI course I
          took at MIT, and I will also be a TA for this class in the coming
          semester. Our main project for the first half of the semester was
          Fritter, which aimed to teach design thinking skills through analyzing
          Twitter (now X), coming up with potential design improvements, and
          eventually coding a website with said improvements.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Analysis & Critique</h3>
        <p>
          Our design process began with analyzing and critiquing Twitter through
          evaluating it using a Value Sensitive Design framework, as well as
          interviewing people who used Twitter. Some of my biggest takeaways
          there included learning how to critically evaluate tools from multiple
          lenses and how to interview users effectively. The writeup can be
          found{" "}
          <Link
            href="https://61040-fa22.github.io/portfolio-gracefh/2022/09/18/assignment-1.html"
            className="text-link"
          >
            here
          </Link>
          .
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Ideation</h3>
        <p>
          From there, we went through multiple steps of ideation, which involved
          brainstorming many potential concepts to include in our product,
          before refining our designs and narrowing down the scope of our
          concepts.
        </p>
        <p>
          We sketched out various designs while creating our concepts as well.
          The following images are two sketches that I made in this process.
        </p>
        <ImageCarousel>
          <div>
            <img
              src={ActivitySketch}
              alt="Activity Monitor sketch"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              A sketch of an Activity Monitor concept for Fritter
            </div>
          </div>
          <div>
            <img
              src={GroupsSketch}
              alt="Groups sketch"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              A sketch of a Groups concept for Fritter
            </div>
          </div>
        </ImageCarousel>
        <p>
          With our refined concepts, we used Figma to create{" "}
          <Link
            href="https://www.figma.com/file/oVSfpQCesAcDXHyO50KCKe/grace-huang-fritter-wireframes?node-id=0%3A1"
            className="text-link"
          >
            wireframes
          </Link>
          . More in-depth analysis can be found{" "}
          <Link
            href="https://61040-fa22.github.io/portfolio-gracefh/2022/10/07/assignment-3-revision.html"
            className="text-link"
          >
            here
          </Link>
          .
        </p>
        <div style={{ textAlign: "center" }}>
          <iframe
            style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FoVSfpQCesAcDXHyO50KCKe%2Fgrace-huang-fritter-wireframes%3Fnode-id%3D0%253A1"
            allowFullScreen={true}
            title="Fritter wireframes"
          ></iframe>
        </div>
      </section>
      <section className={Style.projectSection}>
        <h3>Coding</h3>
        <p>
          When the ideation phase was complete, I started coding the site
          itself, which involved both backend and frontend development. Because
          of time constraints, it definitely was not perfect by any means, but I
          learned a lot about various parts of the full stack development
          process. Particularly, I learned how to use the REST framework to
          create request handlers, as well as learned how to use Vue. The final
          website can be found here:{" "}
          <Link
            href="https://61040-fa22-fritter-frontend-7pvph2peh-gracefh.vercel.app/#/"
            className="text-link"
          >
            https://61040-fa22-fritter-frontend-7pvph2peh-gracefh.vercel.app/#/
          </Link>
        </p>
      </section>
    </>
  );
};
