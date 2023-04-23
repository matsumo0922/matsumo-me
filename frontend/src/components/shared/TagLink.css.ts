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
  lineHeight: 1.2,
  backgroundColor: resources.colors.gray[300],
  color: resources.colors.gray[800],
  whiteSpace: "nowrap",
});
