import React from "react";
import { useParams } from "react-router-dom";
import { MigrationMotivationsPage } from "./pages/MigrationMotivationsPage";
import { FritterPage } from "./pages/FritterPage";
import { DataVisPage } from "./pages/DataVisPage";
import { ErrorMessage } from "../ErrorPage/ErrorPage";

export const ProjectPages = () => {
  let urlParams = useParams();

  const projectName = urlParams.projectName ?? "";
  let page;
  switch (projectName) {
    case "migration-motivations":
      page = <MigrationMotivationsPage />;
      break;
    case "data-vis-work":
      page = <DataVisPage />;
      break;
    case "fritter":
      page = <FritterPage />;
      break;
    default:
      page = <ErrorMessage />;
  }

  return page;
};
