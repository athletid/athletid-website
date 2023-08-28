'use client'
import Button from '../UI/Button/Button'
import Image from 'next/image'
import FooterAboutImage from '@/public/assets/images/footer-about-image.webp'
import Link from 'next/link'
import {useIsFromTablet} from '@/components/Hooks/useMediaQuery'
import React from "react";
import {useTranslations} from "next-intl";

const Footer = () => {
    const isFromTablet = useIsFromTablet()
    const t  = useTranslations('footerAbout')
    const u = useTranslations('footer')
    const v = useTranslations('uiComponents')
    

    return (
        <footer
            className={
                'mt-[92px] md:mt-[120px] bg-black text-white flex items-end pt-[90px] md:pt-[75px] lg:pt-[150px] pb-[34px]'
            }
        >
            <div
                className={
                    ' px-4 max-w-[350px] md:max-w-[1170px] mx-auto flex flex-col items-center'
                }
            >
                <div className={'grid md:grid-cols-[2fr_1fr] md:mb-[50px]'}>
                    <div
                        className={
                            'flex flex-col md:items-start md:justify-center items-center md:text-left text-center mb-[72px] md:mb-0 md:mr-[130px]'
                        }
                    >
                        <h2 className={''}>
                            {t("title")}
                        </h2>
                        <p className={'mt-4 mb-6'}>
                            {t("subTitle")}
                        </p>
                        <Button
                            variant={'red'}
                            targetBlank
                            link={'mailto:contact@athletid.com'}
                            content={v("buttons.contact-us")}
                            className={'!w-full md:!w-fit'}
                        />
                    </div>
                    <div
                        className={
                            'h-[250px] w-full md:h-[525px] relative mb-8  rounded-medium overflow-hidden'
                        }
                    >
                        <div
                            className={
                                'absolute z-[3] h-full w-full gradient-linear-background-black '
                            }
                        ></div>
                        <Image
                            src={FooterAboutImage}
                            fill
                            sizes={"70vw"}
                            className={'object-cover z-[1] object-top'}
                            alt={''}
                        />
                    </div>
                </div>

                <div
                    className={
                        'flex md:flex-row flex-col items-center md:items-start col-span-2 justify-between w-full space-y-4 md:space-y-0'
                    }
                >
                    <Image
                        className={'md:mb-0 mb-8'}
                        src={'/assets/icons/white-logo.svg'}
                        sizes={"10vw"}
                        alt={''}
                        width={isFromTablet ? 110 : 90}
                        height={isFromTablet ? 40 : 30}
                    />
                    <div
                        className={
                            'flex  flex-col items-center md:items-end md:justify-end space-y-3 md:space-x-6'
                        }
                    >
                        <div className={'flex space-x-6 text-sm'}>
                            <Link href={'/'}>{u('links.home')}</Link>
                            <Link href={'/timer'}>Timer</Link>
                            <Link href={'/athletid'}>Athletid</Link>
                            <Link href={'/blog'}>Blog</Link>
                            <Link href={'/about'}>{u('links.about')}</Link>
                        </div>
                        <div
                            className={'flex justify-between w-full text-white/40 text-sm md:text-base'}
                        >
                            <Link href={'/contact'}>Contact</Link>
                            <Link href={'/privacy-policy'}>{u('links.privacy-policy')}</Link>
                            <Link href={'/terms-of-service'}>{u('links.terms-of-service')}</Link>
                        </div>
                        <p className={'text-center text-white/40 !mt-8'}>
                            {u('copyright')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer