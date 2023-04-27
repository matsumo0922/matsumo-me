import { globalStyle, style } from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";

export const markdownRendererStyles = {
    root: style({
        wordBreak: "break-all",
    }),

    textLink: style({
        color: resources.colors.text.link,
        ":visited": {
            color: resources.colors.text.linkVisited,
        },
    }),

    h1: style({
        marginTop: resources.spacing[24],
        marginBottom: resources.spacing[8],
        fontSize: resources.fontSizes["2xl"],
        fontWeight: "bold",
        "::before": {
            content: "'# '",
            color: resources.colors.primary[300],
        },
    }),

    h2: style({
        marginTop: resources.spacing[16],
        marginBottom: resources.spacing[6],
        fontSize: resources.fontSizes.xl,
        fontWeight: "bold",
        "::before": {
            content: "'## '",
            color: resources.colors.primary[300],
        },
    }),

    h3: style({
        marginTop: resources.spacing[12],
        marginBottom: resources.spacing[4],
        fontSize: resources.fontSizes.lg,
        fontWeight: "bold",
        "::before": {
            content: "'### '",
            color: resources.colors.primary[300],
        },
    }),

    h4: style({
        marginTop: resources.spacing[8],
        marginBottom: resources.spacing[3],
        fontSize: resources.fontSizes.md,
        fontWeight: "bold",
        "::before": {
            content: "'#### '",
            color: resources.colors.primary[300],
        },
    }),

    h5: style({
        marginTop: resources.spacing[6],
        marginBottom: resources.spacing[3],
        fontSize: resources.fontSizes.sm,
        fontWeight: "bold",
        "::before": {
            content: "'##### '",
            color: resources.colors.primary[300],
        },
    }),

    h6: style({
        marginTop: resources.spacing[4],
        marginBottom: resources.spacing[3],
        fontSize: resources.fontSizes.xs,
        fontWeight: "bold",
        "::before": {
            content: "'###### '",
            color: resources.colors.primary[300],
        },
    }),

    codeBlock: style({
        marginTop: resources.spacing[4],
        marginBottom: resources.spacing[4],
    }),

    inlineCode: style({
        paddingLeft: resources.spacing[1],
        paddingRight: resources.spacing[1],
        borderRadius: resources.radius.sm,
        backgroundColor: resources.colors.gray[100],
        color: resources.colors.gray[800],
        fontFamily: resources.fontFamilies.mono,
        fontSize: resources.fontSizes.sm,
        display: "inline-block",
    }),

    list: style({
        paddingLeft: resources.spacing[7],
        marginTop: resources.spacing[4],
        marginBottom: resources.spacing[4],
    }),

    listItem: style({
        lineHeight: 1.8,
        marginTop: resources.spacing[2],
        marginBottom: resources.spacing[2],
    }),

    embeded: style({
        marginTop: resources.spacing[6],
        marginBottom: resources.spacing[6],
    }),

    paragraph: style({
        lineHeight: 1.8,
        whiteSpace: "pre-wrap",
    }),

    blockquote: style({
        marginTop: resources.spacing[4],
        marginBottom: resources.spacing[4],
        paddingLeft: resources.spacing[4],
        paddingTop: resources.spacing[1],
        paddingBottom: resources.spacing[1],
        borderLeft: resources.borders[4],
        borderColor: resources.colors.gray[300],
        color: resources.colors.text.secondary,

        ":first-child": {
            marginTop: 0,
        },
    }),

    hr: style({
        height: "auto",
        border: "none",
        "::before": {
            content: "'＊＊＊'",
            display: "block",
            color: resources.colors.text.secondary,
            marginTop: resources.spacing[6],
            marginBottom: resources.spacing[6],
            textAlign: "center",
        },
    }),

    table: style({
        marginTop: resources.spacing[6],
        marginBottom: resources.spacing[6],
        fontVariantNumeric: "lining-nums tabular-nums",
        borderCollapse: "collapse",
        width: "100%",
    }),

    th: style({
        fontFamily: resources.fontFamilies.heading,
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "0.05rem",
        paddingInlineStart: resources.spacing[6],
        paddingInlineEnd: resources.spacing[6],
        paddingTop: resources.spacing[3],
        paddingBottom: resources.spacing[3],
        lineHeight: "1rem",
        fontSize: resources.fontSizes.xs,
        color: resources.colors.gray[600],
        borderBottom: resources.borders[1],
        borderColor: resources.colors.gray[100],
    }),

    td: style({
        paddingInlineStart: resources.spacing[6],
        paddingInlineEnd: resources.spacing[6],
        paddingTop: resources.spacing[4],
        paddingBottom: resources.spacing[4],
        lineHeight: 1.25,
        borderBottom: resources.borders[1],
        borderColor: resources.colors.gray[100],
    }),
};

globalStyle(`${markdownRendererStyles.root} > :first-child`, {
    marginTop: 0,
});

globalStyle(`${markdownRendererStyles.paragraph} + ${markdownRendererStyles.paragraph}`, {
    marginTop: resources.spacing[6],
});

globalStyle(
    `${markdownRendererStyles.listItem} > ${markdownRendererStyles.paragraph} + ${markdownRendererStyles.paragraph}`,
    {
        marginTop: resources.spacing[2],
    },
);
