import { Img, Button, Text, CheckBox, Heading } from "../../component";
import DetailCampColumn from "../../components/DetailCampsColumn";
import React, { Suspense } from "react";
import Header form "../..components/Header";

const campDetailsGrid = [
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
    {
        krudam: "Kru Dam", khlongtoei: "khlong Toei, Bangkok", description: "Description"
        , viewMore: "View More"
    },
];

export default function DetailCampsPage(){
    return (
        <div className="flex w-full flex-col items-center bg-white-a700">
        <Header />
        <div className="mx-auto mt-[68px] flex w-full max-w-[1209px] flex-col items-center self-stretch md:px-5">
        <Heading size="headingmd" as="h1" className="text-[36px] font-semibold md:text-[34px] sm:text-[32px]">
            Muay Thai Gyms
        </Heading>
        <Heading size="headings" as="h2" className="mt-2.5 text-[24px] font-semibold md:text-[22px]">
            Bangkok
        </Heading>
        <div className="mt-[60px] flex items-start gap-6 self-stretch md:flex-col">
            <div className="w-[22%] rounded-[10px] border-[0.5px] border-solid border-black-900_3f bg-white-a700 p-1 md:w-full">
                <div className="mb-16 flex flex-col items-start">
                <Heading as="h2" className="text-[16px] font-semibold">
                    Muay Thai Gyms
                </Heading>
                <CheckBox 
                    size="xs"
                    name="bangkok_one"
                    label="Bangkok"
                    id="bangkokone"
                    className="ml-11 mt-2.5 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                />
                <Text as="p" className="ml-[66px] mt-2.5 text-[16px] font-normal md:ml-0">
                    Bangkok
                </Text>
                <CheckBox 
                    name="bangkok_three"
                    label="Bangkok"
                    id="bangkokthree"
                    className="ml-11 mt-2.5 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                />
                <CheckBox 
                    name="bangkok_four"
                    label="Bangkok"
                    id="bangkokfour"
                    className="ml-11 mt-2.5 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                />
                <div className="ml-11 mt-2.5 flex items-center gap-2.5 md:ml-0">
                    <Img src="" width={12} height={12} alt="Close" className="h-[12px]" />
                    <Text as="p" className="text-[16px] font-normal">
                    Bangkok
                    </Text>
                </div>
                <CheckBox 
                    name="bangkok_six"
                    label="Bangkok"
                    id="bangkoksix"
                    className="ml-11 mt-2.5 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                />
                <CheckBox 
                    name="bangkok_seven"
                    label="Bangkok"
                    id="bangkokseven"
                    className="ml-11 mt-2.5 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                />
                <CheckBox 
                    name="bangkok_eight"
                    label="Bangkok"
                    id="bangkokeight"
                    className="ml-11 mt-2.5 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                />
                <CheckBox 
                    name="bangkok_nine"
                    label="Bangkok"
                    id="bangkoknine"
                    className="ml-11 mt-2.5 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                />
                <CheckBox 
                    name="bangkok_ten"
                    label="Bangkok"
                    id="bangkokten"
                    className="ml-11 mt-2.5 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                />
        </div>
            </div>
            <div className="flex flex-1 flex-col items-center gap-[54px] self-center md:self-stretch sm:gap-[27px]">
            <div className="grid grid-cols-3 justify-center gap-11 dels-stretch md-grid-cols-2 sm:grid-cols-1">
            <Suspense fallback={<div>Loading feed....</div>}>
                {campDatailsGrid.map((d,index) => (
                    <DetailCampColumn {...d} key={"detailcamps" + index} />
                ))}
            </Suspense>
            </div>
            <div className="flex w-[18%] items-center justify-center gap-3.5 md:w-full">
                <Img src="" width={24} height={26} alt="Arrowleft" className="h-[26px] self-end" />
                <Button className="flex h-[34px] flex-1 flex-row items-center justify-center rounded-[16px] bg-red-900 px-3.5 text-center text-[16px] font-medium text-white-a700">
                    1
                </Button>
                <Button className="flex h-[34px] flex-1 flex-row items-center justify-center rounded-[16px] bg-black-900_3f px-3.5 text-center text-[16px] font-medium text-white-a700">
                    2
                </Button>
                <Img src="" width={24} height={26} alt="Arrowright" className="h-[26px] self-end"  />
            </div>
            </div>
         </div>
        </div>
        <footer className="mt-[134px] flex self-stretch">
                <Img 
                    src=""
                    width={1278}
                    height={484}
                    alt="Image"
                    className="h-[484px] w-full object-cover md:h-auto" 
                />
        </footer>
        </div>
    );

}