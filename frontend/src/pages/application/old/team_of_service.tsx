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
    const resp = await fetch("https://gist.githubusercontent.com/matsumo0922/9c7f14afcb0f7a0a3c6e59ddec0e6a19/raw/3680e710cc43489d52c90efcf8c388e99c437a94/Almighty%25E5%2588%25A9%25E7%2594%25A8%25E8%25A6%258F%25E7%25B4%2584.md");
    const text = await resp.text();

    return { props: { content: text } };
}
