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
    const resp = await fetch("https://gist.githubusercontent.com/matsumo0922/6a8db7a0fb6a427bfc03fc36b6f272dd/raw/02fc58d3745b4d6322cac059c798de7e48b63ed0/Almighty%25E3%2583%2597%25E3%2583%25A9%25E3%2582%25A4%25E3%2583%2590%25E3%2582%25B7%25E3%2583%25BC%25E3%2583%259D%25E3%2583%25AA%25E3%2582%25B7%25E3%2583%25BC.md");
    const text = await resp.text();

    return { props: { content: text } };
}
