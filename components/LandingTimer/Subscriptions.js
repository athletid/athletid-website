'use client'
import React from 'react'
import {useIsMobile} from '@/components/Hooks/useMediaQuery'
import {AiOutlineCheck} from 'react-icons/ai'
import {FiX} from 'react-icons/fi'

const Subscriptions = () => {
	const isMobile = useIsMobile()
	
	return (
		<div className={'mt-[54px] mb-[54px] md:mb-0 md:mt-[156px] text-center max-w-[1000px] mx-auto'}>
			<h2 className={'flex flex-col justfiy-center'}>
				<div className="flex justify-center">
					The
					<div className="font-semibold text-timeRed">&nbsp;most&nbsp;</div>
					intuitive
				</div>
				and complete.
			</h2>
			{isMobile ? (
				<div className={'mt-[18px]'}>
					Try it for free now and discover the ultimate workout builder. Create and save your workouts quickly
					and easily.
				</div>
			) : (
				<div className={'mt-[18px]'}>
					Try it for free now and discover the ultimate workout builder.<br/>
					Create and save your workouts quickly and easily.
				</div>
			)}
			
			{isMobile ? (
				<div
					className={
						'border border-b-0 border-black/10 mt-[20px] grid grid-cols-2'
					}
				>
					<div
						className={
							'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left'
						}
					>
						<div>Classic Timers</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left'
						}
					>
						<div className={'text-timeGreen'}>Free & Premium</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left'
						}
					>
						<div>Save Sessions</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left'
						}
					>
						<div className={'text-timeGreen'}>Free & Premium</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left bg-greyShade md:bg-transparent'
						}
					>
						<div>Tempo, Breathing, Interval</div>
					</div>
					{' '}
					<div
						className={
							'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left bg-greyShade md:bg-transparent'
						}
					>
						<div className={'text-timeRed'}>Only Premium users</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left bg-greyShade md:bg-transparent'
						}
					>
						<div>Full session</div>
					</div>
					{' '}
					<div
						className={
							'px-[32px] py-[24px] border-b border-black/10 flex justify-between text-left bg-greyShade md:bg-transparent'
						}
					>
						<div className={'text-timeRed'}>Only premium users</div>
					</div>
				</div>
			) : (
				<div
					className={
						'border border-b-0 border-t-0 border-l-0 border-black/10 mt-[20px] grid grid-cols-4'
					}
				>
					<div className={'col-span-2'}></div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-l border-t border-r border-black/10 flex justify-center'
						}
					>
						<div className={''}>Free</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-t border-black/10 flex justify-center bg-greyShade'
						}
					>
						<div className={''}>Premium</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-t border-l border-black/10 flex justify-between text-left col-span-2'
						}
					>
						<div>EMOM, Timer, Stopwatch, Sonotherapy</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-l  border-r border-black/10 flex justify-center'
						}
					>
						<AiOutlineCheck color={'#4DAF00'} size={32}/>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b  border-black/10 flex justify-center bg-greyShade'
						}
					>
						<AiOutlineCheck color={'#4DAF00'} size={32}/>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-l border-black/10 flex justify-between text-left col-span-2'
						}
					>
						<div>Save Favorites Workout</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-l  border-r border-black/10 flex justify-center'
						}
					>
						<AiOutlineCheck color={'#4DAF00'} size={32}/>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b  border-black/10 flex justify-center bg-greyShade'
						}
					>
						<AiOutlineCheck color={'#4DAF00'} size={32}/>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-l border-black/10 flex justify-between text-left col-span-2 md:bg-transparent bg-greyShade'
						}
					>
						<div>Tempo, Interval, Breathing</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-l  border-r border-black/10 flex justify-center'
						}
					>
						<FiX color={'#E63D31'} size={32}/>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b  border-black/10 flex justify-center bg-greyShade'
						}
					>
						<AiOutlineCheck color={'#4DAF00'} size={32}/>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-l border-black/10 flex justify-between text-left col-span-2'
						}
					>
						<div>Full Session</div>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b border-l  border-r border-black/10 flex justify-center'
						}
					>
						<FiX color={'#E63D31'} size={32}/>
					</div>
					<div
						className={
							'px-[32px] py-[24px] border-b  border-black/10 flex justify-center bg-greyShade'
						}
					>
						<AiOutlineCheck color={'#4DAF00'} size={32}/>
					</div>
				</div>
			)}
		</div>
	)
}

export default Subscriptions
