import {FC} from "react";
import {aboutMeStyles} from "@/components/shared/AboutMe.css";
import Image from "next/image";

import TwitterIcon from "@/components/resource/twitter.svg"
import GithubIcon from "@/components/resource/github.svg"
import PlayIcon from "@/components/resource/google_play.svg"

export const AboutMe: FC = () => {
    return (
        <div className={aboutMeStyles.content}>
            <div className={aboutMeStyles.icon}/>

            <p className={aboutMeStyles.developmentDescription}>
                Developed and designed by
            </p>

            <p className={aboutMeStyles.developerName}>
                daichi-matsumoto
            </p>

            <div className={aboutMeStyles.contactContent}>
                <div className={aboutMeStyles.contactIconContent}>
                    <TwitterIcon className={aboutMeStyles.contactIcon}/>
                </div>

                <div className={aboutMeStyles.contactIconContent}>
                    <GithubIcon className={aboutMeStyles.contactIcon}/>
                </div>

                <div className={aboutMeStyles.contactIconContent}>
                    <PlayIcon className={aboutMeStyles.contactIcon}/>
                </div>
            </div>

            <hr className={aboutMeStyles.contentDivider}/>

            <div className={aboutMeStyles.developerAboutContent}>
                <p className={aboutMeStyles.developerAbout}>
                    Android 開発が大好きな学生
                </p>

                <p className={aboutMeStyles.developerAbout}>
                    最近はインターンを経験しながら Web バックエンドや iOS 開発に手を出しています
                </p>
            </div>
        </div>
    )
}
