import {FC} from "react";
import {Header} from "@/components/shared/Header";
import {PageTitle} from "@/components/shared/PageTitle";
import {Footer} from "@/components/shared/Footer";
import {teamOfServiceStyles} from "@/components/pages/TeamOfService.css";
import {MarkdownRenderer} from "@/components/shared/Markdown";

type Props = {
    content: string;
};

export const TeamOfService: FC<Props> = ({ content }) => {
    return (
        <div>
            <Header />
            <main className={teamOfServiceStyles.container}>
                <div className={teamOfServiceStyles.teamOfServiceHeader}>
                    <PageTitle>アプリケーション利用規約</PageTitle>

                    <div className={teamOfServiceStyles.teamOfServiceInfo}>
                        <p className={teamOfServiceStyles.teamOfServiceDescription}>アプリケーションを利用するには、以下の規約に同意していただく必要があります</p>
                    </div>
                </div>

                <hr className={teamOfServiceStyles.contentDivider} />

                <section className={teamOfServiceStyles.teamOfServiceContent}>
                    <MarkdownRenderer>{content}</MarkdownRenderer>
                </section>
            </main>
            <Footer />
        </div>
    )
}
