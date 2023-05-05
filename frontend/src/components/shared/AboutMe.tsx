import {FC} from "react";
import {aboutMeStyles} from "@/components/shared/AboutMe.css";

export const AboutMe: FC = () => {
    return (
        <div className={aboutMeStyles.content}>
            <div className={aboutMeStyles.icon} />
        </div>
    )
}
