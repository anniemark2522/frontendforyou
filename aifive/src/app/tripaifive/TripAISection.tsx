import { GoogleMap,Text } from "../../components";
import UserProfile from "../../components/UserProfile";
import React, {Suspense} from "react";
import {TabPanel} from "react-tabs";

const hotelList = [
    {
        userImage: "img_img_6.png",
        userName: "Speck Bangkok",
        userReviewCount:"877 reviews",
        settings: "img_settings_blue_900.svg",
        userAmenities:(
            <>
                Free Wi-Fi Free breakfast
                <br />
                <br />
                Air conditioning
                <br />{" "}
            </>
        ),
    },
    {
        userImage: "img_img_150X186.png",
        userName: "THONGLOR",
        userReviewCount:"877 reviews",
        settings: "img_tabler_air_cond.svg",
        userAmenities:(
            <>
                Free Wi-Fi Free breakfast
                <br />{" "}
            </> 
        ),
    },
    {
        userImage: "img_img_150X186.png",
        userName: "THONGLOR",
        userReviewCount:"877 reviews",
        settings: "img_tabler_air_cond.svg",
        userAmenities:(
            <>
                Free Wi-Fi Free breakfast
                <br />{" "}
            </> 
        ),
    },
    {
        userImage: "img_img_150X186.png",
        userName: "THONGLOR",
        userReviewCount:"877 reviews",
        settings: "img_tabler_air_cond.svg",
        userAmenities:(
            <>
                Free Wi-Fi Free breakfast
                <br />{" "}
            </> 
        ),
    };
];

export default function TripAISection() {
    return(
        <>
        {/*trips a i section */}
        <div className="mx-auto mt-8 w-fukk max-w-[1234px] self-stretch md:px-5">
            {[...Array(5)].map((_,index) => (
                <TabPanel key={`tab=panel${index}`} className="absolute justify-center">
                    <div className="w-full">
                        <div className="flex items-stert justify-center md:flex-col">
                            <div className="relative z-[7] mt-1 flex flex-wrap gap-2.5">
                                <Text size="texts" as="p" className="px-6 py-0.5 text-[16px] font-normal !text-red-900 sm:px-5">
                                    Hotels
                                </Text>
                                <Text size="texts" as="p" className="px-6 py-0.5 text-[16px] font-normal !text-red-900 sm:px-5">
                                Apartments
                                </Text>
                            </div>
                            <div className="relative ml-[-230px] flex flex-1 items-center md:ml-0 md:flex-col md:self-stretch">
                                <div className="relative z-[1] flex w-[40%] flex-col gap-1 self-end md:w-full">
                                    <Suspense fallback={<div>Loading feed...</div>}>
                                        {hotelList.map((d, index)=> (
                                            <UserProfile {...d} key={"group109" + index} className="mr-1.5 md:mr-0 sm:flex-col" />
                                        ))}
                                    </Suspense>
                                </div>
                                <GoogleMap 
                                    showMarker={false}
                                    className="relative ml-[-6px] h-[686px] flex-1 rounded md:ml-0 md:self-stretch"
                                />
                            </div>
                        </div>
                    </div>
                </TabPanel>
            ))}
        </div>
        </>
    );
}