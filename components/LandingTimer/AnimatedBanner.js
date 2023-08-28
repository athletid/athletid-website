'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'

const AnimatedBanner = (props) => {
	return (
		<Marquee
			className={`bg-timeRed text-white md:flex mt-[65px] md:mt-0 !text-[20px] md:!text-[34px] !font-normal py-2 ${props.className} hidden `}>
			<div className={'ml-[110px]'}> 7 DAYS FREE TRIAL SUBSCRIPTION FOR NEW USERS 🎁&nbsp;</div>
			<div className={'ml-[110px]'}> 7 DAYS FREE TRIAL SUBSCRIPTION FOR NEW USERS 🎁&nbsp;</div>
			<div className={'ml-[110px]'}> 7 DAYS FREE TRIAL SUBSCRIPTION FOR NEW USERS 🎁&nbsp;</div>
			<div className={'ml-[110px]'}> 7 DAYS FREE TRIAL SUBSCRIPTION FOR NEW USERS 🎁&nbsp;</div>
			<div className={'ml-[110px]'}> 7 DAYS FREE TRIAL SUBSCRIPTION FOR NEW USERS 🎁&nbsp;</div>
		</Marquee>
	)
}

export default AnimatedBanner
