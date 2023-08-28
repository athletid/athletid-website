'use client'
import React from 'react';
import Image from "next/image";
import TimerDashboardDiagonal from "@/public/assets/images/timer-athletid-dashboard-diagonal.webp";

const CardImageBottomFull = (props) => {
    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col lg:justify-between h-[500px] md:h-[420px] p-4 md:p-8 md:pr-0 md:pb-0 pr-0 md:pb-0 pb-0 relative'
            }
        >
            <div
                className={
                    'flex md:flex-col'
                }
            >
                <div className={'space-y-4 flex flex-col md:justify-between '}>
                    <div className={' md:mb-4 flex flex-col items-center'}>
                        <span className={'md:text-left font-medium w-full lg:text-[30px] lg:leading-[34px]' }>
                            {props.title}
                        </span>
                        <span className={'md:text-left text-black/[16%] w-full lg:text-[30px] lg:leading-[34px]'}>
                            {props.subTitle}
                        </span>
                    </div>
                </div>
            </div>
            <div className={'absolute bottom-0 w-full'}>
                <div className={'w-full flex justify-end  h-[380px] md:h-[250px] lg:h-[300px] relative'}>
                    <Image
                        className={'object-cover object-top'}
                        src={TimerDashboardDiagonal}
                        alt={''}/>
                </div>
            </div>
        </div>
    );
};

export default CardImageBottomFull;