import React from "react";

const sizes = {
    textxs: "text-[13px font-normal",
    texts:"text=[16px] font-normal",
    textmd:"text-[20px] font-normal",
};

export type TextProps = Partial<{
    className: string;
    as: any;
    size: keyof typeof sizes;
}> &
    React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>;
const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
    children,
    className = "",
    as,
    size = "textmd",
    ...resProps
}) => {
    const Component = as || "p"

    return (
        <Component 
            className={`text-blue-900_b2 font-kanit ${className} ${sizes[size as keyof typeof sizes]}`}
            {...resProps}
        >
            {children}
        </Component>
    );
};

export {Text};
