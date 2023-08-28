'use client'
import React from 'react'
import Image from 'next/image'
import CaptorVertical from '@/public/assets/images/captor-vertical.webp'
import CaptorDiagonal from '@/public/assets/images/captor-diagonal.webp'
import Link from 'next/link'
import {useIsFromTablet} from '@/components/Hooks/useMediaQuery'
import Newsletter from '@/components/Footer/Newsletter'
import {useTranslations} from "next-intl";

const Footer = () => {
	const isFromTablet = useIsFromTablet()
	const t = useTranslations('footer')
	
	return (
		<footer
			id={'footer'}
			className={
				'mt-[92px] md:mt-[120px] bg-black text-white flex items-end pt-[90px] md:pt-[75px] lg:pt-[150px] pb-[34px] w-full'
			}
		>
			<div
				className={
					' px-4 max-w-[350px] md:max-w-[1170px] mx-auto flex flex-col items-center'
				}
			>
				<div className={'grid md:grid-cols-2 md:mb-[50px]'}>
					<div
						className={
							'flex flex-col md:items-start md:justify-center items-center md:text-left text-center mb-[72px] md:mb-0'
						}
					>
						<h2 className={'whitespace-pre-line'}>{t('title')}</h2>
						<p className={'mt-4 mb-6'}>{t('subTitle')}</p>
						<Newsletter/>
					</div>
					<div
						className={
							'h-[300px] md:h-[450px] lg:h-[600px] w-full relative mb-8 mx-auto'
						}
					>
						<div
							className={
								'absolute z-[3] h-full w-full gradient-linear-background-black md:hidden'
							}
						></div>
						<Image
							src={isFromTablet ? CaptorDiagonal : CaptorVertical}
							fill
							sizes="(max-width: 768px) 100vw,
                            50vw"
							className={'absolute object-cover z-[1] object-top'}
							alt={''}
						/>
					</div>
				</div>
				
				<div
					className={
						'flex md:flex-row flex-col items-center md:items-start col-span-2 justify-between space-y-4 md:space-y-0 w-full'
					}
				>
					<Image
						className={'md:mb-0 mb-8 w-auto'}
						src={'/assets/icons/white-logo.svg'}
						alt={''}
						width={isFromTablet ? 110 : 90}
						height={isFromTablet ? 40 : 30}
						sizes={'10vw'}
					/>
					<div
						className={
							'flex  flex-col items-center md:items-end md:justify-end space-y-3 md:space-x-6 text-sm md:text-base'
						}
					>
						<div className={'flex space-x-6'}>
							<Link href={'/'}>{t('links.home')}</Link>
							<Link href={'/timer'}>Timer</Link>
							<Link href={'/athletid'}>Athletid</Link>
							<Link href={'/blog'}>Blog</Link>
							<Link href={'/about'}>{t('links.about')}</Link>
						</div>
						<div
							className={'flex justify-between w-full text-white/40 text-sm md:text-base'}
						>
							<Link href={'/contact'}>Contact</Link>
							<Link href={'/privacy-policy'}>{t('links.privacy-policy')}</Link>
							<Link href={'/terms-of-service-timer'}>{t('links.terms-of-service')}</Link>
						</div>
						<p className={'text-center text-white/40 !mt-8'}>
							{t('copyright')}
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
