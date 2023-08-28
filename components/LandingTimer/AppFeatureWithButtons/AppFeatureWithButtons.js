'use client'
import React, {useState} from 'react'
import Image from 'next/image'
import {useIsMobile, useIsTablet} from '@/components/Hooks/useMediaQuery'


const AppFeatureWithButtons = (props) => {
	const isMobile = useIsMobile()
	const isTablet = useIsTablet()
	const [activeIndex, setActiveIndex] = useState(0)
	
	
	const handleClick = (index) => {
		setActiveIndex(index)
	}
	
	return (
		<div className="mt-[70px] md:mt-[156px] text-center">
			{isMobile && props.mobileTitle ?  props.mobileTitle : props.title}
			{isTablet || isMobile ? (
				<div>
					{activeIndex !== null && (
						<div className="mt-5">
							<div className="w-fit mx-auto">
								<p className="text-lg font-semibold">
									{props.content[activeIndex].title}
								</p>
								<p className="text-lg mb-3">{props.content[activeIndex].subTitle}</p>
								<Image
									src={props.content[activeIndex].screen}
									className="bg-blend-multiply"
									width={222}
									height={390}
									alt="screen Timer"
								/>
							</div>
						</div>
					)}
					<div className="flex justify-around md:justify-center md:space-x-[30px] mt-[60px]">
						{props.content.map((value, index) => (
							<div
								key={index}
								className={`border-black border  py-[6px] px-[14px] rounded-full cursor-pointer ${
									activeIndex === index ? 'bg-black text-white' : ''
								}`}
								onClick={() => handleClick(index)}
							>
								{index + 1}
							</div>
						))}
					</div>
				</div>
			) : (
				<div>
					<div className="flex justify-around mt-[60px]">
						{props.content.map((value, index) => (
							<div key={index} className="">
								<div className="w-fit mx-auto">
									<p className="text-lg font-semibold">{value.title}</p>
									<p className="text-lg mb-3">{value.subTitle}</p>
									<Image
										src={value.screen}
										className="bg-blend-multiply"
										width={222}
										height={390}
										alt="screen Timer"
									/>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	)
}

export default AppFeatureWithButtons
