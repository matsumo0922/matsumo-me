import {resources} from "@/styles/resources.css";
import {DARK_MODE_SELECTOR} from "@/styles/darkModeSelector";
import {style} from "@vanilla-extract/css";

export const iconButtonStyle = style({
    display: "inline-flex",
    width: resources.sizes[10],
    height: resources.sizes[10],
    fontSize: resources.fontSizes["2xl"],
    border: "none",
    borderRadius: resources.radius.md,
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    transition: "background-color 0.2s",

    ":hover": {
        backgroundColor: resources.colors.blackAlpha[100],
    },

    selectors: {
        [`${DARK_MODE_SELECTOR} &:hover`]: {
            backgroundColor: resources.colors.whiteAlpha[200],
        },
    },
});
