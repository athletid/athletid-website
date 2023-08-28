import React from 'react'
import Header from '@/components/LandingTimer/Header'
import {ContentYoga} from '@/components/LandingTimer/AppFeatureWithButtons/indexYoga'
import DownloadApp from '@/components/LandingTimer/DownloadApp'
import Features from '@/components/LandingTimer/Features'
import Carousel from '@/components/LandingTimer/ImageCarousel/Carousel'
import AppFeatureWithButtons from '@/components/LandingTimer/AppFeatureWithButtons/AppFeatureWithButtons'
import Subscriptions from '@/components/LandingTimer/Subscriptions'
import Reviews from '@/components/LandingTimer/Reviews/Reviews'
import TimerYogaHeader from '@/public/assets/images/yoga-timer-header.webp'
import YogaMockup from '@/public/assets/images/yoga-with-mockup.webp'
import YogaMobile from '@/public/assets/images/LandingTimerYoga/yoga6.webp'
import MockupHeader from '@/public/assets/images/LandingTimer/breathing.webp'
import MockupHeaderMobile from '@/public/assets/images/LandingTimer/breathing-mobile.webp'
import VideoFeatures from "@/components/LandingTimer/VideoFeatures";
import AnimatedBanner from "@/components/LandingTimer/AnimatedBanner";


export async function generateMetadata({params}) {
	
	const url = `${process.env.NEXT_PUBLIC_SITE_URL}/landing-timer-yoga`;
	
	return {
		title: "Discover Yoga - Timer by Athletid",
		description: "Give meaning to your workouts and unlock your full physical potential with Timer by Athletid",
		url: url,
		openGraph: {
			title: "Discover Yoga - Timer by Athletid",
			description: "Give meaning to your workouts and unlock your full physical potential with Timer by Athletid",
			url: url,
			images: [
				{
					url: "https://i.imgur.com/orFqImv.jpg",
					width: 800,
					height: 600,
				},
				{
					url: "https://i.imgur.com/orFqImv.jpg",
					width: 1800,
					height: 1600,
					alt: 'My custom alt',
				},
			],
			type: "website"
		},
	}
	
}


const Timer = () => {
	
	
	return (
		<>
			
			<Header
				img={TimerYogaHeader}
				mockupImg={MockupHeader}
				mobileMockupImg={MockupHeaderMobile}
				title={
					<h1 className={'my-[24px]'}>
						{
							<div className={'flex flex-col'}>
								<div>
									The first timer that adapts to
								</div>
								<div>
									your
									<div
										className={'text-timeRed font-semibold mx-2 inline-block'}>&nbsp;well-being.</div>
								</div>
							
							</div>
						}
					</h1>
				}
				mobileTitle={
					<h1 className={'my-[24px]'}>
						<div className={'flex flex-col'}>
							<div>
								The first timer that adapts
							</div>
							<div>
								to your
							</div>
							<div
								className={'text-timeRed font-semibold mx-2 inline-block'}>&nbsp;well-being.
							</div>
						
						</div>
					
					</h1>
				}
				downloadAppTitle={
					<div className={"mt-[24px]"}>
						<div className={'font-bold'}>Your training partner, simple and elegant.
						</div>
						<div>
							Embrace our application to manage more efficiently each seconds of your
							training.
						</div>
						<div className={'mr-2'}>
							Discover the widest range of yoga timers to manage your rest times with adapted
							sounds
							and a
						</div>
						<div> unique functionality to control your breath : <div
							className={'font-semibold text-timeRed inline-block'}>&nbsp;the Pranayama !
						</div>
						</div>
					</div>
				}
				mobileDownloadAppTitle={
					<div className={"mt-[24px]"}>
						<div className={'font-bold'}>Your training partner, simple and elegant.
						</div>
						<div>
							Embrace our application to manage more efficiently each seconds of your
							training.
						</div>
						<div className={'mr-2'}>
							Discover the widest range of yoga timers to manage your rest times with adapted
							sounds
							and a unique functionality
							<div>
								to control your breath : <div
								className={'font-semibold text-timeRed inline-block'}>&nbsp;the Pranayama !
							</div>
							</div>
						</div>
					</div>
					
				}
			/>
			<AnimatedBanner/>
			<div className={'px-4 max-w-[370px] md:max-w-[1170px] mx-auto '}>
				<Features
					title={
						<h2>
							Designed in collaboration with
							<div className={'font-semibold text-timeRed  inline-block'}>&nbsp;yogists</div>
							<div className={'inline-block'}>
								&nbsp;and&nbsp;
							</div>
							<div className={'font-semibold text-timeRed inline-block'}>teachers.</div>
						</h2>
					}
					img={YogaMockup} imgMobile={YogaMobile}/>
				<VideoFeatures
					video={"/assets/videos/YOGALP.mov"}
					title={<h2>
						Train with a<br/>
						<div>
							<div className={'font-semibold text-timeRed mx-2'}>free spirit.</div>
						</div>
					</h2>}
				/>
				<DownloadApp
					className={'mt-[85px] md:mb-[100px]'}
					title={
						<div className={'flex flex-col'}>
							<h3 className={''}>Would you like a</h3>
							<h3 className={'block'}>7-day trial?</h3>
							<div className={'font-semibold mt-[36px]'}>Download our app</div>
							<div>right now</div>
						</div>
					}
				/>
			</div>
			<Carousel img={'yoga'}/>
			<div className={'px-4 max-w-[370px] md:max-w-[1170px] mx-auto '}>
				<AppFeatureWithButtons
					title={<div>
						<h2 className={'flex flex-col'}>Discover one of the pillars of
							<div>
								&nbsp;Yoga:&nbsp;
								<div
									className={'inline-block font-semibold text-timeRed mb-[18px] mx-4'}>the
									Pranayama!
								</div>
							</div>
						</h2>
						<div className={'mt-[18px]'}>This discipline encompasses various breathing techniques to
							influence your mental state
							<div>
								and
								help you feel better in your daily life (relaxation, energy, etc...). Your Timer
								application
							</div>
							accompanies you whatever your level, your discipline or your goals.
						</div>
					</div>}
					mobileTitle={<div>
						<h2 className={'flex flex-col'}>Discover one of the pillars of
							<div>
								&nbsp;Yoga:&nbsp;
								<div
									className={'inline-block font-semibold text-timeRed mb-[18px] mx-4'}>the
									Pranayama!
								</div>
							</div>
						
						</h2>
						
						<div className={'mt-[18px]'}>This discipline encompasses various breathing techniques to
							influence your mental state
							<div>
								and
								help you feel better in your daily life (relaxation, energy, etc...). Your Timer
								application accompanies you whatever your level, your discipline or your goals.
							</div>
						</div>
					
					</div>}
					content={ContentYoga}
				/>
				<Subscriptions/>
				<DownloadApp
					mobileTitle={
						
						<div>
							<div className={'font-semibold'}>Download our app</div>
							<div>right now on your phone</div>
						</div>
					}
				/>
			</div>
			<Reviews/>
		</>
	)
}

export default Timer


