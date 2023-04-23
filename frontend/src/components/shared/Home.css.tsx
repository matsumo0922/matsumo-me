import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";
import {appContainer, center} from "@/styles/system.css";

export const homeStyles = {
    container: style([
        appContainer,
        {
            marginTop: resources.spacing[4],
            marginBottom: resources.spacing[16],
        },
    ]),

    title: style({
        marginBottom: resources.spacing[8],
    }),

    linkToArticles: style([
        center,
        {
            marginTop: resources.spacing[12],
        },
    ]),
};