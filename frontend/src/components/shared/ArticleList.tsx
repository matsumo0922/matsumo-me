import {AllArticleHeader} from "@/models";
import {FC} from "react";
import {ArticleCard} from "@/components/shared/ArticleCard";
import {articleListStyle} from "@/components/shared/ArticleList.css";

type Props = { articles: AllArticleHeader[] };

export const ArticleList: FC<Props> = ({articles}) => {
    return (
        <div className={articleListStyle}>
            {articles.map(article => (
                <ArticleCard
                    article={article}
                    key={article.id}
                />
            ))}
        </div>
    );
};
