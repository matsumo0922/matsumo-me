import {ArticleHeader, MarkdownArticleHeader} from "@/models";
import {GetStaticProps} from "next";
import {getAllArticles, getMarkdownArticle, postBrowseHistory} from "@/lib/posts";
import {Article} from "@/components/pages/Article";
import {useEffect} from "react";
import {applyCaseAxios} from "@/lib/applyCaseAxios";

type Props = { article: MarkdownArticleHeader };

export default function Post({ article }: Props) {
    let accessFlag = false;

    useEffect(() => {
        if(!accessFlag) {
            accessFlag = true
            postBrowseHistory(article.articleId)
        }
    }, []);

    return (
        <Article article={article} />
    )
}

export const getStaticProps: GetStaticProps<Props, { articleId: string }> = async ({ params}) => {
    if (!params) throw new Error("Component file name must has params.");

    const article = await getMarkdownArticle(Number(params.articleId));

    return {
        props: { article },
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
