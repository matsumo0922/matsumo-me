import {AllArticleHeader} from "@/models";
import {applyCaseAxios} from "./applyCaseAxios";

export async function getAllArticles(): Promise<AllArticleHeader[]> {
    const response = await applyCaseAxios.get<AllArticleHeader[]>('http://backend:8080/api/articles');
    return response.data;
}
