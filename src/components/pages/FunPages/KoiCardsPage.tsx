import Style from "../FunPages.module.css";
import CarouselStyle from "../../common/Carousel/ImageCarousel.module.css";
import HeaderImage from "../../../assets/project-previews/koi-cards-preview.png";
import { ImageCarousel } from "../../common/Carousel/ImageCarousel";
import { FlexGrid } from "../../layout/grids/FlexGrid/FlexGrid";

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
          I didn't really realize that playing cards could be customized until I
          received my first deck of Wolfram Alpha playing cards during my
          freshman year of high school. Each card had a special graphic on it,
          as well as the corresponding Mathematica command that could be used to
          create the graphic shown on the card. I didn't think much of it at the
          time, but a few years later, partially through meeting a friend who
          really enjoyed collecting cards, I started delving more deeply into
          the world of playing cards.
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
        <h3>Sketching</h3>
        <p>
          I wanted to customize all of the cards, but most of all, I wanted to
          make the aces, face cards, and jokers special. I started by creating a
          multitude of sketches, trying to explore possible designs.
        </p>
        <FlexGrid columns={3}>
          <div className={Style.flexItem}>
            <img
              src="/images/koi-cards/koi-cards-sketch-ace-spades.png"
              alt="Ace of Spades sketch"
            />
            <div className={Style.caption}>Ace of Spades sketch</div>
          </div>
          <div className={Style.flexItem}>
            <img
              src="/images/koi-cards/koi-cards-sketch-back-1.png"
              alt="Card back sketch"
            />
            <div className={Style.caption}>Card back sketch</div>
          </div>
          <div className={Style.flexItem}>
            <img
              src="/images/koi-cards/koi-cards-sketch-face-1.png"
              alt="Face card sketch"
            />
            <div className={Style.caption}>Face card sketch</div>
          </div>
        </FlexGrid>
      </section>
      <section className={Style.projectSection}>
        <h3>Vectorizing</h3>
        <p>
          A few months after I began sketching, I finally felt ready to finalize
          my designs. For this, I chose to use Illustrator, as I thought it
          would make a cleaner design, which was something I really wanted this
          deck to have.
        </p>
        <p>
          Also, as a person who almost exclusively has her computer and devices
          in dark mode, I really wanted to make an alternative version of the
          deck too, with a darker and more minimalistic color palette
        </p>
        <p>
          The below images show the final vectorized versions of some of the
          cards.
        </p>
        <ImageCarousel>
          <div>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/koi-cards/koi-cards-aces.png"
              alt="Aces"
            />
            <div className={CarouselStyle.carouselCaption}>
              Vectorized Aces for each suit
            </div>
          </div>
          <div>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/koi-cards/koi-cards-both-backs.png"
              alt="Card backs"
            />
            <div className={CarouselStyle.carouselCaption}>
              Card backs, light and dark versions
            </div>
          </div>
          <div>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/koi-cards/koi-cards-face-hearts.png"
              alt="Heart suit face cards"
            />
            <div className={CarouselStyle.carouselCaption}>
              Card backs, light and dark versions
            </div>
          </div>
        </ImageCarousel>
      </section>
      <section className={Style.projectSection}>
        <h3>Printing</h3>
        <p>
          While I was finalizing the designs of the cards, I also started
          thinking about how I would actually print them. During this process, I
          learned a ton about different types of card stocks and options for
          customization.
        </p>
        <p>
          Ideally at some point, I want to actually be able to produce these in
          bigger batches and to raise some funding for them, but for now, I
          decided to order 4 decks, just to see how they looked like. The
          picture at the top of the page are the two jokers from the dark
          version of the deck, and the pictures below are some additional photos
          of the cards.
        </p>
        <ImageCarousel>
          <div>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/koi-cards/koi-cards-printed-all-boxes.jpeg"
              alt="Printed card boxes"
            />
            <div className={CarouselStyle.carouselCaption}>
              Printed card boxes
            </div>
          </div>
          <div>
            <img
              className={CarouselStyle.carouselImage}
              src="/images/koi-cards/koi-cards-printed-back-dark.jpeg"
              alt="Printed dark card back"
            />
            <div className={CarouselStyle.carouselCaption}>
              Printed card back, dark version
            </div>
          </div>
        </ImageCarousel>
        <p>
          There are definitely some things I want to change in the future before
          looking into crowdfunding some sort of actual release, but this
          project has been a super great opportunity to practice designing, and
          it was also really fulfilling to actually get my hands on the decks
          themselves.
        </p>
      </section>
    </>
  );
};
