import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";
import {DARK_MODE_SELECTOR} from "@/styles/darkModeSelector";

import developerIcon from "@/components/resource/matsumo_icon.jpg";

export const aboutMeStyles = {
    content: style({
        display: "flex",
        flexFlow: "column",
        alignItems: "center",
        gap: resources.spacing[2],
        width: "100%",
        aspectRatio: "1",
        backgroundColor: resources.colors.gray[50],
        marginTop: resources.spacing[10],
        borderRadius: resources.radius.md,
        boxShadow: resources.shadows.md,

        [`${DARK_MODE_SELECTOR} &`]: {
            backgroundColor: resources.colors.gray[700],
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

    developerAboutContent: style({
        marginTop: resources.spacing[2],
        marginBottom: resources.spacing[3],
        marginLeft: resources.spacing[3],
        marginRight: resources.spacing[3],
    }),

    developerAbout: style({
        margin: resources.spacing[1],
        color: resources.colors.text.primary,
        fontSize: "0.9rem",
    }),

    contactContent: style({
        display: "flex",
        flexFlow: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: resources.spacing[2],
        marginBottom: resources.spacing[2],
        gap: resources.spacing[2],
    }),

    contactIconContent: style({
        display: "flex",
        width: resources.sizes[6],
        height: resources.sizes[6],
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        border: `1px ${resources.colors.text.secondary} solid`,
        transition: "background-color 0.2s",

        ":hover": {
            backgroundColor: resources.colors.gray[100],
        },

        selectors: {
            [`${DARK_MODE_SELECTOR} &:hover`]: {
                backgroundColor: resources.colors.gray[600],
            },
        },
    }),

    contactIcon: style({
        width: resources.sizes[3],
        height: resources.sizes[3],
        fill: resources.colors.text.secondary,
    }),

    contactLink: style({
       width: "100%",
       height: "100%",
    }),

    contentDivider: style({
        opacity: 0.6,
        border: 0,
        borderBottom: resources.borders[1],
        borderBottomColor: resources.colors.gray[200],
        width: "90%",

        selectors: {
            [`${DARK_MODE_SELECTOR} &`]: {
                borderBottomColor: resources.colors.whiteAlpha[300],
            },
        },
    }),
}
