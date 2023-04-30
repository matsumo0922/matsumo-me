import {ComponentProps, forwardRef, ReactNode} from "react";
import {iconButtonStyle} from "@/components/shared/IconButton.css";

type IconButtonProps = Omit<ComponentProps<"button">, "children"> & {
    icon: ReactNode;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    function IconButton(
        {
            icon,
            ...buttonProps
        },
        forwardedRef,
    ) {
        return (
            <button
                {...buttonProps}
                ref={forwardedRef}
                type={buttonProps.type ?? "button"}
                className={iconButtonStyle}>
                {icon}
            </button>
        );
    },
);
