import Style from "../FunPages.module.css";
import HeaderImage from "../../../assets/project-previews/lamp-preview.png";
import { ImageCarousel } from "../../common/Carousel/ImageCarousel";
import CarouselStyle from "../../common/Carousel/ImageCarousel.module.css";

// images
import MoodBoard1 from "../../../assets/project-images/lamp/mood-board-1.png";
import MoodBoard2 from "../../../assets/project-images/lamp/mood-board-2.png";
import Sketch1 from "../../../assets/project-images/lamp/sketch-1.png";
import Lamp0 from "../../../assets/project-images/lamp/lamp-0.jpg";
import Lamp2 from "../../../assets/project-images/lamp/lamp-2.jpg";
import Lamp3 from "../../../assets/project-images/lamp/lamp-3.jpg";
import Lamp4 from "../../../assets/project-images/lamp/lamp-4.jpg";
import Lamp5 from "../../../assets/project-images/lamp/lamp-5.jpg";
import Other1 from "../../../assets/project-images/lamp/other-1.jpg";
import Other2 from "../../../assets/project-images/lamp/other-2.jpg";
import Other3 from "../../../assets/project-images/lamp/other-3.jpg";
import Other4 from "../../../assets/project-images/lamp/other-4.jpg";
import Other5 from "../../../assets/project-images/lamp/other-5.jpg";

export const LampPage = () => {
  return (
    <>
      <section className={Style.projectHeader}>
        <h2>Mountain Lamp</h2>
        <img src={HeaderImage} alt="Lamp Preview"></img>
      </section>
      <section className={Style.projectSection}>
        <h3>Introduction</h3>
        <p>
          Last winter, I was perusing classes to take in the Spring when I
          discovered that MIT's IDM (Integrated Design and Management) had a
          class involving building a lamp. I'd never built a lamp before, and I
          thought it would be cool to learn how to, so I registered for the
          class. I didn't know it at that time, but this would end up being one
          of my favorite classes from MIT.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Class Structure</h3>
        <p>
          Throughout the semester, our main goal was to design a lamp and create
          it, and in the process of doing so, learn a variety of different
          techniques for making things, from soldering to woodworking to
          casting. These skills were often presented to us in the first half of
          a 3 hour class, giving us ample time in the latter half to either
          practice or see how we could apply them to our own designs. The
          semester culminated in a presentation with all the members in the
          class, which allowed us to see the vast array of designs that people
          came up with.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>My Lamp</h3>
        <p>
          Like many other design-centric projects, the process of making the
          lamp started with brainstorming. I spent a while creating sketches, as
          well as making mood boards.
        </p>
        <ImageCarousel>
          <div>
            <img
              src={MoodBoard1}
              alt="Mountain lamp mood board"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Mood board for mountain lamp concept
            </div>
          </div>
          <div>
            <img
              src={MoodBoard2}
              alt="Koi lamp mood board"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Mood board for koi lamp concept
            </div>
          </div>
          <div>
            <img
              src={Sketch1}
              alt="Mountain lamp sketch"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Sketch for mountain lamp concept
            </div>
          </div>
        </ImageCarousel>
        <p>
          I had a few ideas in mind for my lamp, but something about seeing
          light pass through epoxy resin really resonated with me, so I decided
          to move forward with the mountain lamp concept.
        </p>
        <p>
          Over the next months, I worked towards this goal, creating prototypes
          and learning how to saw, solder a breadboard, chisel wood, do resin
          casting, buff and polish resin, and more. Here are various pictures
          from throughout the semester:
        </p>
        <ImageCarousel>
          <div>
            <img
              src={Lamp0}
              alt="Final lamp"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>Final lamp</div>
          </div>
          <div>
            <img
              src={Lamp2}
              alt="Lamp 2"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Prototype of mountains, used to make molds
            </div>
          </div>
          <div>
            <img
              src={Lamp3}
              alt="Lamp 3"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Resin poured in silicone mold
            </div>
          </div>
          <div>
            <img
              src={Lamp4}
              alt="Lamp 4"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Polished mountain, held up to a light
            </div>
          </div>
          <div>
            <img
              src={Lamp5}
              alt="Lamp 5"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Polished mountain, held up to the light used for the lamp
            </div>
          </div>
        </ImageCarousel>
        <p>
          By the end of the class, I wasn't quite done with my lamp, due to some
          unfortunate mishaps with resin pours, but I still had it mostly there,
          and it lit up! I hope to finish it at some point and maybe even polish
          it in the future by remaking it.
        </p>

        <p>
          To end, here's some other pictures of things I made during the course,
          as well as a set of coasters I made after the semester ended. This
          additional project was made possible because I had gained exposure to
          all of the tools required before the semester ended. The instructors
          were also super helpful throughout the entire semester, and being able
          to constantly bounce ideas off of them and get advice for the best
          ways to go about things definitely helped me become a better maker.
        </p>
        <ImageCarousel>
          <div>
            <img
              src={Other1}
              alt="Laser cut bookmarks"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Laser cut acrylic, with custom designs
            </div>
          </div>
          <div>
            <img
              src={Other2}
              alt="A mishap"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              A mishap with resin
            </div>
          </div>
          <div>
            <img
              src={Other3}
              alt="Coasters, 1"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Beginning stages of coasters
            </div>
          </div>
          <div>
            <img
              src={Other4}
              alt="Coasters, 2"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>
              Laser cutting coasters
            </div>
          </div>
          <div>
            <img
              src={Other5}
              alt="Coasters, 3"
              className={CarouselStyle.carouselImage}
            />
            <div className={CarouselStyle.carouselCaption}>Final coasters</div>
          </div>
        </ImageCarousel>
      </section>
    </>
  );
};
