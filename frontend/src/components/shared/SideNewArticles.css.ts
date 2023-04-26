import {style} from "@vanilla-extract/css";
import {appContainer, center} from "@/styles/system.css";
import {resources} from "@/styles/resources.css";

export const sideNewArticlesStyle = style({
    width: "100%",
    aspectRatio: "0.5",
    background: "lightpink",
    borderRadius: resources.radius.md,
    boxShadow: resources.shadows.md,
});