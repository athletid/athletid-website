'use client'
import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import HamburgerMenu from './Burger'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import Image from 'next/image'
import {useIsLargeScreen} from '@/components/Hooks/useMediaQuery'
import Div100vh from "react-div-100vh";
import {useTranslations} from 'next-intl'
import {usePathname, useRouter} from "next/navigation";

const Navbar = (props) => {
	const t = useTranslations('navbar')
	const [click, setClick] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	
	const pathname = usePathname();
	
	const handleClick = () => setClick(!click)
	
	const isLargeScreen = useIsLargeScreen()
	
	useEffect(() => {
		click
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'visible')
	}, [click])
	
	useEffect(() => {
		function handleScroll() {
			if (window.scrollY > 0) {
				setIsScrolled(true)
			} else {
				setIsScrolled(false)
			}
		}
		
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])
	
	useEffect(() => {
		setClick(false)
	}, [pathname]);
	
	return (
		<div
			className={`fixed z-[999] w-screen lg:py-6 py-4  top-0 ${
				isScrolled ? 'bg-white' : ''
			} duration-500`}
		>
			<div className={'flex max-w-[1170px] px-4 mx-auto justify-between'}>
				<div>
					<Link href="/" className={``}>
						<Image
							src={'/assets/icons/logo-athletid.svg'}
							width={isLargeScreen ? 110 : 120}
							height={isLargeScreen ? 38 : 120}
							alt=""
							sizes={"10vw"}
						/>
					</Link>
				</div>
				
				<div className={`justify-end items-center w-full flex`}>
					<div className={'lg:block hidden space-x-[60px]'}>
						<Link href="/">{t("links.home")}</Link>
						<Link href="/timer">Timer</Link>
						<Link href="/athletid">Tracking</Link>
						<Link href="/blog">Blog</Link>
						<Link href="/about">{t("links.about")}</Link>
						<Link href="/contact">Contact</Link>
					</div>
					
					<Div100vh
						className={
							click
								? 'fixed bg-white duration-[1300ms] w-screen top-0 left-0 bottom-0 overflow-hidden z-[400]'
								: 'bg-white invisible opacity-0 duration-[300ms] absolute w-screen top-0 left-0 bottom-0 overflow-visible'
						}
					>
						<div
							className={
								click
									? 'lg:fixed-center-element absolute-vertical-center flex lg:space-x-40 w-full web'
									: 'hidden'
							}
						>
							<ul
								className={
									'text-left space-y-4 mx-auto'
								}
							>
								<li
									className={'text-[20px] lg:text-[14px]  font-bold lg:!-mb-4'}
								>
									Menu
								</li>
								<li className={'text-[38px] opacity-60'}>
									<Link href="/">{t("links.about")}</Link>
								</li>
								<li className={'text-[38px] opacity-60'}>
									<Link href="/timer">Timer</Link>
								</li>
								<li className={'text-[38px] opacity-60'}>
									<Link href="/athletid">Tracking</Link>
								</li>
								<li className={'text-[38px] opacity-60'}>
									<Link href="/blog">Blog</Link>
								</li>
								<li className={'text-[38px] opacity-60'}>
									<Link href="/about">{t("links.about")}</Link>
								</li>
								<li className={'text-[38px] opacity-60'}>
									<Link href="/contact">Contact</Link>
								</li>
								<li
									className={
										'lg:hidden flex  space-x-8 z-300 !text-[1.3em] pt-4'
									}
								>
									<a
										target={'_blank'}
										href="https://www.instagram.com/athletid/"
										rel="noreferrer"
									>
										<FaInstagram color={'black'} size={18}/>
									</a>
									<a
										target={'_blank'}
										href="https://www.linkedin.com/company/athletid/"
										rel="noreferrer"
									>
										<FaFacebook color={'black'} size={18}/>
									</a>
									<a
										target={'_blank'}
										href="https://www.facebook.com/TimerByAthletid"
										rel="noreferrer"
									>
										<FaLinkedin color={'black'} size={18}/>
									</a>
								</li>
							</ul>
						</div>
					</Div100vh>
				</div>
				<div className={'z-[900] w-[2rem] lg:hidden'} onClick={handleClick}>
					{click ? <HamburgerMenu/> : <HamburgerMenu/>}
				</div>
			</div>
		</div>
	)
}

export default Navbar