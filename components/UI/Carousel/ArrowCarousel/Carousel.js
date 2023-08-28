'use client'
import React, {useState} from 'react'
import CarouselSlide from '@/components/UI/Carousel/ArrowCarousel/CarouselSlide'
import {useIsLargeScreen} from '@/components/Hooks/useMediaQuery'
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

const Carousel = (props) => {
	const isLargeScreen = useIsLargeScreen()
	
	const [currentItemIndex, setCurrentItemIndex] = useState(0)
	const [count, setCount] = useState(0)
	const [isPrevious, setIsPrevious] = useState(false)
	const [isNext, setIsNext] = useState(false)
	
	let slidesContent = props.imageData
	
	const currentIcon = slidesContent[currentItemIndex].icon;
	const previousIcon = slidesContent[(currentItemIndex - 1 + slidesContent.length) % slidesContent.length].icon;
	const nextIcon = slidesContent[(currentItemIndex + 1) % slidesContent.length].icon;
	
	return (
		<div className={'mt-[92px] md:mt-[120px]'}>
			{props.title && (
				<div
					className={'flex flex-col items-center mx-auto mb-[72px] text-center'}
				>
					<p className={'text-sm mb-4 text-black/20'}>{props.subTitle}</p>
					<h2 style={{whiteSpace: 'pre-line'}}>{props.title}</h2>
				</div>
			)}
			
			<div className={'relative'}>
				<CarouselSlide
					title={slidesContent[currentItemIndex].title}
					description={slidesContent[currentItemIndex].description}
					image={slidesContent[currentItemIndex].image}
					className={'relative'}
				/>
				
				<div
					className={
						'flex justify-between items-center mt-8 md:mt-0 md:absolute md:transform md:top-1/2 md:-translate-y-1/2 md:w-full'
					}
				>
					<div
						className={`w-[56px] h-[56px] lg:w-[60px] lg:h-[60px] border border-black cursor-pointer rounded-full flex items-center justify-center`}
						onClick={() => {
							if (currentItemIndex > 0) {
								setCurrentItemIndex(currentItemIndex - 1);
								setCount(count - 1);
							} else {
								setCurrentItemIndex(slidesContent.length - 1);
								setCount(slidesContent.length - 1);
							}
							setIsPrevious(true);
							setIsNext(false);
						}}
					>
						{
							props.noCustomIcons === true ?
								<BsChevronLeft size={isLargeScreen ? 20 : 16} color={'black'}/> :
								<img src={previousIcon} alt="Previous"
								     width={isLargeScreen ? 20 : 16} color={'black'}/>
						}
					
					</div>
					<div className={'flex space-x-4 md:hidden'}>
						{slidesContent.map((item, index) => (
							<div
								key={index}
								className={`border-2 border-red-500 ${
									index === count ? 'bg-red-500' : ''
								} rounded-full h-[15px] w-[15px]`}
								onClick={() => {
									setCurrentItemIndex(index)
									setCount(index)
								}}
							></div>
						))}
					</div>
					<div
						className={`w-[56px] h-[56px] lg:w-[60px] lg:h-[60px] border border-black  rounded-full flex items-center justify-center cursor-pointer`}
						onClick={() => {
							if (currentItemIndex < slidesContent.length - 1) {
								setCurrentItemIndex(currentItemIndex + 1);
								setCount(count + 1);
							} else {
								setCurrentItemIndex(0);
								setCount(0);
							}
							setIsPrevious(false);
							setIsNext(true);
						}}
					>
						{
							props.noCustomIcons === true ?
								<BsChevronRight size={isLargeScreen ? 20 : 16} color={'black'}/> :
								<img src={nextIcon} alt="Next"
								     width={isLargeScreen ? 20 : 16} color={'black'}/>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Carousel


