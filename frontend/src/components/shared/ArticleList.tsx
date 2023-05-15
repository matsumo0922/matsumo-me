import {AllArticleHeader} from "@/models";
import {FC} from "react";
import {ArticleCard} from "@/components/shared/ArticleCard";
import {articleListStyles} from "@/components/shared/ArticleList.css";

type Props = {
    articles: AllArticleHeader[]
    tag: string | null;
};

export const ArticleList: FC<Props> = ({articles, tag}) => {
    return (
        <div className={articleListStyles.content}>

            <p className={articleListStyles.header}>
                {tag ? tag : "記事一覧"}
            </p>

            <div className={articleListStyles.list}>
                {articles
                    .filter(article =>
                        article.title.toLowerCase().includes(tag?.toLowerCase() ?? "") ||
                        article.tags.includes(tag ?? "")
                    )
                    .map(article => (
                    <ArticleCard
                        article={article}
                        key={article.id}
                    />
                ))}
            </div>
        </div>
    );
};
