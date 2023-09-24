import {TeamOfService} from "@/components/pages/TeamOfService";

type Props = {
    content: string;
};

export default function TeamOfServicePage({ content }: Props) {
    return (
        <TeamOfService content={content} />
    )
}

export async function getServerSideProps(): Promise<any> {
    const resp = await fetch("https://gist.githubusercontent.com/matsumo0922/d607f38b63bca297e151da8215bc7947/raw/9c75a07a99b6f4eaac02783b246faa272827af2b/Kanade%25E5%2588%25A9%25E7%2594%25A8%25E8%25A6%258F%25E7%25B4%2584.md");
    const text = await resp.text();

    return { props: { content: text } };
}
