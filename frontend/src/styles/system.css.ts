import { createVar, keyframes, style } from "@vanilla-extract/css";
import { resources } from "./resources.css";

export const appContainer = style({
  maxWidth: resources.containerMaxWidth,
  margin: "auto",
  paddingLeft: resources.spacing[4],
  paddingRight: resources.spacing[4],
});

export const wrapItems = style({
  display: "flex",
  flexWrap: "wrap",
  gap: resources.spacing[2],
});

export const vStack = style({
  display: "flex",
  flexDirection: "column",
  gap: resources.spacing[2],
});

export const hStack = style({
  display: "flex",
  flexDirection: "row",
  gap: resources.spacing[2],
});

export const center = style({
  display: "flex",
  justifyContent: "center",
});

const noOfLines = createVar();

export const lineClamp = {
  vars: {
    noOfLines,
  },
  style: style({
    display: "-webkit-box",
    WebkitLineClamp: noOfLines,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  }),
};

const skeletonAnimation = keyframes({
  "0%": {
    borderColor: resources.colors.gray[100],
    background: resources.colors.gray[100],
  },
  "100%": {
    borderColor: resources.colors.gray[400],
    background: resources.colors.gray[400],
  },
});

export const skeletonBase = style({
  animation: `0.8s linear infinite alternate ${skeletonAnimation}`,
  opacity: 0.7,
});

export const skeletonText = style([
  skeletonBase,
  {
    height: resources.sizes[2],
    borderRadius: resources.radius.xs,
  },
]);
