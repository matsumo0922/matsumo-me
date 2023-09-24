import { style } from "@vanilla-extract/css";
import { appContainer, center, vStack, wrapItems } from "@/styles/system.css";
import {resources} from "@/styles/resources.css";
import {DARK_MODE_SELECTOR} from "@/styles/darkModeSelector";

export const privacyPolicyStyles = {
    container: style([
        appContainer,
        {
            marginTop: resources.spacing[4],
            marginBottom: resources.spacing[16],
        },
    ]),

    privacyPolicyHeader: style([
        vStack,
        {
            gap: resources.spacing[8],
        },
    ]),

    privacyPolicyTitle: style({
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

        selectors: {
            [`${DARK_MODE_SELECTOR} &`]: {
                borderBottomColor: resources.colors.whiteAlpha[300],
            },
        },
    }),

    privacyPolicyInfo: style([
        vStack,
        {
            gap: resources.spacing[1],
        },
    ]),

    privacyPolicyDescription: style({
        fontSize: resources.fontSizes.sm,
        color: resources.colors.text.secondary,
    }),

    tags: style([
        wrapItems,
        {
            listStyle: "none",
        },
    ]),

    privacyPolicyContent: style({
        marginBottom: resources.spacing[16],
    }),
};
