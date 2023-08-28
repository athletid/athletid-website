'use client'
import React from 'react'
import {useIsMobile} from "@/components/Hooks/useMediaQuery";


const Features = (props) => {
	const isMobile = useIsMobile();
	
	return (
		<div className={'my-[85px]  flex flex-col space-y-[85px] text-center items-center'}>
			{props.title}
			<video controls={false} muted autoPlay loop playsInline width={isMobile ? "350" : "225"} height={"470"}>
				<source src={props.video} type="video/mp4"/>
			</video>
		</div>
	)
}

export default Features
