import {style} from "@vanilla-extract/css";
import {appContainer, center} from "@/styles/system.css";
import {resources} from "@/styles/resources.css";

export const sideBarStyle = style({
   display: "flex",
   flexFlow: "column",
   flexBasis: "30%",
   alignItems: "flex-start",
   gap: resources.spacing[4],
   paddingLeft: resources.spacing[8],
   paddingRight: resources.spacing[4],
});