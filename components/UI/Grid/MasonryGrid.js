'use client'
import React from 'react'
import Masonry from 'react-masonry-css'
import Image from 'next/image'
import Button from "@/components/UI/Button/Button";
import useMediaQuery, {useIsMobile, useIsTablet} from "@/components/Hooks/useMediaQuery";
import {useTranslations} from "next-intl";

const breakpointColumnsObj = {
    default: 7,
    1024: 3,
    768: 2,
}


const MasonryGrid = ({items, ...props}) => {

    const isTablet = useIsTablet();
    const isMobile = useIsMobile();
    const  t  = useTranslations('home')

    return (
        <div className={'lg:px-0 px-4 max-w-[350px] md:max-w-[1170px] lg:max-w-[100vw] mx-auto'}>
            <div className={`lg:-mb-[2%] mt-[92px] lg:mt-[120px] mb-[72px]`}>
                <div className={'text-center '}>
                    <div className={'flex flex-col items-center'} id={'titleMasonry'}>
                        <h2 style={{whiteSpace: "pre-line"}} className={''}>{props.titleMasonry}</h2>
                        <p style={{whiteSpace: "pre-line"}}
                           className={'mt-3 mb-6'}>{props.subTitleMasonry}</p>
                        <Button variant={"black"} content={t("buttons.discover")} link={"/about"}/>
                    </div>
                </div>
            </div>

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex space-x-4  relative"
                columnClassName="custom-grid-column"
            >
                {items.slice(0, isTablet ? 9 : isMobile ? 6 : 20).map((item, index) => (


                    <div key={index} className={`relative odd:h-[175px] even:h-[350px] grid-item mb-4`}>
                        <Image
                            alt={""}
                            fill
                            src={item}
                            sizes={"50vw"}
                            className={`rounded-medium object-cover`}
                        />
                    </div>
                ))}
            </Masonry>
        </div>
    );
};

export default MasonryGrid;
