import {AllArticleHeader, BrowseHistoryHeader, MarkdownArticleHeader} from "@/models";
import {applyCaseAxios} from "./applyCaseAxios";
import * as process from "process";

export async function getAllArticles(): Promise<AllArticleHeader[]> {
    const response = await applyCaseAxios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles`);
    return response.data as AllArticleHeader[];
}

export async function getMarkdownArticle(articleId: number): Promise<MarkdownArticleHeader> {
    const response = await applyCaseAxios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles/markdown/${articleId}`);
    return response.data as MarkdownArticleHeader;
}

export async function getBrowseHistories(articleId: number): Promise<[BrowseHistoryHeader]> {
    const response = await applyCaseAxios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/articles/browse_history/${articleId}`)
    return response.data as [BrowseHistoryHeader];
}

export function postBrowseHistory(articleId: number) {
    applyCaseAxios.post(`${process.env.NEXT_PUBLIC_API_CROS_ENDPOINT}/articles/browse?article_id=${articleId}`)
}
