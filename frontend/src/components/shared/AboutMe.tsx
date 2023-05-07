import {FC} from "react";
import {aboutMeStyles} from "@/components/shared/AboutMe.css";

export const AboutMe: FC = () => {
    return (
        <div className={aboutMeStyles.content}>
            <div className={aboutMeStyles.icon} />

            <p className={aboutMeStyles.developmentDescription}>
                Developed and designed by
            </p>

            <p className={aboutMeStyles.developerName}>
                daichi-matsumoto
            </p>
            
            <div className={aboutMeStyles.contactContent}>
                <div className={aboutMeStyles.contactTwitter} />
                <div className={aboutMeStyles.contactTwitter} />
                <div className={aboutMeStyles.contactTwitter} />
            </div>

            <hr className={aboutMeStyles.contentDivider} />
        </div>
    )
}
