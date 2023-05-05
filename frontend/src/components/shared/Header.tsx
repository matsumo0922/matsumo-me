import {FC} from "react";
import {headerStyles} from "@/components/shared/Header.css";
import NextLink from "next/link";
import LogoDay from "../resource/logo_day.svg";
import LogoNight from "../resource/logo_night.svg";
import {useColorMode, useColorModeValue} from "@/lib/colorMode";
import {IconButton} from "@/components/shared/IconButton";
import {MdDarkMode, MdLightMode} from "react-icons/md";
import {config} from "@/config";

export const Header: FC = () => {
    const { toggleColorMode } = useColorMode();

    return (
        <div className={headerStyles.root}>
            <header className={headerStyles.header}>
                <NextLink href="/" className={headerStyles.logoLink}>
                    {useColorModeValue((<LogoDay className={headerStyles.logoLinkImage}/>), (<LogoNight className={headerStyles.logoLinkImage}/>))}
                </NextLink>
                <nav className={headerStyles.navigations}>
                    <IconButton
                        aria-label="toggle theme"
                        variant="ghost"
                        icon={useColorModeValue(<MdLightMode color={"#000"} />, <MdDarkMode color={"#FFF"} />)}
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
            <NextLink href="/" className={headerStyles.navigationLink}>
                Articles
            </NextLink>
            <a href="https://twitter.com/matsumo0922" className={headerStyles.navigationLink}>
                About
            </a>
            <a
                href={config.repository}
                target="_blank"
                rel="noreferrer"
                className={headerStyles.navigationLink}>
                GitHub
            </a>
        </>
    );
};
