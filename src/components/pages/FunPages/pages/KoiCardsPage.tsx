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
        <p>
          I first really became cognizant of the fact that there could be
          customized playing cards when I received my first deck of Wolfram
          Alpha playing cards. Each card had a special graphic on it, as well as
          the corresponding Mathematica command that could be used to create the
          graphic shown on the card. I didn't think much of it at the time, but
          a few years later, partially through meeting a friend who really
          enjoyed collecting cards, I started delving more deeply into the world
          of playing cards.
        </p>
        <p>
          Seeing the vast array of different designs, from Theory 11's intricate
          [Royals deck ? idr what it's called] to crowd-funded decks like the
          Waves Deck and Shogun deck (include links), I became curious as to
          whether I could make some of my own designs.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Brainstorming</h3>
        <p>
          After a few months of debating what kind of deck I wanted to make, I
          remembered how enamored I was by the elegance of the Koi fish we had
          when I was younger. They not only have great significance in Asian
          culture, they also represented harmony and balance when presented in
          pairs, which I thought would fit in nicely on a deck of cards. With
          that motif in mind, I began researching the different types of Koi, as
          well as began sketching potential designs.
        </p>
      </section>
      <section className={Style.projectSection}>
        <h3>Process</h3>
        <p>
          I wanted to customize all of the cards, but most of all, I wanted to
          make the aces, face cards, and jokers special.
        </p>
      </section>
    </>
  );
};
