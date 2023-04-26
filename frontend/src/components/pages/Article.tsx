import {FC} from "react";
import {MarkdownArticleHeader} from "@/models";
import {Header} from "@/components/shared/Header";
import {Footer} from "@/components/shared/Footer";
import {articleCardStyles} from "@/components/shared/ArticleCard.css";
import {articleStyles} from "@/components/pages/Article.css";
import {DateTime} from "@/components/shared/DateTime";
import {TagLink} from "@/components/shared/TagLink";
import {PageTitle} from "@/components/shared/PageTitle";

type Props = {
    article: MarkdownArticleHeader;
};

export const Article: FC<Props> = ({ article }) => {
    return (
        <div>
            <Header />
            <main className={articleStyles.container}>
                <div className={articleStyles.articleHeader}>
                    <PageTitle>{article.title}</PageTitle>

                    <div className={articleStyles.datetimes}>
                        <p className={articleStyles.datetime}>
                            公開:{" "}
                            <DateTime
                                format="yyyy年MM月dd日 HH時mm分"
                                datetime={article.publishedAt}
                            />
                        </p>
                    </div>

                    <ul className={articleStyles.tags}>
                        {article.header.tags.map(tag => (
                            <li key={tag}>
                                <TagLink tag={tag} />
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
            <Footer />
        </div>
    )
}