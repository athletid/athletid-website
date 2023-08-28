'use client'
import React from 'react'
import Image from 'next/image'
import {useIsMobile} from "@/components/Hooks/useMediaQuery";

const Features = (props) => {
	
	const isMobile = useIsMobile();
	
	return (
		<div className={'mt-[85px] flex flex-col space-y-[32px] items-center text-center'}>
			{props.title}
			{isMobile ?
				<div
					className={'h-[240px] md:h-[750px] w-full relative rounded-small overflow-hidden'}
				>
					<Image src={props.imgMobile} fill className={'object-cover'} alt={'Athlet'}/>
				</div> :
				<Image src={props.img} className={"h-[75Opx] w-full"} alt={'Athlet'}/>
			}
		
		</div>
	)
}

export default Features
