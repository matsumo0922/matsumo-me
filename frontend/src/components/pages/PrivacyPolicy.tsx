import {FC} from "react";
import {Header} from "@/components/shared/Header";
import {PageTitle} from "@/components/shared/PageTitle";
import {Footer} from "@/components/shared/Footer";
import {MarkdownRenderer} from "@/components/shared/Markdown";
import {privacyPolicyStyles} from "@/components/pages/PrivacyPolicy.css";

type Props = {
    content: string;
};

export const PrivacyPolicy: FC<Props> = ({ content }) => {
    return (
        <div>
            <Header />
            <main className={privacyPolicyStyles.container}>
                <div className={privacyPolicyStyles.privacyPolicyHeader}>
                    <PageTitle>プライバシーポリシー</PageTitle>

                    <div className={privacyPolicyStyles.privacyPolicyInfo}>
                        <p className={privacyPolicyStyles.privacyPolicyDescription}>アプリケーションを利用するには、以下のプライバシーポリシーに同意していただく必要があります</p>
                    </div>
                </div>

                <hr className={privacyPolicyStyles.contentDivider} />

                <section className={privacyPolicyStyles.privacyPolicyContent}>
                    <MarkdownRenderer>{content}</MarkdownRenderer>
                </section>
            </main>
            <Footer />
        </div>
    )
}
