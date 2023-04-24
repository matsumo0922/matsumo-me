import {FC} from "react";
import {headerStyles} from "@/components/shared/Header.css";

export const Header: FC = () => {
    return (
        <div className={headerStyles.root}>
            <header className={headerStyles.header}>
                <h1>Header</h1>
            </header>
        </div>
    );
};