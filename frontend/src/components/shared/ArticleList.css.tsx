import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";
import {mediaQueries} from "@/styles/mediaQueries";

export const articleListStyle = style({
    display: "grid",
    flexBasis: "70%",
    gap: resources.spacing[6],
    gridTemplateColumns: `1fr`,
});
