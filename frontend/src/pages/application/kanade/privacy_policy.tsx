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
    const resp = await fetch("https://gist.githubusercontent.com/matsumo0922/6c992ac0a7b191c72219add4fd530a3b/raw/f18d2dae840b2e9f3b5c65e2fb3fb104b8bd9469/Kanade%25E3%2583%2597%25E3%2583%25A9%25E3%2582%25A4%25E3%2583%2590%25E3%2582%25B7%25E3%2583%25BC%25E3%2583%259D%25E3%2583%25AA%25E3%2582%25B7%25E3%2583%25BC.md");
    const text = await resp.text();

    return { props: { content: text } };
}
