import React, {FC} from "react";
import {Footer} from "@/components/shared/Footer";
import {Header} from "@/components/shared/Header";
import {AllArticleHeader} from "@/models";
import {ArticleList} from "@/components/shared/ArticleList";

type Props = {
    articles: AllArticleHeader[];
};

export const Home: FC<Props> = ({articles}) => {
    return (
        <div>
            <Header/>
            <main>
                <ArticleList articles={articles}/>
            </main>
            <Footer/>
        </div>
    );
};