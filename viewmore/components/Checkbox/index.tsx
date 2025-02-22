"use client"
import React from "react";

const variants = {
    primary:" ",
}as const;
const sizes={
    xs:"h-[10px] w-[10px]",
    sm:"h-[12px] w-[12px]",
    md:"h-[14px] w-[14px]"
}as const;

type CheckBoxProps = Omit<
    React.DatailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>,HTMLInputElement>,
    "size" | "prefix" | "type" | "onChange"
    > &
    Partial<{
        className:string;
        name:string;
        label:string;
        id:string;
        onChange: Function;
        variant:keyof typeof variants;
        size: keyof typeof sizes;
        onClick:() => void;
    }>;
const CheckBox = React.forwardRef<HTMLInputElement,CheckBoxProps>(
    (
        {
            className = "",
            name = "",
            label = "",
            id = "checkbox_id",
            onChange,
            variant = "primary",
            size = "sm",
            ...restProps
        },
        ref,
    ) => {
        const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
            if (onChange) onChange(e?.target?.checked);
        };

        return (
            <>
            <div className={className}>
                <input 
                    className={` ${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
                    ref={ref}
                    type="checkbox"
                    name={name}
                    onChage={handleChange}
                    id={id}
                    {...restProps}
                />
                {!!label && <label htmlFor={id}>{label}</label>}
                </div>
                </>
        );
    },
);

export { CheckBox };