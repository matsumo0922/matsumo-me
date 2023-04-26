import {FC} from "react";
import {headerStyles} from "@/components/shared/Header.css";
import NextLink from "next/link";
import Image from "next/image";
import logo from "./logo_sample.png";

export const Header: FC = () => {
    return (
        <div className={headerStyles.root}>
            <header className={headerStyles.header}>
                <NextLink href="/" className={headerStyles.logoLink}>
                    <Image
                        className={headerStyles.logoLinkImage}
                        src={logo}
                        alt="matsumo's blog"
                        title="matsumo's blog"
                        priority
                    />
                </NextLink>
                <nav className={headerStyles.navigations}>
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