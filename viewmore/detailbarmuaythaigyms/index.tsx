"use client";

import { Img, Button, Text, CheckBox, Heading, Input } from "../../component";
import DetailCampColumn from "../../components/DetailCampsColumn";
import { CloseSVG } from "../../components/Input/close";
import Detail from "./DetailBarMuayThaiGymsSection";
import Link from "next/link";
import React, { Suspense } from "react";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const additionalCampInfoGrid = [
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

export default function DetailBarMuayThaiGymsPage() {
    const [searchBarValue1, setSearchBarValuse1] = React.useState("");

    return (
        <div className="flex w-full flex-col gap-[46px] bg-white-a700">
            <header className="flex items-center justify-center bg-red-900 p-3">
                <div className="mx-auto mb-1 flex w-full max-w-[1122px] justify-between gap-5 self-start sm:flex-col">
                    <div className="flex w-[35%] items-center justify-center sm:w-full sm:flex-col">
                        <Img
                            src=""
                            width={66}
                            height={38}
                            alt="Image"
                            className="h-[38px] w-[16%] object-contain sm:w-full"
                        />
                        <div className="relative ml-[-8px] flex flex-1 justify-center self-end sm:ml-0 sm:self-stretch ">
                            <ul className="flex gap-[54px]">
                                <li>
                                    <Link href="#">
                                        <div className="w-[140px" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Text size="textlg" as="p" className="text-[20px] font-normal !text-white-a700">
                                            Trips
                                        </Text>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#">
                                        <Text size="textlg" as="p" className="text-[20px] font-normal !text-white-a700">
                                            Review
                                        </Text>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <Button className="flex h-[38px] min-w-[76px] flex-row items-center justify-center rounded-[18px] bg-white-a700 px-2.5 text-center text-[18px] text-red-900">
                        Sign in
                    </Button>
                </div>
            </header>
            <Tabs
                className="flex flex-col items-center self-stretch"
                selectedTabClassName="!text-blue-900"
                selectedTabPanelClassName="mt-[26px] mx-8 md:mx-0 !relative tab-panel--selected"
            >
                <Heading size="headinglg" as="h1" className="text-[40px] font-semibold md:text-[38px] sm:text-[36px]">
                    Design Your Muay Thai Experience
                </Heading>
                <TabList className="ml-64 mr-[272px] mt-[42px] flex items-start justify-between gap-16 self-stretch md:mx-0 sm:flex-col">
                    <Tab className="mb-2 ml-[26px] text-[20px] font-normal !text-blue-900 sm:mb-0 sm:ml-0 sm:px-5">
                        Muay Thai Gyms
                    </Tab>
                    <Tab className="flex sm:px-5">
                        <Img src="" width={32} height={30} alt="User" className="h-[30px]" />
                        <Text size="textlg" as="p" className="text-[20px] font-normal !text-blue-900">
                            Hotels/Apts
                        </Text>
                    </Tab>
                    <Tab className="flex sm:px-5">
                        <Img src="" width={32} height={30} alt="Grid" className="h-[30px]" />
                        <Text size="textlg" as="p" className="text-[20px] font-normal !text-blue-900">
                            Atractions
                        </Text>
                    </Tab>
                    <Tab className="text-[20px] font-normal text-blue-900 sm:px-5">Restaurants</Tab>
                </TabList>
                {[...Array(4)].map((_, index) => (
                    <TabPanel key={`tab-panel${index}`} className="absolute ms-8 mt-[26px] items-center self-stretch md:mx-0">
                        <div className="w-full self-stretch">
                            <div className="flex flex-col items-center gap-[86px] md:gap-16 sm:gap-[43px]">
                                <div className="relative mx-auto h-[58px] w-full max-w-[798px] content-center self-stretch md:h-auto md:px-5">
                                    <Input
                                        name="search"
                                        placeholder={`Province or Gyms Name`}
                                        value={searchBarValue1}
                                        onChage={(e) => setSearchBarValuse1(e.target.value)}
                                        prefix={
                                            <div className="flex h-[20px] w-[18px] items-center justify-center">
                                                <Img
                                                    src=""
                                                    width={18}
                                                    height={18}
                                                    alt="Rewind"
                                                    className="my-1 h-[18px] w-[18px] object-contain"
                                                />
                                            </div>
                                        }
                                        suffix={
                                            searchBarValue1?.length > 0 ? (
                                                <CloseSVG onClick={() => setSearchBarValuse1("")} height={18} width={18} />
                                            ) : null
                                        }
                                        className="flex h-[58px] flex-grow items-center justify-center gap-3.5 rounded-[28px] border-b-4 border-l border-r border-t border-solid border-blue-900_cc bg-white-a700 pl-[22px] pr-3 text-[18px] text-blue-900_b2 sm:pl-5"
                                    />
                                    <Button className="absolute bottom-0 right-[9px] top-0 my-auto flex h-max min-w-[112px] flex-row items-center justify-center rounded-[24px] bg-red-900 px-[22px] text-center text-[22px] font-medium text-white-a700 sm:px-5">
                                        Search
                                    </Button>
                                </div>
                                <div className="flex items-start gap-8 self-stretch md:flex-col">
                                    <div className="flex w-[22%] flex-col items-center rounded-[10px] border-[0.5px] border-solid border-vlack-900_3f bg-white-a700 p-1 md:w-full md:px-5">
                                        <div className="self-stretch">
                                            <div className="flex flex-col items-start gap-2.5">
                                                <Heading as="h2" className="text-[16px] font-semibold">
                                                    Muay Thai Gyms
                                                </Heading>
                                                <CheckBox
                                                    name="bangkok"
                                                    label="Bangkok"
                                                    id="bangkok"
                                                    className="ml-11 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                                                />
                                                <div className="ml-11 flex items-center gap-2.5 md:ml-0">
                                                    <Img src="" width={12} height={12} alt="Close" className="h-[12px]" />
                                                    <Text as="p" className="text-[16px] font-normal">
                                                        Bangkok
                                                    </Text>
                                                </div>
                                                <CheckBox
                                                    name="bangkok_two"
                                                    label="Bangkok"
                                                    id="bangkoktwo"
                                                    className="ml-11 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                                                />
                                                <CheckBox
                                                    name="bangkok_three"
                                                    label="Bangkok"
                                                    id="bangkokthree"
                                                    className="ml-11 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                                                />
                                                <div className="ml-11 flex items-center gap-2.5 md:ml-0">
                                                    <Img src="" width={12} height={12} alt="Close" className="h-[12px]" />
                                                    <Text as="p" className="text-[16px] font-normal">
                                                        Bangkok
                                                    </Text>
                                                </div>
                                                <CheckBox
                                                    name="bangkok_five"
                                                    label="Bangkok"
                                                    id="bangkokfive"
                                                    className="ml-11 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                                                />
                                                <CheckBox
                                                    name="bangkok_six"
                                                    label="Bangkok"
                                                    id="bangkoksix"
                                                    className="ml-11 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                                                />
                                                <div className="ml-11 flex items-center gap-2.5 md:ml-0">
                                                    <Img src="" width={12} height={12} alt="Close" className="h-[12px]" />
                                                    <Text as="p" className="text-[16px] font-normal">
                                                        Bangkok
                                                    </Text>
                                                </div>
                                                <CheckBox
                                                    name="bangkok_eight"
                                                    label="Bangkok"
                                                    id="bangkokeight"
                                                    className="ml-11 flex gap-2.5 text-[16px] text-red-900 md:ml-0"
                                                />
                                            </div>
                                        </div>
                                        <div className="ml-1 mt-[22px] h-[0.5px] self-stretch bg-black-900_3f md:ml-0" />
                                        <Heading as="h3" className="ml-1 mt-2.5 self-start text-[16px] font-semibold md:ml-0">
                                            Rating Score
                                        </Heading>
                                        <div className="mx-[42px] mb-9 mt-2.5 flex flex-col gap-2.5 self-stretch md:mx-0">
                                            <div className="flex items-center gap-[15px]">
                                                <div className="h-[14px] w-[14px] self-end rounded-md border border-solid border-red-900 bg-white-a700" />
                                                <Text as="p" className="text-[16px] font-normal">
                                                    5 only
                                                </Text>
                                            </div>
                                        </div>
                                        <CheckBox
                                            size="md"
                                            name="4andup"
                                            label="4 and up"
                                            id="andup1"
                                            className="flex gap-3 text-[16px] text-red-900"
                                        />
                                        <div className="flex items-start gap-3.5">
                                            <div className="h-[14px] w-[14px] rounded-md border border-solid border-red-900 bg-white-a700" />
                                            <Text as="p" className="self-center text-[16px] font-normal">
                                                3 and up
                                            </Text>
                                        </div>
                                        <div className="flex items-center gap-3.5">
                                            <div className="h-[14px] w-[14px] rounded-md border border-solid border-red-900 bg-white-a700" />
                                            <Text as="p" className="self-center text-[16px] font-normal">
                                                2 and up
                                            </Text>
                                        </div>
                                        <CheckBox
                                            size="md"
                                            name="1andup"
                                            label="1 and up"
                                            id="andup"
                                            className="flex gap-3 text-[16px] text-red-900"
                                        />
                                        <div className="flex items-center gap-3.5">
                                            <div className="h-[14px] w-[14px] self-end rounded-md border border-solid border-red-900 bg-white-a700" />
                                            <Text as="p" className="text-[16px] font-normal">
                                                All Ratings
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-cik items-center gap-[54px] self-center md:self-stretch md:px-5 sm:gap-[27px]">
                                    <div className="grid grid-cols-3 justify-center gap-11 self-stretch md:grid-cols-2 sm:grid-cols-1">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                            {additionalCampInfoGrid.map((d, index) => (
                                                <DetailCampsColumn {...d} key={"gridkrudam + index"} />
                                            ))}
                                        </Suspense>
                                    </div>
                                    <div className="flex w-[18%] items-center justify-center gap-3.5 md:w-full">
                                        <Img
                                            src=""
                                            width={24}
                                            height={26}
                                            alt="Arrowleft"
                                            className="h-[26px] self-end"
                                        />
                                        <Button className="flex h-[34px] flex-1 flex-row items-center justify-center rounded-[16px] bg-red-900 px-3.5 text-center text-[16px] font-medium text-white-a700">
                                            1
                                        </Button>
                                        <Button className="flex h-[34px] flex-1 flex-row items-center justify-center rounded-[16px] bg-black-900_3f px-3.5 text-center text-[16px] font-medium text-white-a700">
                                            2
                                        </Button>
                                        <Img
                                            src=""
                                            width={24}
                                            height={26}
                                            alt="Arrowright"
                                            className="h-[26px] self-end"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </TabPanel>
                ))}

                <DetailBarMuayThaiGymsSection />
            </Tabs>
        </div>
    );
} 
