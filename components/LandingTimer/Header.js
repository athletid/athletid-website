'use client'
import React from 'react'
import Image from 'next/image'
import DownloadApp from '@/components/LandingTimer/DownloadApp'
import {useIsFromTablet, useIsMobile} from '@/components/Hooks/useMediaQuery'
import Ratings from '@/components/LandingTimer/Ratings'
import AnimatedBanner from "@/components/LandingTimer/AnimatedBanner";

const Header = (props) => {
	const isMobile = useIsMobile()
	const isFromTablet = useIsFromTablet();
	
	return (
		<div className={'flex flex-col relative '}>
			
			<div className={'max-w-[1170px]  w-full mx-auto relative '}>
				<Image
					src={'/assets/images/logo-timer.webp'}
					className={'!my-[20px] mx-auto md:hidden'}
					width={80}
					height={100}
					alt={'Logo timer'}
				/>
				<Image className={'md:block hidden fixed top-4 right-4 z-[999]'} src={"/assets/images/QRCo.webp"}
				       width={175} height={175} alt={"Download Timer app"}/>
			</div>
			<div
				className={
					'relative h-[320px] md:h-[620px] w-screen  md:order-last md:mt-[100px]'
				}
			>
				<Image src={isMobile && props.mobileImg ? props.mobileImg : props.img} fill
				       className={`object-cover ${props.objectPosition}`} alt={''}/>
				{props.mockupImg && isFromTablet ?
					(<Image src={props.mockupImg} width={251} height={508} sizes={"100"}
					        className={`absolute transform -translate-y-1/2 top-1/2 right-40 lg:right-64 z-[99]`}
					        alt={''}/>) :
					
					<Image src={props.mobileMockupImg ? props.mobileMockupImg : props.mockupImg} width={130}
					       height={264}
					       className={`absolute transform -translate-y-1/2 top-1/2 right-12 z-[99]`}
					       alt={''}/>
				}
			</div>
			{isMobile && <AnimatedBanner className={'!mt-0'}/>}
			<div
				className={
					'flex flex-col md:space-y-[24px] items-center text-center mt-[42px] order-[0] max-w-[370px] md:max-w-full px-4 mb-2 mx-auto'
				}
			>
				<Image
					src={'/assets/icons/logo-timer.svg'}
					className={'!mb-[12px] md:block hidden'}
					width={150}
					height={100}
					alt={'Logo timer'}
				/>
				{isMobile && props.mobileTitle ? props.mobileTitle : props.title}
			</div>
			<DownloadApp className={'md:order-2 max-w-[370px] md:max-w-[1170px] px-4 mx-auto'}
			             title={isMobile && props.mobileDownloadAppTitle ? props.mobileDownloadAppTitle : props.downloadAppTitle}/>
			<Ratings className={'order-3'}/>
		</div>
	)
}

export default Header
