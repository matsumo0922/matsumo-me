import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";

export const articleCardStyles = {
    card: style({
        display: "flex",
        flexDirection: "column",
        position: "relative",
        backgroundColor: resources.colors.gray[100],
        borderRadius: resources.radius.md,
        boxShadow: resources.shadows.md,
        padding: `${resources.spacing[4]} ${resources.spacing[6]}`,
        transition: "box-shadow 0.2s",

        ":hover": {
            boxShadow: resources.shadows.lg,
        }
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
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
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