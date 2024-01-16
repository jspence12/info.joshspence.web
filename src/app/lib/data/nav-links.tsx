import LinkedIn from "../../../../public/LinkedIn";
import GitHub from "../../../../public/github-mark-white";
import NavRecord from "../models/nav-record";

export const records: NavRecord[] = [
  {
    href: "https://www.linkedin.com/in/joshua-spence-1835b8103/",
    image: LinkedIn(),
    altText: "LinkedIn",
    isDownload: false,
  },
  {
    href: "https://github.com/jspence12",
    image: GitHub(),
    altText: "Github",
    isDownload: true,
  },
];
