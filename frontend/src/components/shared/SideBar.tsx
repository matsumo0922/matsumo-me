import {FC} from "react";
import {sideBarStyle} from "@/components/shared/SideBar.css";
import {SideNewArticles} from "@/components/shared/SideNewArticles";
import {AboutMe} from "@/components/shared/AboutMe";

export const SideBar: FC = () => {
    return (
        <div className={sideBarStyle}>
            <AboutMe />
            <SideNewArticles />
        </div>
    )
}
