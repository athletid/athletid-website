'use client'
import React from 'react'
import Marquee from 'react-fast-marquee'
import {BsStarFill} from 'react-icons/bs'
import {Content1, Content2} from './index'
import {useIsMobile} from "@/components/Hooks/useMediaQuery";

const Reviews = () => {
	
	const isMobile = useIsMobile();
	
	return (
		<div id={"reviews"}>
			{isMobile ?
				<h2 className={'mt-[75px] mb-[64px] flex flex-col items-center text-center'}>
					<div>
						Many of you{' '}
					</div>
					<div className={'flex'}>
						&nbsp;already&nbsp;
						<div className={'font-semibold text-timeRed mr-4'}>love</div>
					</div>
					<div>
						the app!
					</div>
				</h2>
				:
				<h2 className={'mt-[75px] mb-[64px] flex flex-col items-center text-center'}>
					<div>
						Many of you already{' '}
					</div>
					<div className={'flex'}>
						<div className={'font-semibold text-timeRed mr-4'}>love</div>
						the app!
					</div>
				</h2>
			}
			<Marquee autoFill={true} className={''}>
				{Content1.map((value, index) => {
					return (
						<div
							key={index}
							className={
								'w-[310px] border border-black rounded-small p-8 ml-6 h-[200px] md:h-[250px] flex flex-col justify-around'
							}
						>
							<p className={'whitespace-preline'}>{value.comment}</p>
							<div className={'flex justify-between items-center mt-[20px]'}>
								<div className={'font-semibold'}>{value.author}</div>
								<div className={'flex space-x-2'}>
									<BsStarFill width={20} height={20} color={'black'}/>
									<BsStarFill width={20} height={20} color={'black'}/>
									<BsStarFill width={20} height={20} color={'black'}/>
									<BsStarFill width={20} height={20} color={'black'}/>
									<BsStarFill width={20} height={20} color={'black'}/>
								</div>
							</div>
						</div>
					)
				})}
			</Marquee>
			<Marquee autoFill={true} direction={"right"} className={'mt-[56px]'}>
				{Content2.map((value, index) => {
					return (
						<div
							key={index}
							className={
								'w-[310px] border border-black rounded-small p-8  ml-6 h-[200px] md:h-[250px] flex flex-col justify-around'
							}
						>
							<p className={'whitespace-preline'}>{value.comment}</p>
							<div className={'flex justify-between items-center mt-[20px]'}>
								<div className={'font-semibold'}>{value.author}</div>
								<div className={'flex space-x-2'}>
									<BsStarFill width={20} height={20} color={'black'}/>
									<BsStarFill width={20} height={20} color={'black'}/>
									<BsStarFill width={20} height={20} color={'black'}/>
									<BsStarFill width={20} height={20} color={'black'}/>
									<BsStarFill width={20} height={20} color={'black'}/>
								</div>
							</div>
						</div>
					)
				})}
			</Marquee>
		</div>
	)
}

export default Reviews
