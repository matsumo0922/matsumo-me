import { style } from "@vanilla-extract/css";
import { resources } from "@/styles/resources.css";

export const tagLinkStyle = style({
  borderRadius: resources.radius.md,
  minWidth: resources.sizes[6],
  minHeight: resources.sizes[6],
  display: "inline-flex",
  alignItems: "center",
  paddingInlineStart: resources.spacing[2],
  paddingInlineEnd: resources.spacing[2],
  fontSize: resources.fontSizes.sm,
  fontWeight: 500,
  backgroundColor: resources.colors.primary[100],
  color: resources.colors.primary[800],
  lineHeight: 1.2,
  verticalAlign: "top",
  boxShadow: resources.focusRingShadow.before,
  transition: "box-shadow 0.2s",
  ":focus-visible": {
    boxShadow: resources.focusRingShadow.after,
  },
  ":hover": {
    textDecoration: "underline",
  },
});
