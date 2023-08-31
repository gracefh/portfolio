import React from "react";
import { useParams } from "react-router-dom";
import { KoiCardsPage } from "./pages/KoiCardsPage";
import { SyncoPage } from "./pages/SyncoPage";
import { LampPage } from "./pages/LampPage";
import { ErrorMessage } from "../ErrorPage";

export const FunPages = () => {
  let urlParams = useParams();

  const projectName = urlParams.projectName ?? "";
  let page;
  switch (projectName) {
    case "koi-cards":
      page = <KoiCardsPage />;
      break;
    case "lamp":
      page = <LampPage />;
      break;
    case "synco":
      page = <SyncoPage />;
      break;
    default:
      page = <ErrorMessage />;
  }

  return page;
};
