import { globalStyle } from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";

globalStyle("body", {
  lineHeight: 1.5,
  fontFamily: ["'Noto Sans JP'", "sans-serif"].join(","),
  color: resources.colors.text.primary,
  backgroundColor: resources.colors.background,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "inherit",
});

globalStyle("img", {
  maxWidth: "100%",
  height: "auto",
});
