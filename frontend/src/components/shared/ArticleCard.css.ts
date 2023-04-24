import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";

export const articleCardStyles = {
    card: style({
        display: "flex",
        flexDirection: "column",
        backgroundColor: resources.colors.gray[100],
        borderRadius: resources.radius.md,
        boxShadow: resources.shadows.md,
        padding: `${resources.spacing[4]} ${resources.spacing[6]}`,
    }),

    publishedAt: style({
        color: resources.colors.text.secondary,
        fontSize: resources.fontSizes.sm,
    }),

    title: style({
        flex: 1,
        marginTop: resources.spacing[4],
    }),

    titleLink: style({
        display: "block",
        lineHeight: 1.6,
        fontSize: resources.fontSizes.lg,
        fontWeight: 500,
        color: resources.colors.text.primary,
        boxShadow: resources.focusRingShadow.before,
        transition: "box-shadow 0.2s",

        ":hover": {
            textDecoration: "underline",
        },
        ":focus-visible": {
            boxShadow: resources.focusRingShadow.after,
        },
    }),

    resourceTagRoot: style({
        display: "flex",
        alignContent: "center",
        gap: resources.spacing[2],
        marginTop: resources.spacing[4],
    }),

    tags: style({
        display: "flex",
        flexWrap: "wrap",
        listStyle: "none",
        gap: resources.spacing[2],
        marginTop: resources.spacing[4],
    }),

    resourceLink: style({
        display: "flex",
        width: "fit-content",
        alignItems: "center",
        gap: resources.spacing[2],
        boxShadow: resources.focusRingShadow.before,
        transition: "box-shadow 0.2s",
        ":hover": {
            textDecoration: "underline",
        },
        ":focus-visible": {
            boxShadow: resources.focusRingShadow.after,
        },
    }),
}