import {Home} from "@/components/pages/Home";
import {AllArticleHeader} from "@/models";
import {NextPage} from "next";
import {getAllArticles} from "@/lib/posts";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";

type Props = {
    articles: AllArticleHeader[];
};

const HomePage: NextPage<Props> = ({articles}) => {
    const router = useRouter()
    const query = router.query
    const [tag, setTag] = useState<string | null>(null)

    useEffect(() => {
        if (router.isReady) {
            setTag(query.tag as string)
        }
    }, [router, query])

    return (
        <Home
            articles={articles}
            tag={tag}
        />
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
