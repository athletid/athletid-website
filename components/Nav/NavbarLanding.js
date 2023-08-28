'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useIsLargeScreen } from '@/components/Hooks/useMediaQuery'
import { useTranslations } from 'next-intl'

const NavbarLanding = (props) => {
	const { t } = useTranslations('navbar')
	const [click, setClick] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)
	
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
	
	return (
		<div
			className={`fixed z-[999] w-screen lg:py-6 py-4  top-0 ${
				isScrolled ? 'bg-white' : ''
			} duration-500`}
		>
			<div className={'flex max-w-[1170px] px-4 mx-auto justify-center'}>
				<div>
					<Link href="#" className={``}>
						<Image
							src={'/assets/icons/logo-athletid.svg'}
							width={isLargeScreen ? 110 : 120}
							height={isLargeScreen ? 38 : 120}
							alt=""
							sizes={'10vw'}
						/>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default NavbarLanding
