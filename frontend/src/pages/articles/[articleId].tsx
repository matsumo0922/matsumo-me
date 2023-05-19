import {ArticleHeader, BrowseHistoryHeader, MarkdownArticleHeader} from "@/models";
import {GetStaticProps} from "next";
import {getAllArticles, getBrowseHistories, getMarkdownArticle, postBrowseHistory} from "@/lib/posts";
import {Article} from "@/components/pages/Article";
import {useEffect} from "react";
import {applyCaseAxios} from "@/lib/applyCaseAxios";

type Props = {
    article: MarkdownArticleHeader;
    histories:[BrowseHistoryHeader];
};

export default function Post({ article, histories }: Props) {
    let accessFlag = false;

    useEffect(() => {
        if(!accessFlag) {
            accessFlag = true
            postBrowseHistory(article.articleId)
        }
    }, []);

    return (
        <Article
            article={article}
            histories={histories}
        />
    )
}

export const getStaticProps: GetStaticProps<Props, { articleId: string }> = async ({ params}) => {
    if (!params) throw new Error("Component file name must has params.");

    const articleId = Number(params.articleId)
    const article = await getMarkdownArticle(articleId);
    const histories = await getBrowseHistories(articleId)

    return {
        props: {
            article: article,
            histories: histories,
        },
    };
};

export const getStaticPaths = async () => {
    const articles = await getAllArticles();

    return {
        fallback: false,
        paths: articles
            .filter(article => article.resource === "markdown")
            .map(article => `/articles/${article.id.toString()}`),
    }
}
