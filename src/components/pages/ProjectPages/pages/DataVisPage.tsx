import { NavLink, Route } from "react-router-dom";
import HeaderImage from "../../../../assets/project-previews/data-vis-preview.png";
import { ImageCarousel } from "../../../common/Carousel/ImageCarousel";
import Style from "../ProjectPages.module.css";
import CarouselStyle from "../../../common/Carousel/ImageCarousel.module.css";

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
          Visualization Group to work on Bluefish.
          <b>[FINISH]</b>
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
          separate page just for my final project{" "}
          <a href="migration-motivations" className={"text-link"}>
            here
          </a>
          .
        </p>
      </section>
    </>
  );
};
