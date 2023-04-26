import {ArticleHeader, BlogArticleHeader} from "@/models";
import {GetStaticProps} from "next";
import {getAllArticles, getMarkdownArticle} from "@/lib/posts";

type Props = { article: BlogArticleHeader };

export default function Post({ article }: Props) {
    return (
        <h1>{article.title}</h1>
    )
}

export const getStaticProps: GetStaticProps<Props, { articleId: number }> = async ({ params}) => {
    if (!params) throw new Error("Component file name must has params.");

    const article = await getMarkdownArticle(params.articleId);

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
            .map(article => ({ params: { articleId: article.id.toString() } })),
    }
}