import {FC} from "react";
import {MarkdownArticleHeader} from "@/models";
import {Header} from "@/components/shared/Header";
import {Footer} from "@/components/shared/Footer";
import {articleStyles} from "@/components/pages/Article.css";
import {DateTime} from "@/components/shared/DateTime";
import {TagLink} from "@/components/shared/TagLink";
import {PageTitle} from "@/components/shared/PageTitle";
import {MarkdownRenderer} from "@/components/shared/Markdown";

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

                    <div className={articleStyles.dateTimes}>
                        <p className={articleStyles.dateTime}>
                            公開:{" "}
                            <DateTime
                                format="yyyy年MM月dd日 HH時mm分"
                                datetime={article.publishedAt}
                            />
                        </p>
                    </div>

                    <div className={articleStyles.tags}>
                        {article.tags.map(tag => (
                            <div key={tag}>
                                <TagLink tag={tag} />
                            </div>
                        ))}
                    </div>
                </div>

                <hr className={articleStyles.contentDivider} />

                <section className={articleStyles.articleContent}>
                    <MarkdownRenderer>{article.body}</MarkdownRenderer>
                </section>
            </main>
            <Footer />
        </div>
    )
}