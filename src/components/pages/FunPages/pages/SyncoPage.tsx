import { ImageCarousel } from "../../../common/Carousel/ImageCarousel";
import Style from "../FunPages.module.css";
import CarouselStyle from "../../../common/Carousel/ImageCarousel.module.css";

import HeaderImage from "../../../../assets/project-previews/synco-preview.png";

export const SyncoPage = () => {
  return (
    <>
      <section className={Style.projectHeader}>
        <h2>Syncopasian</h2>
        <img src={HeaderImage} alt="Synco Preview"></img>
      </section>
      <section className={Style.projectSection}>
        <h3>Intro</h3>
        <p>
          After having sung for many years in various choirs, I knew I wanted to
          continue singing somehow in college. However, I didn't really know
          whether I wanted to continue singing in a choir setting or do
          something different. When I got to MIT though, I found out that it had
          a super vibrant a cappella culture. Through a stroke of good luck, I
          ended up in Syncopasian (affectionately called Synco), a group that
          focused on East Asian pop music.
        </p>
        <p>
          In the last 2.5 years of my time in Synco, I've met some of my closest
          friends at MIT, as well as learned skills I probably would not have
          learned otherwise, from video editing and arranging to beatboxing.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Video Editing</h3>
        <p>
          When I first joined Synco in the Spring of 2021, we were still mostly
          virtual because of COVID-19, which meant all of our rehearsals were
          over Zoom. In order to host our end-of-semester concert, as we
          normally did every semester, we decided to make music videos for all
          the songs we were learning over that Spring. Past the Spring, I was
          able to put together some more videos in the Summer.
        </p>
        <p>
          My first edited video was What a Wonderful World, which was edited
          using Adobe Premiere.
        </p>
        <iframe
          src="https://www.youtube.com/embed/AiXywdN0s_E"
          title="What A Wonderful World — MIT Syncopasian (Louis Armstrong)"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
        <p>
          My second video for Synco was Ghost Duet, a cute, short song that
          originally played on loop before our Spring concert started. We
          decided it would be nice to do an animation for it, so I drew
          everything from scratch and animated it in Adobe After Effects.
        </p>
        <iframe
          src="https://www.youtube.com/embed/_PWsngzVUmg"
          title="Ghost Duet (Louie Zong) – MIT Syncopasian A Cappella【⟡ healing 10 minute loop ⟡】"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
        <p>
          My last video for Synco so far was One Day More, a Summer project that
          allowed us to include a lot of Synco alumni as well, as everyone could
          send in recordings of themselves singing. I learned a ton about the
          workflow between After Effects and Premiere in the process of editing
          this video.
        </p>
        <iframe
          src="https://www.youtube.com/embed/o3x1--zIMAo"
          title="One Day More (Les Misérables) — MIT Syncopasian ft. Alumni"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen={true}
        ></iframe>
      </section>
      <section className={Style.projectSection}>
        <h3>Arranging</h3>
        <p>
          After my first semester in Synco, I started arranging music for the
          group. Most of our music (and pretty much all of our full-group songs)
          are arranged by current or previous Syncos (Syncopasian members), and
          in my time here, I got to learn from other super talented Syncos and
          to have some of my own arrangements performed. Some of the highlights
          include:
          <ul>
            <li>
              Haru No Tonari [Eri Sasaki]:{" "}
              <a
                href="https://www.youtube.com/watch?v=hNV54l5-r2A"
                target="_blank"
                rel="noreferrer"
                className="text-link"
              >
                https://www.youtube.com/watch?v=hNV54l5-r2A
              </a>
            </li>
            <li>Hard To Love [BlackPink]: Not yet uploaded</li>
            <li>
              Gira Gira [Ado]: Currently being live mixed from concert audio
            </li>
            <li>Gunjou [Yoasobi]: Currently being produced</li>
          </ul>
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Poster Design</h3>
        <p>
          Throughout my time in the group, I've also had the opportunity to
          design various pieces of publicity material, and though I don't come
          from any sort of design background, it's been really fun seeing my
          design skills and style evolve through the years.
        </p>
        <ImageCarousel>
          <div>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/synco/audition-poster-2023.png"
              alt="2023 Fall Audition Poster"
            />
            <div className={CarouselStyle.carouselCaption}>
              Audition Poster, 2023 Fall
            </div>
          </div>
          <div>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/synco/aphrodite-thumbnail.png"
              alt="Thumbnail for Aphrodite Music Video"
            />
            <div className={CarouselStyle.carouselCaption}>
              Thumbnail for Aphrodite Music Video, 2023 Spring
            </div>
          </div>
          <div>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/synco/quiescence-album-art.png"
              alt="Quiescence Album Art"
            />
            <div className={CarouselStyle.carouselCaption}>
              Quiescence Album Art, 2023 Spring
            </div>
          </div>
          <div>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/synco/concert-poster-2021.png"
              alt="2021 Spring Concert Poster"
            />
            <div className={CarouselStyle.carouselCaption}>
              Concert Poster, 2021 Spring
            </div>
          </div>
        </ImageCarousel>
      </section>
    </>
  );
};
