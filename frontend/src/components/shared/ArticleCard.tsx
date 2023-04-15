import Image from "next/image";
import NextLink from "next/link";
import { FC } from "react";
import {ArticleHeader} from "@/models";

type Props = { article: ArticleHeader };

export const ArticleCard: FC<Props> = ({ article }) => {
    return (
        <article>
            <DateTime
                className={articleCardStyles.publishedAt}
                datetime={article.createdAt}
                format="yyyy年MM月dd日 HH時mm分"
            />
            <h3 className={articleCardStyles.title}>
                {article.type === "stin-blog" ? (
                    <NextLink
                        className={articleCardStyles.titleLink}
                        href={pagesPath.articles._slug(article.slug).$url()}>
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
            {article.type === "stin-blog" ? (
                <ul className={articleCardStyles.tags}>
                    {article.tags.map(tag => (
                        <li key={tag}>
                            <TagLink tag={tag} />
                        </li>
                    ))}
                </ul>
            ) : (
                <a
                    className={articleCardStyles.zennLink}
                    href={`https://zenn.dev/${config.social.zenn}`}
                    target="_blank"
                    rel="noreferrer">
                    <Image src={getFaviconUrl("zenn.dev", 16)} alt="" width={16} height={16} />
                    <span>Zenn</span>
                </a>
            )}
        </article>
    );
};
