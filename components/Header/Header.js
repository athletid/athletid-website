'use client'
import React from 'react'
import Image from 'next/image'
import Tag from '@/components/UI/Tag'
import Button from '@/components/UI/Button/Button'
import {FaApple} from 'react-icons/fa'
import {TiVendorAndroid} from 'react-icons/ti'
import CircleSpinner from '@/components/UI/Spinner/CircleSpinner'
import {useIsMobile} from '@/components/Hooks/useMediaQuery'
import {useTranslations} from "next-intl";

const Header = (props) => {
    const isMobile = useIsMobile()
    const  t  = useTranslations('uiComponents')
    const  u  = useTranslations('home')

    return (
        <header
            className={`relative flex justify-center bg-greyShade overflow-hidden md:min-h-screen  py-[140px]`}
        >
            <div
                className={
                    'flex md:grid md:grid-cols-2 flex-col  items-center w-screen max-w-[1170px] mx-auto justify-between md:justify-start'
                }
            >
                <div
                    className={
                        'flex flex-col items-center md:items-start md:justify-center max-w-[350px] md:max-w-full px-4 '
                    }
                >
                    {props.buttons === 'downloadButton' && (
                        <Tag variant={'black'} text={t('tags.available')}/>
                    )}
                    <h1
                        className={`md:text-left text-center text-black white whitespace-pre-line my-3`}
                    >
                        {props.title}
                    </h1>
                    <p
                        className={`text-black md:text-left text-center text-xs md:text-base mb-6`}
                    >
                        {props.subTitle}
                    </p>
                    {props.buttons === 'downloadButton' ? (
                        <div className={`flex space-x-4 whitespace-nowrap`}>
                            <Button
                                variant={'black'}
                                link={'https://apps.apple.com/fr/app/timer-by-athletid/id1660216893?l=en'}
                                content={
                                    <div className={'flex space-x-2 items-center'}>
                                        <FaApple color={'black'} size={20}/>
                                        <div>App Store</div>
                                    </div>
                                }
                            />
                            <Button
                                variant={'black'}
                                link={'https://play.google.com/store/apps/details?id=com.athletid.timerapp'}
                                content={
                                    <div className={'flex space-x-2 items-center'}>
                                        <TiVendorAndroid color={'black'} size={22}/>
                                        <div>Play Store</div>
                                    </div>
                                }
                            />
                        </div>
                    ) : (
                        <Button
                            variant={isMobile ? 'redOutline' : 'red'}
                            link={props.link}
                            content={u('header.button')}
                            className={'mt-6 md:!mt-16'}
                        />
                    )}
                </div>

                <div
                    className={
                        `h-[550px] md:h-3/4 w-screen md:w-[52%]   lg:-right-12 md:bottom-0 md:right-0 relative md:absolute mt-[32px] md:mt-0`
                    }
                >
                    {props.imageSrc === '' ? (
                        <CircleSpinner/>
                    ) : (
                        <Image
                            src={props.imageSrcMobile  ? props.imageSrcMobile : props.imageSrc}
                            className={`${props.imageClassName} `}
                            alt={''}
                            fill
                            sizes={"(max-width:768px) 100vw, 60vw"}
                            priority={true}
                        />
                    )}
                </div>
            </div>
        </header>
    )
}

export default Header
