import {Img, Text} from "./..";
import Link from "next/link";
import React from "react";

interface Props {
    className?: string;
}

export default function Header ({ ...props }: Props) {
    return(
        <header {...props} className={`${props.className} bg-red-900`}>
            <div className="relative h-[68px] w-full content-center md:h-auto">
                <Link href="#">
                <Img src="img_rewind.svg" width={16} height={16} alt="Rewind" className="h-[16px]"/>
                </Link>
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 items-start justify-between gap-5 bg-red-900 px-12 py-3 md:relative md:flex-col md:px-5">
                    <div className="mb-1.5 flex otems-center">
                        <Img src= "img_image.png" width={66} height={38} alt="Image" className="h-[38px] w-[32%] object-contain"/>
                        <Img
                        src="img_heafer_logo.png"
                        width={140}
                        height={30}
                        alt="Header Logo"
                        className="relative ml-[-8px] h-[30px] w-[140px] self-end object-contain"
                        />
                    </div>
                    <div className="mr-[116px] mt-1.5 flex w-[64%] items-center justify-between gap-5 md:mr-0 md:w-full">
                    <div className="flex items-center gap-2.5 self-end">
                        <Link href="#">
                            <Img src="img_rewind.svg" width={16} height={16} alt="Rewind" className="h-[16px] self-end"/>
                        </Link>
                        <Text size="texts" as="p" className="text-[16px] font-normal !text-red-900_7f">
                            Search
                        </Text>
                    </div>
                    <Link href="#">
                    <Img src="img_lock.svg" width={28} height={28} alt="Lock" className="h-[28px]" />
                    </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}