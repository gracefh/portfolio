import Style from "../FunPages.module.css";

export const LampPage = () => {
  return (
    <>
      <section className={Style.projectHeader}>
        <h2>Mountain Lamp</h2>
      </section>
      <section className={Style.projectSection}>
        <h3>Intro</h3>
        <p>
          Last winter, I was perusing classes to take in the Spring, and I
          happened upon MIT IDM's Digital Lamp
        </p>
      </section>
    </>
  );
};
