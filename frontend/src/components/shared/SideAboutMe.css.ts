import {style} from "@vanilla-extract/css";
import {appContainer, center} from "@/styles/system.css";
import {resources} from "@/styles/resources.css";

export const sideAboutMeStyle = style({
    width: "100%",
    aspectRatio: "1",
    background: "lightblue",
    borderRadius: resources.radius.md,
    boxShadow: resources.shadows.md,
});