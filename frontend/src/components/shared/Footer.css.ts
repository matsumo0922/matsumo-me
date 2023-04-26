import { style } from "@vanilla-extract/css";
import {appContainer} from "@/styles/system.css";
import {resources} from "@/styles/resources.css";

export const footerStyles = {
  footer: style([
    appContainer,
    {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: resources.spacing[8],
      paddingBottom: resources.spacing[8],
      gap: resources.spacing[2],
      color: resources.colors.text.secondary,
    },
  ]),

  description: style({
    fontSize: resources.fontSizes.sm,
  }),

  textLink: style({
    boxShadow: resources.focusRingShadow.before,
    transition: "box-shadow 0.2s",
    ":hover": {
      textDecoration: "underline",
    },
    ":focus-visible": {
      boxShadow: resources.focusRingShadow.after,
    },
  }),
};
