import {style} from "@vanilla-extract/css";
import {appContainer, center} from "@/styles/system.css";
import {resources} from "@/styles/resources.css";
import {mediaQueries} from "@/styles/mediaQueries";

export const sideBarStyle = style({
   maxWidth: resources.sideBarMaxWidth,
   display: "none",
   flexFlow: "column",
   alignItems: "flex-start",
   gap: resources.spacing[6],
   paddingTop: resources.spacing[2],
   paddingLeft: resources.spacing[8],

   "@media": {
      [mediaQueries.largerThan("md")]: {
         display: "flex",
      },
   },
});
