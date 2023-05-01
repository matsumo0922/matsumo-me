import {AllArticleHeader, MarkdownArticleHeader} from "@/models";
import {applyCaseAxios} from "./applyCaseAxios";

export async function getAllArticles(): Promise<AllArticleHeader[]> {
    const response = await applyCaseAxios.get('http://backend:8080/api/articles');
    return response.data as AllArticleHeader[];
}

export async function getMarkdownArticle(articleId: number): Promise<MarkdownArticleHeader> {
    const response = await applyCaseAxios.get(`http://backend:8080/api/articles/markdown/${articleId}`);
    return response.data as MarkdownArticleHeader;
}

export async function postBrowseHistory(articleId: number) {
    await applyCaseAxios.post(`http://backend:8080/api/articles/browse?article_id=${articleId}`)
}
