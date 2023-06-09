import {FC, useState} from "react";
import {footerStyles} from "@/components/shared/Footer.css";
import {useIsomorphicLayoutEffect} from "react-use";

export const Footer: FC = () => {
    const [copyrightPeriod, setCopyrightPeriod] = useState("");

    useIsomorphicLayoutEffect(() => {
        const currentYear = new Date().getFullYear();
        setCopyrightPeriod(`${currentYear}`);
    }, []);

    return (
        <div>
            <footer className={footerStyles.footer}>
                <p className={footerStyles.description}>
                    このサイトは Google Analytics, Cookie を使用しています
                </p>
                <small>
                    &copy;{copyrightPeriod}{" "}
                    <a
                        className={footerStyles.textLink}
                        href="https://twitter.com/matsumo0922"
                        target="_blank"
                        rel="noreferrer">
                        daichi-matsumoto
                    </a>
                </small>
            </footer>
        </div>
    );
};
