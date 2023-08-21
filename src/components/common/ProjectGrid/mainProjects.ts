import { ProjectPreviewProps } from "../ProjectPreview/ProjectPreview";
import MigrationMotivationsImage from "../../../assets/project-previews/mmdt-preview.png"
import DataVisImage from "../../../assets/project-previews/data-vis-preview.png"
import FritterImage from "../../../assets/project-previews/fritter-preview.png"

export const mainProjects: ProjectPreviewProps[] = [
    {
        projectImage: MigrationMotivationsImage,
        projectName: "Central American Migration Motivations",
        projectDate: "2023",
        projectDescription:
            "Explored the economic motives behind Central American migration to the US through the use of a scrollytelling data visualization, built using Svelte and D3.js",
        projectRoute: "/projects/migration-motivations"
    },
    {
        projectImage: DataVisImage,
        projectName: "Data Visualization Work",
        projectDate: "2021 –– Present",
        projectDescription: "Some examples of other work I’ve done in the data visualization field in the last few years, from medical chart graphing and research work to exploration with Tableau, etc.",
        projectRoute: "/projects/data-vis-work"
    },
    {
        projectImage: FritterImage,
        projectName: "Fritter",
        projectDate: "2022",
        projectDescription: "An independent class project that spanned a large portion of a semester, which involved going through all stages of the design thinking and was my first time using Figma.",
        projectRoute: "/projects/fritter"
    },
];