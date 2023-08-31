import HeaderImage from "../../../assets/project-previews/data-vis-preview.png";
import { ImageCarousel } from "../../common/Carousel/ImageCarousel";
import Style from "../ProjectPages.module.css";
import CarouselStyle from "../../common/Carousel/ImageCarousel.module.css";
import { Link } from "../../common/Link/Link";

export const DataVisPage = () => {
  return (
    <>
      <section className={Style.projectHeader}>
        <h2>Data Visualization Work</h2>
        <img src={HeaderImage} alt="Data Visualization Work Preview"></img>
      </section>
      <section className={Style.projectSection}>
        <h3>Intro</h3>
        <p>
          My journey in HCI and data visualization has spanned the majority of
          my time in college. I hope to detail on this page a bit about how I
          have become more involved in data visualization work throughout this
          time and what I've learned in the process.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Haystack Group</h3>
        <p>
          In freshman and sophomore year, I worked on the Machine Learning
          Driven Clinical Documentation project in MIT CSAIL's Haystack Group as
          an undergraduate researcher. There, I was able to practice design
          thinking in the medical space, was exposed to D3.js, and got to create
          some visualizations. The images below include some of the work I got
          to do on this project.
        </p>
        <ImageCarousel>
          <div key={1}>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/data-vis/ml-doc-charting-1.png"
              alt=""
            />
          </div>
          <div key={2}>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/data-vis/ml-doc-charting-2.png"
              alt=""
            />
          </div>
        </ImageCarousel>
      </section>
      <section className={Style.projectSection}>
        <h3>Visualization Group</h3>
        <p>
          In junior year, I moved from MIT's Haystack Group to MIT's
          Visualization Group to work on Bluefish, a relational visualization
          grammar that allows for more user-extensibility and better reasoning
          about the relations within diagrams.
        </p>
        <p>
          Here, I've been contributing to the language by creating basic
          components as well as making example visualizations that have
          previously presented in other use cases.
        </p>
        <p>
          In the coming year, I will also be extending my research in this
          project to form my Master's Thesis, though my specific topic here has
          not been fully decided yet.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Interactive Data Visualization & Society</h3>
        <p>
          Having worked in the Visualization Group for a semester, I decided to
          take MIT's data visualization course, in order to become more
          acquainted with the overall field and to get more practice creating
          data visualizations, instead of mostly creating software to create
          visualizations. Here, I'll detail a bit about what I learned overall
          from the class and things I was able to create, though there also is a
          separate page just for{" "}
          <Link href="migration-motivations" className={"text-link"}>
            my final project
          </Link>
          .
        </p>
        <p>
          Because I was taking the graduate version of the course, beyond the
          normal course assignments, I also attended a weekly reading group.
          There, I was able to read many papers on data visualization ethics,
          which was extremely valuable, as I had not been exposed to many of the
          concepts before.
        </p>
        <p>
          Additionally, in the first half of the semester, we were able to
          complete multiple assignments and labs in order to both learn the
          design thinking process in terms of data visualization and get
          acquainted with useful tools for visualizing data, i.e. Tableau,
          D3.js, and Mapbox.
        </p>
        <p>
          Out of all the assignments we did, my favorite one was actually one
          about misinformation in data visualization and how easy it is to tell
          very different stories using the same piece of data. I think that
          creating 2 visualizations that try to tell 2 very different stories
          emphasized how important it is to be cognizant of the potential
          impacts of visualizations and of the ethical choices that people who
          create visualizations need to consider.
        </p>
        <ImageCarousel>
          <div>
            <img
              src="/images/data-vis/visualization_1.png"
              alt="Visualization 1"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Misinformation Assignment, Visualization 1
            </div>
          </div>
          <div>
            <img
              src="/images/data-vis/visualization_2.png"
              alt="Visualization 2"
              className={CarouselStyle.carouselImage}
            />
          </div>
          <div className={CarouselStyle.carouselCaption}>
            Misinformation Assignment, Visualization 2
          </div>
        </ImageCarousel>
      </section>
    </>
  );
};
