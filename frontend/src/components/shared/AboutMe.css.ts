import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";
import {DARK_MODE_SELECTOR} from "@/styles/darkModeSelector";

import developerIcon from "../resource/matsumo_icon.jpg";
import twitterIcon from "../resource/twitter.svg";
import githubIcon from "../resource/github.svg";
import googlePlayIcon from "../resource/google_play.svg";

export const aboutMeStyles = {
    content: style({
        display: "flex",
        flexFlow: "column",
        flexBasis: "30%",
        alignItems: "center",
        gap: resources.spacing[2],
        width: "100%",
        aspectRatio: "1",
        backgroundColor: resources.colors.gray[50],
        marginTop: resources.spacing[10],
        borderRadius: resources.radius.md,
        boxShadow: resources.shadows.md,

        selectors: {
            [`${DARK_MODE_SELECTOR} &`]: {
                backgroundColor: resources.colors.gray[700],
            },
            [`${DARK_MODE_SELECTOR} &:hover`]: {
                backgroundColor: resources.colors.gray[600],
            },
        },
    }),

    icon: style({
        width: resources.sizes[20],
        aspectRatio: "1",
        marginBottom: "-32px",
        borderRadius: "50%",
        backgroundSize: resources.sizes[20],
        backgroundImage: `url(${developerIcon.src})`,
        backgroundPosition: "center",
        border: resources.borders[2],
        transform: "translateY(-50%)",
    }),

    developmentDescription: style({
        width: "100%",
        color: resources.colors.text.secondary,
        fontSize: resources.fontSizes.xs,
        textAlign: "center",
    }),

    developerName: style({
        width: "100%",
        color: resources.colors.text.primary,
        fontSize: resources.fontSizes.xl,
        fontWeight: "bold",
        textAlign: "center",
    }),

    contactContent: style({
        display: "flex",
        flexFlow: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: resources.spacing[2],
    }),

    contactTwitter: style({
        width: resources.sizes[8],
        aspectRatio: "1",
        borderRadius: "50%",
        fill: resources.colors.text.secondary,
        backgroundSize: resources.sizes[8],
        backgroundImage: `url(${twitterIcon.src})`,
        backgroundPosition: "center",
        border: resources.borders[2],
    }),

    contentDivider: style({
        opacity: 0.6,
        border: 0,
        borderBottom: resources.borders[1],
        borderBottomColor: resources.colors.gray[200],
        width: "100%",
        marginTop: resources.spacing[2],
        marginBottom: resources.spacing[2],
        marginRight: resources.spacing[1],
        marginLeft: resources.spacing[1],

        selectors: {
            [`${DARK_MODE_SELECTOR} &`]: {
                borderBottomColor: resources.colors.whiteAlpha[300],
            },
        },
    }),
}
