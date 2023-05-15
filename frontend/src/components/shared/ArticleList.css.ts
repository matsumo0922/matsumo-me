import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";
import {mediaQueries} from "@/styles/mediaQueries";

export const articleListStyles = {
    content: style({
        display: "flex",
        flexFlow: "column",
        width: "100%",
        alignItems: "flex-start",
    }),

    header: style({
        height: resources.sizes[10],
        marginBottom: resources.spacing[2],
        marginLeft: resources.spacing[6],
        fontSize: resources.fontSizes.xl,
        fontWeight: "bold",
        color: resources.colors.text.primary,
    }),

    list: style({
        display: "flex",
        flexFlow: "column",
        width: "100%",
        gap: resources.spacing[6],
    }),
};
