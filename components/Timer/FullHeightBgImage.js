'use client'
import React from 'react'
import Image from 'next/image'
import IphoneFullHeightMobile from '@/public/assets/images/iphone-full-height-timer.webp'
import IphoneFullHeight from '@/public/assets/images/iphone-full-height-timer-desktop.webp'
import {useIsLargeScreen} from '@/components/Hooks/useMediaQuery'
import Button from '@/components/UI/Button/Button'
import {FaApple} from 'react-icons/fa'
import {TiVendorAndroid} from 'react-icons/ti'

const FullHeightBgImage = (props) => {
    const isLargeScreen = useIsLargeScreen()
    return (
        <div className={'mt-[92px] md:mt-[120px] md:px-4 '}>
            <div
                className={
                    'flex flex-col items-center mb-[92px] md:mb-[120px] text-center px-4 max-w-[350px] md:max-w-full mx-auto'
                }
            >
                <p className={'text-sm mb-4 text-black/20'}>{props.subTitle}</p>
                <h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
            </div>

            <div
                className={
                    'h-[820px]  lg:h-[535px] relative md:rounded-medium md:overflow-hidden'
                }
            >
                <div
                    className={
                        'absolute  z-[5] flex flex-col items-center lg:items-center lg:justify-center w-full px-4 pt-4 lg:h-full lg:grid lg:grid-cols-2'
                    }
                >
                    <div></div>
                    <div className={'lg:pr-0'}>
            <span
                className={`lg:text-left text-center text-white whitespace-pre-line `}
            >
                {props.imageTitle}
            </span>
                        <div className={`flex space-x-4 mt-6`}>
                            <Button
                                variant={'white'}
                                link={'https://apps.apple.com/fr/app/timer-by-athletid/id1660216893?l=en'}
                                content={
                                    <div className={'flex space-x-2 items-center'}>
                                        <FaApple color={'white'} size={20}/>
                                        <div>App Store</div>
                                    </div>
                                }
                            />
                            <Button
                                variant={'white'}
                                link={'https://play.google.com/store/apps/details?id=com.athletid.timerapp'}
                                content={
                                    <div className={'flex space-x-2 items-center'}>
                                        <TiVendorAndroid color={'white'} size={22}/>
                                        <div>Play Store</div>
                                    </div>
                                }
                            />
                        </div>
                    </div>
                </div>
                <Image
                    fill
                    src={isLargeScreen ?  IphoneFullHeight : IphoneFullHeightMobile}
                    className={'object-cover object-center lg:object-left'}
                    alt={''}
                    priority={true}
                    sizes="100vw"
                />
            </div>
        </div>
    )
}

export default FullHeightBgImage;