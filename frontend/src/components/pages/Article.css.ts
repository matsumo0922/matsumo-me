import { style } from "@vanilla-extract/css";
import { appContainer, center, vStack, wrapItems } from "@/styles/system.css";
import {resources} from "@/styles/resources.css";

export const articleStyles = {
    container: style([
        appContainer,
        {
            marginTop: resources.spacing[4],
            marginBottom: resources.spacing[16],
        },
    ]),

    articleHeader: style([
        vStack,
        {
            gap: resources.spacing[8],
        },
    ]),

    articleTitle: style({
        fontWeight: "bold",
        fontSize: resources.fontSizes["2xl"],
        lineHeight: 1.6,
    }),

    contentDivider: style({
        opacity: 0.6,
        border: 0,
        borderBottom: resources.borders[1],
        borderBottomColor: resources.colors.gray[200],
        width: "100%",
        marginTop: resources.spacing[8],
        marginBottom: resources.spacing[8],
    }),

    dateTimes: style([
        vStack,
        {
            gap: resources.spacing[1],
        },
    ]),

    datetime: style({
        fontSize: resources.fontSizes.sm,
        color: resources.colors.text.secondary,
    }),

    tags: style([
        wrapItems,
        {
            listStyle: "none",
        },
    ]),

    articleContent: style({
        marginBottom: resources.spacing[16],
    }),

    adsense: style({
        marginBottom: resources.spacing[16],
    }),

    externalLinks: style({
        marginBottom: resources.spacing[16],
    }),

    shareButtons: wrapItems,

    githubLink: style({
        display: "inline-flex",
        alignItems: "center",
        gap: resources.spacing[2],
        color: resources.colors.text.secondary,
        marginTop: resources.spacing[6],
        boxShadow: resources.focusRingShadow.before,
        transition: "box-shadow 0.2s",
        ":focus-visible": {
            boxShadow: resources.focusRingShadow.after,
        },
    }),

    githubIcon: style({
        fontSize: resources.fontSizes["2xl"],
    }),

    linkToArticles: center,
};
