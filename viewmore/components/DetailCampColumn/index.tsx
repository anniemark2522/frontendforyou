import { Button, Text, Img} from "./..";
import React from "react";

interface Props {
    className?: string;
    krudam?:React.ReactNode;
    khlongtoei?:React.ReactNode;
    description?:React.ReactNode;
    viewMore?:string;
}

export default function DetailCampColumn({
    krudam = "Kru Dam",
    khlongtoei = "khlong Toei,Bangkok",
    description = "Description",
    viewMore = "View More",
    ...props
}:Props){
    return (
    <div{...props} className={`${props.className} flex flex-col w-full gap-1.5 bg-white-a700 rounded-[12px]`}>
        <Img 
            src=""
            width={274}
            height={178}
            alt="Image"
            className="h-[178px] w-full rounded-tl-[12px] rounded-tr-[12px] object-cover"
        />
        <div className="mx-2 mb-3 flex flex-col items-center self-stretch">
            <Text size="textlg" as="p" className="text-[20px] font-normal !text-blue-900">
                {krudam}
            </Text>
            <Text size="textxs" as="p" className="text-[13px] font-normal !text-blue-900">
                {khlongtoei}
            </Text>
            <Text size="textxs" as="p" className="ml-1 mt-2 self-start text-[13px] fonr-normal !text-blue-900">
                {description}
            </Text>
            <div className="mt-1.5 flex flex-col items-center gap-1.5 self-stratch">
                <div className="h-px w-full self-stretch bg-blue-900_7f" />
                <Button className="flex h-[30px] min-w-[80px] flex-row items-center justify-center rounded-[14px] bg-red-900 px-1.5 text-center text-[14px] text-white-1700">
                    {viewMore}
                </Button>
            </div>
        </div>
    </div>
    );
}