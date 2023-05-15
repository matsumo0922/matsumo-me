import {FC} from "react";
import {sideBarAboutMeStyles} from "@/components/shared/SideBarAboutMe.css";
import Image from "next/image";

import TwitterIcon from "@/components/resource/twitter.svg"
import GithubIcon from "@/components/resource/github.svg"
import PlayIcon from "@/components/resource/google_play.svg"

export const SideBarAboutMe: FC = () => {
    return (
        <div className={sideBarAboutMeStyles.content}>
            <div className={sideBarAboutMeStyles.icon}/>

            <p className={sideBarAboutMeStyles.developmentDescription}>
                Developed and designed by
            </p>

            <p className={sideBarAboutMeStyles.developerName}>
                daichi-matsumoto
            </p>

            <div className={sideBarAboutMeStyles.contactContent}>
                <a
                    className={sideBarAboutMeStyles.contactIconContent} href={"https://twitter.com/matsumo0922"} target="_blank" rel="nofollow">
                    <TwitterIcon className={sideBarAboutMeStyles.contactIcon} />
                </a>

                <a className={sideBarAboutMeStyles.contactIconContent} href={"https://github.com/matsumo0922"} target="_blank" rel="nofollow">
                    <GithubIcon className={sideBarAboutMeStyles.contactIcon}/>
                </a>

                <a className={sideBarAboutMeStyles.contactIconContent} href={"https://play.google.com/store/apps/developer?id=CAIOS&hl=ja"} target="_blank" rel="nofollow">
                    <PlayIcon className={sideBarAboutMeStyles.contactIcon}/>
                </a>
            </div>

            <hr className={sideBarAboutMeStyles.contentDivider}/>

            <div className={sideBarAboutMeStyles.developerAboutContent}>
                <p className={sideBarAboutMeStyles.developerAbout}>
                    Android 開発が大好きな学生
                </p>

                <p className={sideBarAboutMeStyles.developerAbout}>
                    最近はインターンを経験しながら Web バックエンドや iOS 開発に手を出しています
                </p>
            </div>
        </div>
    )
}
