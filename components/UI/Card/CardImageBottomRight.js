'use client'
import React from 'react'
import Tag from '@/components/UI/Tag'
import Button from '@/components/UI/Button/Button'
import Image from 'next/image'
import TimerDashboard from '@/public/assets/images/homeTimer.webp'
import {useTranslations} from "next-intl";

const CardImageBottomRight = (props) => {

    const  t  = useTranslations('home')

    return (
        <div
            className={
                'rounded-medium overflow-hidden bg-greyShade  flex flex-col justify-between lg:flex-row  relative  h-[500px] md:h-[420px] p-4 pb-0 lg:pb-8'
            }
        >
            <div className={'flex md:items-start md:flex-col md:justify-between'}>
                <div className={'flex flex-col md:justify-between justify-center'}>
                    <div className={' md:mb-4 flex flex-col lg:w-full'}>
                        <Tag text={t("tags.available")} variant={'black'}/>
                        <span className={'font-medium whitespace-no-wrap mt-4 mb-2 md:mb-0  md:text-3xl xl:text-[32px]'}>{props.title}</span>
                        <span className={'font-medium text-black/20 whitespace-no-wrap md:text-3xl xl:text-[32px]'}>{props.subTitle}</span>
                    </div>
                </div>
                <div>
                    <Button
                        className={'absolute  bottom-4 md:left-4 md:right-0 right-4'}
                        text={'Lorem'}
                        variant={'red'}
                        link={'/timer'}
                        content={t("buttons.discover")}
                    />
                </div>
            </div>
            <div
                className={
                    'lg:justify-end  md:justify-start justify-center h-full  md:h-[400px] md:max-w-full w-full lg:w-[300px] lg:h-[220px]  relative mx-auto lg:absolute lg:bottom-0 lg:right-8 transform -translate-x-8 md:-translate-x-4'
                }
            >
                <Image
                    className={
                        'md:px-0  absolute md:relative  bottom-0 object-cover object-bottom md:object-right-top'
                    }
                    src={TimerDashboard}
                    alt={''}
                />
            </div>
        </div>
    )
}

export default CardImageBottomRight;