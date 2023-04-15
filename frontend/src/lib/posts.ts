import {AllArticleHeader} from "@/models";
import axios from 'axios';

export async function getAllArticles(): Promise<AllArticleHeader[]> {
    const response = await axios.get<AllArticleHeader[]>('http://backend:8080/api/articles');

    response.data.forEach((article) => {
        article.publishedAt = getStringDateWithoutTime(new Date(article.publishedAt));
        article.updatedAt = getStringDateWithoutTime(new Date(article.updatedAt));
    });

    return response.data;
}

function getStringDateWithoutTime(date: Date): string {
    return date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日";
}