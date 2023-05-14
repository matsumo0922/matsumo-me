import {AllArticleHeader} from "@/models";
import {FC} from "react";
import {ArticleCard} from "@/components/shared/ArticleCard";
import {articleListStyles} from "@/components/shared/ArticleList.css";

type Props = { articles: AllArticleHeader[] };

export const ArticleList: FC<Props> = ({articles}) => {
    return (
        <div className={articleListStyles.content}>

            <p className={articleListStyles.header}>
                記事一覧
            </p>

            <div className={articleListStyles.list}>
                {articles.map(article => (
                    <ArticleCard
                        article={article}
                        key={article.id}
                    />
                ))}
            </div>
        </div>
    );
};
