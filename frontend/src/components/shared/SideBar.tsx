import {FC} from "react";
import {sideBarStyle} from "@/components/shared/SideBar.css";
import {SideBarAboutMe} from "@/components/shared/SideBarAboutMe";
import {SideBarTagList} from "@/components/shared/SideBarTagList";
import {AllArticleHeader} from "@/models";

type Props = { articles: AllArticleHeader[] };

export const SideBar: FC<Props> = ({articles}) => {
    return (
        <div className={sideBarStyle}>
            <SideBarAboutMe />
            <SideBarTagList tags={[... new Set(articles.map(article => (article.tags)).flat())]}/>
        </div>
    )
}
