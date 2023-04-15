import {AllArticleHeader} from "@/models";
import {FC} from "react";
import {ArticleCard} from "@/components/shared/ArticleCard";

type Props = { articles: AllArticleHeader[] };

export const ArticleList: FC<Props> = ({articles}) => {
    return (
        <div>
            {articles.map(article => (
                <ArticleCard article={article} key={article.id} />
            ))}
        </div>
    );
};
