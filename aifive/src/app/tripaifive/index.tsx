"use client";

import { Img, Text, BreadcrumbLink, Breadcrumb, BreadcrumbItem, Heading} from "../../components";
import Header from "../../components/Header";
import TripAISection from "./TripAISection";
import Link from "next/link";
import React from "react";
import { TabList, Tab, Tabs} from "react-tabs";

export default function TripAISection(){
    return (
        <div className="flex w-full flex-col gap-[34px] bg-white-a700">
            <Header />
            <Tabs
                className="flex flex-col items-center self stretch"
                selectedTabClassName="!text-blue-900"
                selectedTabPanelClassName="tab-panel--selected"
            >
                <div className="mx-auto flex w-full max-w-[1082px] flex-col items-start self-stretch md:px-5">
                    <Text as="p" className="text-[20px] font-normal">
                        Recommended Just For You
                    </Text>
                    <Heading as="h1" className="mt-2.5 text-[28px] font-medium md:text-[26px] sm:text-[24px]">
                        Trainer Gae Trips
                    </Heading>
                    <Breadcrumb
                        separator={<Text className="h-[30px] w-[5.71px] text-[20px] fonr-normal">/</Text>}
                        className="mt-2.5 flex flex-wrap gap-[34px] self-stretch"
                    >
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#" as={Link}>
                            <Text as="p" className="text-[20px] font-normal">
                                Type
                            </Text>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#" as={Link}>
                            <Text as="p" className="text-[20px] font-normal">
                                Level
                            </Text>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#" as={Link}>
                            <Text as="p" className="text-[20px] font-normal">
                                Dates
                            </Text>
                            </BreadcrumbLink>
                        </BreadcrumbItem>        
                    </Breadcrumb>
                    <TabList className="mt-8 flex flex-wrap items-start gap-[70px] self-stretch md:gap-5">
                        <Tab className="mb-2.4 text=[20px] font-medium text-blue-900">About Gyms</Tab>
                        <Tab className="text-[20px] font-medium text-blue-900">Accommodation</Tab>
                        <Tab className="text-[20px] font-medium text-blue-900">Food</Tab>
                        <Tab className="text-[20px] font-medium text-blue-900">Attractions</Tab>
                        <Tab className="text-[20px] font-medium text-blue-900">Map</Tab>
                    </TabList>
                    <div  className="h-[1.5px] w-[94%] bg-blue-900_66"/>
                </div>
                {/*trips a i section */}
                <TripAISection />
                <Img 
                    src=""
                    width={1280}
                    height={232}
                    alt="Rectangle 26"
                    className="mt=[416px] h-[232px] w-full object-cover md:h-auto"
                />
            </Tabs>
        </div>
    );
}