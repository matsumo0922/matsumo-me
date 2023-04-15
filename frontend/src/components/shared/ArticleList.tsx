import {AllArticleHeader} from "@/models";
import {FC} from "react";

type Props = { articles: AllArticleHeader[] };

export const ArticleList: FC<Props> = ({articles}) => {
    return (
        <div>
            {articles.map(article => (
                <p key={article.id}>{article.title}</p>
            ))}
        </div>
    );
};
