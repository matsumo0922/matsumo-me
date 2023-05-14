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
                <a
                    className={aboutMeStyles.contactIconContent} href={"https://twitter.com/matsumo0922"} target="_blank" rel="nofollow">
                    <TwitterIcon className={aboutMeStyles.contactIcon} />
                </a>

                <a className={aboutMeStyles.contactIconContent} href={"https://github.com/matsumo0922"} target="_blank" rel="nofollow">
                    <GithubIcon className={aboutMeStyles.contactIcon}/>
                </a>

                <a className={aboutMeStyles.contactIconContent} href={"https://play.google.com/store/apps/developer?id=CAIOS&hl=ja"} target="_blank" rel="nofollow">
                    <PlayIcon className={aboutMeStyles.contactIcon}/>
                </a>
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
