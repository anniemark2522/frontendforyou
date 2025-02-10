import {Text,Img,RatingBar} from "./..";
import React from "react";

interface Props {
    className?: string;
    userImage?: string;
    userName?: React.ReactNode;
    userReviewCount?: React.ReactNode;
    settings?:string;
    userAmenities?:React.ReactNode;
}

export default function UserProfile ({
    userImage = "img_image_6.png",
    userName = "Spec  Bangkok",
    userReviewCount = "977 reviews",
    settings = "img_settings_blue_900.svg",
    userAmenities = "&lt'&gt;Free Wifi",
    ...props
}:Props ){
    return (
        <div {...props} className={`${props.className} flex items-center self-stretch flex-1`}>
            <Img 
                src={userImage}
                width={186}
                height={150}
                alt="Image 6"
                className="h-[150px] w-[38%] rounded-bl-[12px] rounded-tl-[12px] object-contain"
            />
            <div className="flex flex-1 flex-col items-start gap-1.5 bg-white-a700 px-1.5 shadow-xs sm:self-stretch">
                <Text as="p" className="text-[20px] font-normal !text-blue-900">
                    {userName}
                </Text>
                <div className="flex items-center gap-[9px] self-stretch">
                    <RatingBar value={1} isEditable={true} size={14} className="flex gap-2.5 self-end" />
                    <Text size="textxs" as="p" className="text-[13px] font-normal !text-blue-900">
                        {userReviewCount}
                    </Text>
                </div>
                <div className="mb-2 flex items-center self-stretch">
                    <div className="flex flex-col items-center gap-5">
                        <Img src="img_settings.svg" width={16} height={14} alt="Settings" className="h-[14px]" />
                        <Img 
                            src="img_tabler_air_cond.svg"
                            width={20}
                            height={20}
                            alt="Tabler Air Cond"
                            className="h-[20px] w-full"
                        />
                    </div>
                    <div className="mt-1.5 flex flex-1 flex-col items-start self-end">
                        <Img src={settings} width={14} height={14} alt="Settings" className="relative z-[2] ml-[86px] h-[14px]" />
                        <Text
                            size="textxs"
                            as="p"
                            className="relative mt-[-14px] text-[13px] font-norml leading-[19px] !text-blue-900"
                            >
                                {userAmenities}
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}