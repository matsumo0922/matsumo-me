import {Home} from "@/components/shared/Home";
import {AllArticleHeader} from "@/models";
import {NextPage} from "next";
import {getAllArticles} from "@/lib/posts";
import {ChakraProvider} from "@chakra-ui/react";

type Props = {
    articles: AllArticleHeader[];
};

const HomePage: NextPage<Props> = ({articles}) => {
    return (
        <ChakraProvider>
            <Home articles={articles}/>
        </ChakraProvider>
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
