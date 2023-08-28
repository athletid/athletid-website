'use client'
import React from 'react'
import Button from '@/components/UI/Button/Button'
import Tag from '@/components/UI/Tag'
import Image from 'next/image'
import CaptorReverseLarge from '@/public/assets/images/captor-reverse-large.webp'
import {useTranslations} from "next-intl";

const HeaderAthletid = (props) => {

    const t = useTranslations('uiComponents')


    return (
        <div className={'relative'}>
            <div
                className={
                    'absolute w-full transform left-1/2 -translate-x-1/2 mx-auto '
                }
            >
                <div className={'absolute h-full w-full white-inner-shadow z-[9]'}>

                </div>
                <div className={'h-[1350px] xl:h-[1690px] relative '}>
                    <Image
                        fill
                        sizes={"100vw"}
                        priority={true}
                        src={CaptorReverseLarge}
                        className={'object-cover object-top md:object-center w-full '}
                        alt={''}
                    />
                </div>
            </div>
            <div className={'h-[900px]  xl:h-[1200px] w-screen mx-auto relative'}>
                <div
                    className={
                        'pt-[150px] px-4 max-w-[350px] md:max-w-[1280px] mx-auto w-full absolute flex flex-col items-center z-[50] transform -translate-x-1/2 left-1/2'
                    }
                >
                    <Tag text={t('tags.soon-available')} variant={'black'}/>
                    <h1
                        className={`text-center text-black white whitespace-pre-wrap mt-3 mb-6`}
                    >
                        {props.title}
                    </h1>
                    <div className={`flex md:justify-start justify-center space-x-4 `}>
                        <Button
                            className={'text-[16px]'}
                            variant={'red'}
                            link={'/athletid/#newsletter'}
                            content={t('buttons.join-the-waiting-list')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAthletid