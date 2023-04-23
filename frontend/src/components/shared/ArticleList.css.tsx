import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";
import {mediaQueries} from "@/styles/mediaQueries";

export const articleListStyle = style({
    display: "grid",
    gap: resources.spacing[6],
    gridTemplateColumns: `1fr`,

    "@media": {
        [mediaQueries.largerThan("md")]: {
            gridTemplateColumns: "1fr 1fr",
        },
    },
});
