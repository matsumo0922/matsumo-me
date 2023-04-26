import {appContainer} from "@/styles/system.css";
import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";
import {mediaQueries} from "@/styles/mediaQueries";

export const headerStyles = {
    root: style({
        position: "sticky",
        top: 0,
        zIndex: 99,
        backdropFilter: "blur(8px)",
    }),

    header: style([
        appContainer,
        {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: resources.spacing[2],
            paddingBottom: resources.spacing[2],
        },
    ]),

    logoLink: style({
        lineHeight: 0,
        boxShadow: resources.focusRingShadow.before,
        ":focus-visible": {
            boxShadow: resources.focusRingShadow.after,
        },
    }),

    logoLinkImage: style({
        width: "auto",
        height: resources.sizes[12],
        "@media": {
            [mediaQueries.largerThan("sm")]: {
                height: resources.sizes[14],
            },
            [mediaQueries.largerThan("md")]: {
                height: resources.sizes[16],
            },
        },
    }),

    navigations: style({
        display: "flex",
        alignItems: "center",
        gap: resources.spacing[3],
    }),

    navigationLink: style({
        display: "none",
        color: "black",
        fontWeight: "bold",
        textDecoration: "none",
        boxShadow: resources.focusRingShadow.before,
        transition: "box-shadow 0.2s",

        ":hover": {
            textDecoration: "underline",
        },

        ":focus-visible": {
            boxShadow: resources.focusRingShadow.after,
        },

        "@media": {
            [mediaQueries.largerThan("md")]: {
                display: "inline",
            },
        },
    }),
};
