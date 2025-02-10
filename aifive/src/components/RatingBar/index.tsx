"use client";
import React,{ HTMLAttributes} from "react";
//@ts-ignore

import ReactStars from "react-rating-stars-component";

type RatingBarType = React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>,HTMLDivElement> &
    Partial<{
        starCount: number;
        color: string;
        activeColor: string;
        isEditable: boolean;
        value: number;
        size: number;
    }>;
const RatingBar = ({
    children,
    className,
    starCount = 5,
    color = "grey",
    activeColor = "red",
    isEditable = false,
    ...resProps
}: RatingBarType) => {
    return (
        <>
            <ReactStars
                edit={isEditable}
                className={className}
                count={starCount}
                isHalf={false}
                color={color}
                activeColor={activeColor}
                {...resProps}
                key={resProps.value || 1}
            />
            {children}
        </>
    );
};

export {RatingBar};