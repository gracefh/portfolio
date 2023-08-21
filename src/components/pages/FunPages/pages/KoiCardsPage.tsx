import Style from "../FunPages.module.css";
import HeaderImage from "../../../../assets/project-previews/koi-cards-preview.png";
// import { ImageCarousel } from "../../../common/Carousel/ImageCarousel";

export const KoiCardsPage = () => {
  return (
    <>
      <section className={Style.projectHeader}>
        <h2>Koi Cards</h2>
        <img src={HeaderImage} alt="Koi Cards Preview"></img>
      </section>
      <section className={Style.projectSection}>
        <h3>Intro</h3>
        <p></p>
      </section>
    </>
  );
};
