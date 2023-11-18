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
    const resp = await fetch("https://gist.githubusercontent.com/matsumo0922/9bfad02cfdb2adb5457911395ec89fac/raw/829fe1e88640115d934571af324276a5b0a0e004/PixiView%25E5%2588%25A9%25E7%2594%25A8%25E8%25A6%258F%25E7%25B4%2584.md");
    const text = await resp.text();

    return { props: { content: text } };
}
