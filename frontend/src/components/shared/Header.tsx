import {FC} from "react";
import {headerStyles} from "@/components/shared/Header.css";
import NextLink from "next/link";
import Image from "next/image";
import day_logo from "./blog_logo_day.png";
import night_logo from "./blog_logo_night.png";
import {useColorMode, useColorModeValue} from "@/lib/colorMode";
import {IconButton} from "@/components/shared/IconButton";
import {MdDarkMode, MdLightMode} from "react-icons/md";

export const Header: FC = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <div className={headerStyles.root}>
            <header className={headerStyles.header}>
                <NextLink href="/" className={headerStyles.logoLink}>
                    <Image
                        className={headerStyles.logoLinkImage}
                        src={useColorModeValue(day_logo, night_logo)}
                        alt="matsumo's blog"
                        title="matsumo's blog"
                        priority
                    />
                </NextLink>
                <nav className={headerStyles.navigations}>
                    <IconButton
                        aria-label="toggle theme"
                        variant="ghost"
                        icon={useColorModeValue(<MdLightMode />, <MdDarkMode />)}
                        onClick={toggleColorMode}
                    />
                    <NavLinks />
                </nav>
            </header>
        </div>
    );
};

const NavLinks: FC = () => {
    return (
        <>
            <a href="https://twitter.com/matsumo0922" className={headerStyles.navigationLink}>
                Articles
            </a>

            <a href="https://twitter.com/matsumo0922" className={headerStyles.navigationLink}>
                About
            </a>
            <a
                href="https://twitter.com/matsumo0922"
                target="_blank"
                rel="noreferrer"
                className={headerStyles.navigationLink}>
                GitHub
            </a>
        </>
    );
};