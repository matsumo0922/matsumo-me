import {FC} from "react";
import {headerStyles} from "@/components/shared/Header.css";
import NextLink from "next/link";
import {config} from "@/config";

export const Header: FC = () => {
    return (
        <div className={headerStyles.root}>
            <header className={headerStyles.header}>
                <h1>matsumo.me</h1>
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