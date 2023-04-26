import {Home} from "@/components/pages/Home";
import {AllArticleHeader} from "@/models";
import {NextPage} from "next";
import {getAllArticles} from "@/lib/posts";

type Props = {
    articles: AllArticleHeader[];
};

const HomePage: NextPage<Props> = ({articles}) => {
    return (
        <Home articles={articles}/>
    )
}

export default HomePage;

export async function getStaticProps() {
    const articles = await getAllArticles();

    return {
        props: {articles},
        revalidate: 60 * 60 * 24,
    };
}
