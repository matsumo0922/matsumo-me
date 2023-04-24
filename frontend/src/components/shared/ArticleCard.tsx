import Image from "next/image";
import NextLink from "next/link";
import React, {FC} from "react";
import {articleCardStyles} from "./ArticleCard.css";
import {AllArticleHeader, ArticleHeader} from "@/models";
import {DateTime} from "@/components/shared/DateTime";
import Link from "next/link";
import {getFaviconUrl} from "@/lib/getFaviconUrl";
import {getTypeText} from "@/lib/getTypeText";
import {TagLink} from "@/components/shared/TagLink";

type Props = { article: AllArticleHeader };

export const ArticleCard: FC<Props> = ({article}) => {
    return (
        <article className={articleCardStyles.card}>
            <DateTime
                className={articleCardStyles.publishedAt}
                datetime={article.publishedAt}
                format="yyyy年MM月dd日 HH時mm分"
            />

            <h3 className={articleCardStyles.title}>
                {article.resource === "markdown" ? (
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

            {article.resource === "markdown" && (
                <ul className={articleCardStyles.tags}>
                    {article.tags.map(tag => (
                        <li key={tag}>
                            {tag}
                        </li>
                    ))}
                </ul>
            )}

            {article.resource == "qiita" && (
                <div className={articleCardStyles.resourceTagRoot}>
                    <a
                        className={articleCardStyles.resourceLink}
                        href={article.url}
                        target="_blank"
                        rel="noreferrer">

                        <Image
                            src={getFaviconUrl(article.resource, 16)}
                            alt="" width={16}
                            height={16}
                        />

                        <span>{getTypeText(article.resource)}</span>
                    </a>

                    <div style={{width: "0.5rem"}} />

                    {article.tags.slice(0, 3).map((tag, i) => (
                        <TagLink tag={tag} key={i} />
                    ))}
                </div>
            )}

            {article.resource == "zenn" && (
                <div className={articleCardStyles.resourceTagRoot}>
                    <a
                        className={articleCardStyles.resourceLink}
                        href={article.url}
                        target="_blank"
                        rel="noreferrer">

                        <Image
                            src={getFaviconUrl(article.resource, 16)}
                            alt="" width={16}
                            height={16}
                        />

                        <span>{getTypeText(article.resource)}</span>
                    </a>
                </div>
            )}
        </article>
    );
};
