import { style } from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";

export const pageTitleStyle = style({
  lineHeight: 1.6,
  fontFamily: resources.fontFamilies.heading,
  fontWeight: "bold",
  fontSize: resources.fontSizes["2xl"],
});
