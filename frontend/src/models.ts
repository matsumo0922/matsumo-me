type ArticleHeaderBase = {
    id: number;
    title: string;
    publishedAt: string;
    updatedAt: string;
}

export type AllArticleHeader = ArticleHeaderBase & {
    resource: string,
    url: string,
    tags: string[];
}

export type BlogArticleHeader = ArticleHeaderBase & {
    resource: "markdown";
    tags: string[];
}

export type QiitaArticleHeader = ArticleHeaderBase & {
    resource: "qiita",
    url: string,
    tags: string[];
    likes: number;
    stocks: number;
    comments: number;
}

export type ZennArticleHeader = ArticleHeaderBase & {
    resource: "zenn",
    url: string,
}

export type ArticleHeader = BlogArticleHeader | QiitaArticleHeader | ZennArticleHeader;
