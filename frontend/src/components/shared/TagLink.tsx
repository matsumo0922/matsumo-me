import {FC} from "react";
import {tagLinkStyle} from "@/components/shared/TagLink.css";
import NextLink from "next/link";

export const TagLink: FC<{ tag: string }> = ({ tag }) => {
    return (
        <NextLink
            className={tagLinkStyle}
            key={tag}
            href={{pathname: "/", query: `tag=${tag}`}}>
            {tag}
        </NextLink>
    );
};
