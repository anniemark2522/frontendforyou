"use client";
import React from "react";

type InputProps = Omit<React.ComponentPropsWithoutRef<"input">, "prefix" | "size">&
    Partial<{
        label: string;
        prefix: React.ReactNode;
        suffix: React.ReactNode;
    }>

const Input = React.forwardRef<HTMLInputElement,InputProps>(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onchange,

            ...restProps
        },
        ref,
    ) => {
        return (
            <label className={`${className} underfined    `}>
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onchange={onchange} {...restProps} />
                {!!suffix && suffix}
            </label>
        );
    },
);

export { Input };