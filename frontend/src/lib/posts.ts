import {AllArticleHeader, MarkdownArticleHeader} from "@/models";
import {applyCaseAxios} from "./applyCaseAxios";

export async function getAllArticles(): Promise<AllArticleHeader[]> {
    const response = await applyCaseAxios.get<AllArticleHeader[]>('http://backend:8080/api/articles');
    return response.data;
}

export async function getMarkdownArticle(articleId: number): Promise<MarkdownArticleHeader> {
    const response = await applyCaseAxios.get<MarkdownArticleHeader>(`http://backend:8080/api/articles/markdown/${articleId}`);
    return response.data;
}
