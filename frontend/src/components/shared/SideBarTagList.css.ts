import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";
import {DARK_MODE_SELECTOR} from "@/styles/darkModeSelector";

export const sideBarTagListStyles = {
    content: style({
        display: "flex",
        flexFlow: "column",
        gap: resources.spacing[2],
        width: "100%",
        paddingTop: resources.spacing[3],
        paddingBottom: resources.spacing[3],
        backgroundColor: resources.colors.gray[50],
        borderRadius: resources.radius.md,
        boxShadow: resources.shadows.md,

        [`${DARK_MODE_SELECTOR} &`]: {
            backgroundColor: resources.colors.gray[700],
        },
    }),

    header: style({
        paddingRight: resources.spacing[4],
        paddingLeft: resources.spacing[4],
        fontSize: resources.fontSizes.md,
        color: resources.colors.text.primary,
    }),

    list: style({
        display: "flex",
        flexFlow: "column",
        gap: resources.spacing[1],
    }),

    item: style({
        listStyle: "none",
        paddingRight: resources.spacing[4],
        paddingLeft: resources.spacing[4],
        color: resources.colors.text.secondary,
        fontSize: resources.fontSizes.md,

        ":hover": {
            textDecoration: "underline",
        },
    }),

    divider: style({
        borderBottom: resources.borders[1],
        borderBottomColor: resources.colors.gray[200],
    }),

    contentDivider: style({
        opacity: 0.6,
        border: 0,
        borderBottom: resources.borders[1],
        borderBottomColor: resources.colors.gray[200],
        textAlign: "center",
        margin: "auto",
        width: "90%",

        selectors: {
            [`${DARK_MODE_SELECTOR} &`]: {
                borderBottomColor: resources.colors.whiteAlpha[300],
            },
        },
    }),
}
