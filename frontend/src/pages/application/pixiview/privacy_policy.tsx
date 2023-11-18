import {PrivacyPolicy} from "@/components/pages/PrivacyPolicy";

type Props = {
    content: string;
};

export default function PrivacyPolicyPage({ content }: Props) {
    return (
        <PrivacyPolicy content={content} />
    )
}

export async function getServerSideProps(): Promise<any> {
    const resp = await fetch("https://gist.githubusercontent.com/matsumo0922/b40642491e0031d450384f3bb7ac81bb/raw/81ce491bf772e61b2909746a4ab48ba2459d8f09/PixiView%25E3%2583%2597%25E3%2583%25A9%25E3%2582%25A4%25E3%2583%2590%25E3%2582%25B7%25E3%2583%25BC%25E3%2583%259D%25E3%2583%25AA%25E3%2582%25B7%25E3%2583%25BC.md");
    const text = await resp.text();

    return { props: { content: text } };
}
