import React from "react";
import { useParams } from "react-router-dom";

export const ProjectPages = () => {
  let urlParams = useParams();

  const projectName = urlParams.projectName ?? "";
  console.log(urlParams);
  return <section>Looking for {projectName}</section>;
};
