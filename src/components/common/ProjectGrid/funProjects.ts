import { ProjectPreviewProps } from "../ProjectPreview/ProjectPreview";
import PlaceholderImage from "../../../assets/placeholder-background.png";
import KoiCardsImage from "../../../assets/project-previews/koi-cards-preview.png"
import SyncoImage from "../../../assets/project-previews/synco-preview.png"

export const funProjects: ProjectPreviewProps[] = [
    {
        projectImage: PlaceholderImage,
        projectName: "Mountain Lamp",
        projectDate: "2023",
        projectDescription:
            "I made a lamp over the spring semester of 2023!",
        projectRoute: "/fun/lamp",
    },
    {
        projectImage: SyncoImage,
        projectName: "MIT Syncopasian A Cappella",
        projectDate: "2021 –- Present",
        projectDescription: "Since joining Syncopasian, I’ve met amazing people, sung a multitude of J-Pop songs, and gotten to learn lots of cool skills (video editing, beatboxing, poster designing, music arranging, folding dumplings, etc).",
        projectRoute: "/fun/synco",
    },
    {
        projectImage: KoiCardsImage,
        projectName: "Koi Cards",
        projectDate: "2022",
        projectDescription: "In the summer of 2022, I finished designing and printing a completely custom set of playing cards themed around Koi fish!",
        projectRoute: "/fun/koi-cards",
    },
];