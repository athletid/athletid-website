'use client'
import React from 'react'
import Newsletter from '@/components/Footer/Newsletter'
import Image from 'next/image'
import AppScreen from '@/public/assets/images/timer-v2-header-desktop.webp'
import { useIsMobile } from '@/components/Hooks/useMediaQuery'

const FooterLanding = () => {
	const isMobile = useIsMobile()
	return (
		<footer
			id={'footer'}
			className={
				'mt-[92px] md:mt-[120px] bg-greyShade text-white  w-full relative h-[700px] md:h-[480px] lg:h-[750px] overflow-hidden'
			}
		>
			<div
				className={
					'px-4 max-w-[350px] md:max-w-[1170px] h-full w-full mx-auto relative'
				}
			>
				<div
					className={
						'flex flex-col md:items-start md:justify-center items-center md:text-left text-center  md:mb-0 !text-black  absolute transform md:-translate-y-1/2 md:top-1/2 top-[88px]'
					}
				>
					<Image
						width={isMobile ? 84 : 115}
						height={isMobile ? 28 : 38}
						src={'/assets/images/logo-timer.webp'}
						className={'block md:hidden mb-6'}
						alt={'Logo Athletid'}
					/>
					<h2 className={'whitespace-pre-line'}>Stay informed</h2>
					{isMobile ? (
						<p className={'mt-4 mb-6'}>
							Subscribe to our newsletter and keep up to date with all the
							latest news straight to your inbox.
						</p>
					) : (
						<p className={'mt-4 mb-6'}>
							Subscribe to our newsletter and keep up to date with all the
							<br /> latest news straight to your inbox.
						</p>
					)}
					<Newsletter variant={true} />
				</div>
			</div>
			
			<div
				className={
					'absolute md:right-0 transform bottom-0 md:top-0 right-0'
				}
			>
				<div
					className={
						'relative h-[300px] md:h-[700px] lg:h-[810px] w-[350px] md:w-[40vw] lg:w-[50vw] mx-auto'
					}
				>
					<Image
						src={AppScreen}
						fill
						className={
							'object-cover md:object-contain object-top md:object-right'
						}
						alt={'Timer by Athletid'}
					/>
				</div>
			</div>
			
			<Image
				width={isMobile ? 84 : 115}
				height={isMobile ? 28 : 38}
				src={'/assets/images/logo-timer.webp'}
				className={'absolute transform -translate-x-1/2 left-1/2 bottom-[35px] hidden md:block'}
				alt={'Logo Athletid'}
			/>
		</footer>
	)
}

export default FooterLanding
