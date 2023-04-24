import {ArticleHeader, BlogArticleHeader} from "@/models";
import {GetStaticProps} from "next";

type Props = { article: BlogArticleHeader };

export const getStaticProps: GetStaticProps<Props, { articleId: number }> = async ({ params}) => {
    if (!params) throw new Error("Component file name must has params.");

    return {
        props: { article },
    };
};