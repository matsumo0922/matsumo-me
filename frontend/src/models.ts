type ArticleHeaderBase = {
    id: number;
    title: string;
    publishedAt: string;
    updatedAt: string;
}

export type AllArticleHeader = ArticleHeaderBase & {
    type: string,
    url: string,
    tags: string[];
}

export type BlogArticleHeader = ArticleHeaderBase & {
    type: "markdown";
    tags: string[];
}

export type QiitaArticleHeader = ArticleHeaderBase & {
    type: "qiita",
    url: string,
    tags: string[];
    likes: number;
    stocks: number;
    comments: number;
}

export type ZennArticleHeader = ArticleHeaderBase & {
    type: "zenn",
    url: string,
}

export type ArticleHeader = BlogArticleHeader | QiitaArticleHeader | ZennArticleHeader;

export type Article = {
    header: BlogArticleHeader;
    bodyMdText: string;
    tocMdText: string;
}