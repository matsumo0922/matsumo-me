import {FC} from "react";
import {sideBarStyle} from "@/components/shared/SideBar.css";
import {SideAboutMe} from "@/components/shared/SideAboutMe";
import {SideNewArticles} from "@/components/shared/SideNewArticles";

export const SideBar: FC = () => {
    return (
        <div className={sideBarStyle}>
            <SideAboutMe />
            <SideNewArticles />
        </div>
    )
}