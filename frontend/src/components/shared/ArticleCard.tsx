import Image from "next/image";
import NextLink from "next/link";
import React, { FC } from "react";
import {articleCardStyles} from "./ArticleCard.css";
import {ArticleHeader} from "@/models";
import {DateTime} from "@/components/shared/DateTime";
import Link from "next/link";
import {getFaviconUrl} from "@/lib/getFaviconUrl";
import {getTypeText} from "@/lib/getTypeText";

type Props = { article: ArticleHeader };

export const ArticleCard: FC<Props> = ({ article }) => {
    return (
        <article className={articleCardStyles.card}>
            <DateTime
                className={articleCardStyles.publishedAt}
                datetime={article.publishedAt}
                format="yyyy年MM月dd日 HH時mm分"
            />

            <h3 className={articleCardStyles.title}>
                {article.type === "markdown" ? (
                    <NextLink
                        className={articleCardStyles.titleLink}
                        href={`/articles/${article.id}`}>
                        {article.title}
                    </NextLink>
                ) : (
                    <a
                        className={articleCardStyles.titleLink}
                        href={article.url}
                        target="_blank"
                        rel="noreferrer">
                        {article.title}
                    </a>
                )}
            </h3>

            {article.type === "markdown" && (
                <ul className={articleCardStyles.tags}>
                    {article.tags.map(tag => (
                        <li key={tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
            )}

            {(article.type === "zenn" || article.type === "qiita") && (
                <a
                    className={articleCardStyles.zennLink}
                    href={article.url}
                    target="_blank"
                    rel="noreferrer">

                    <Image
                        src={getFaviconUrl("zenn.dev", 16)}
                        alt="" width={16}
                        height={16}
                    />

                    <span>{getTypeText(article.type)}</span>
                </a>
            )}
        </article>
    );
};
