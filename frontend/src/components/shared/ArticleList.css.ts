import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";
import {mediaQueries} from "@/styles/mediaQueries";

export const articleListStyles = {
    content: style({
        display: "flex",
        flexFlow: "column",
        alignItems: "flex-start",
    }),

    header: style({
        height: resources.sizes[10],
        marginLeft: resources.spacing[6],
        fontSize: resources.fontSizes.xl,
        fontWeight: "bold",
        color: resources.colors.text.primary,
    }),

    list: style({
        display: "grid",
        flexBasis: "70%",
        gap: resources.spacing[6],
        gridTemplateColumns: `1fr`,
    }),
};
