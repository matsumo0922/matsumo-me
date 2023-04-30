import { style } from "@vanilla-extract/css";
import { resources } from "@/styles/resources.css";
import {DARK_MODE_SELECTOR} from "@/styles/darkModeSelector";

export const tagLinkStyle = style({
  borderRadius: resources.radius.md,
  minWidth: resources.sizes[6],
  minHeight: resources.sizes[6],
  display: "inline-flex",
  alignItems: "center",
  textDecoration: "none",
  paddingTop: resources.spacing[1],
  paddingBottom: resources.spacing[1],
  paddingInlineStart: resources.spacing[2],
  paddingInlineEnd: resources.spacing[2],
  fontSize: resources.fontSizes.sm,
  fontWeight: 500,
  backgroundColor: resources.colors.primary[100],
  color: resources.colors.primary[800],
  lineHeight: 1.2,
  whiteSpace: "nowrap",
  zIndex: 1,

  ":hover": {
    textDecoration: "underline",
  },

  selectors: {
    [`${DARK_MODE_SELECTOR} &`]: {
      backgroundColor: resources.colors.primary[700],
      color: resources.colors.primary[200],
    },
  },
});
