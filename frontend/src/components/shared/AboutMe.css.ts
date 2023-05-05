import {style} from "@vanilla-extract/css";
import {resources} from "@/styles/resources.css";
import iconUrl from "../resource/matsumo_icon.jpg";

export const aboutMeStyles = {
    content: style({
        width: "100%",
        aspectRatio: "1",
        background: "lightblue",
        borderRadius: resources.radius.md,
        boxShadow: resources.shadows.md,
    }),

    icon: style({
        width: resources.sizes[12],
        aspectRatio: "1",
        borderRadius: resources.radius.max,
        backgroundImage: `url(${iconUrl.src})`,
    }),
}
