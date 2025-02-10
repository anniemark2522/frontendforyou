import React from "react";

const sizes = {
    textlg: "text=[28px] font-medium md:text-[26px] sm:text-[24px]",
};

export type HeadingProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
    children,
    className = "",
    size = "textlg",
    as,
    ...restProps
}) => {
    const Component = as || "h6";

    return (
        <Component className={`text-ble-900 font-kanit ${className} ${sizes[size] as keyof typeof sizes}`} {...restProps}>
            {children}
        </Component>
    );
};

export {Heading};