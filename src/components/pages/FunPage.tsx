import { FunProjectGrid } from "../common/ProjectGrid/ProjectGrid";

export const FunPage = () => {
  return (
    <>
      <section>
        <div className={"page-intro"}>
          <h2>fun</h2>
          <p>my side quests!</p>
        </div>
        <FunProjectGrid />
      </section>
    </>
  );
};
