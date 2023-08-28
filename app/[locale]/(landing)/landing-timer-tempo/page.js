import React from 'react'
import Header from '@/components/LandingTimer/Header'
import {Content} from '@/components/LandingTimer/AppFeatureWithButtons/index'
import DownloadApp from '@/components/LandingTimer/DownloadApp'
import AnimatedBanner from '@/components/LandingTimer/AnimatedBanner'
import Features from '@/components/LandingTimer/Features'
import VideoFeatures from '@/components/LandingTimer/VideoFeatures'
import Carousel from '@/components/LandingTimer/ImageCarousel/Carousel'
import AppFeatureWithButtons from '@/components/LandingTimer/AppFeatureWithButtons/AppFeatureWithButtons'
import Subscriptions from '@/components/LandingTimer/Subscriptions'
import TempoCardioMobile from '@/public/assets/images/tempo-timer-header-mobile.webp'
import TempoCardio from '@/public/assets/images/tempo-timer-header.webp'
import Concentrique from '@/public/assets/images/LandingTimer/session-copy.webp'
import Athlet from '@/public/assets/images/athlet.webp'
import AthletDesktop from '@/public/assets/images/LandingTimer/design-by-ahtlet-desktop.webp'
import Reviews from "@/components/LandingTimer/Reviews/Reviews";

export async function generateMetadata({params}) {
	
	const url = `${process.env.NEXT_PUBLIC_SITE_URL}/landing-timer-tempo`;
	
	return {
		title: "Discover Tempo - Timer by Athletid",
		description: "Give meaning to your workouts and unlock your full physical potential with Timer by Athletid",
		url: url,
		openGraph: {
			title: "Discover Tempo - Timer by Athletid",
			description: "Give meaning to your workouts and unlock your full physical potential with Timer by Athletid",
			url: url,
			images: [{
				url: "https://i.imgur.com/orFqImv.jpg", width: 800, height: 600,
			}, {
				url: "https://i.imgur.com/orFqImv.jpg", width: 1800, height: 1600, alt: 'My custom alt',
			},],
			type: "website"
		},
	}
	
}


const Timer = () => {
	
	return (<>
		
		<Header
			mobileImg={TempoCardioMobile}
			img={TempoCardio}
			mockupImg={Concentrique}
			title={<h1 className={'!my-[24px] text-center'}>
				<div className={"flex justify-center flex-col md:hidden"}>
					<div className={'inline-block'}>
						Struggling <div className={'inline-block'}>to get
						<div>
							<div className="text-timeRed font-semibold inline-block">workouts results
								<div className={'inline-block !font-normal !text-black'}>&nbsp;?</div>
							</div>
						
						</div>
					</div>
					</div>
				</div>
				<div className={"hidden md:flex justify-center flex-col "}>
					
					Struggling to get
					<div className={'inline-block'}>
						<div>
							<div className="text-timeRed font-semibold inline-block">workouts results
								<div className={'inline-block !font-normal !text-black'}>&nbsp;?</div>
							</div>
						
						</div>
					
					</div>
				</div>
			</h1>}
			downloadAppTitle={<div className={"mt-[24px]"}>
				<div className={'font-bold'}> Embrace our application to manage more efficiently each seconds of
					your training.
				</div>
				<div>
					The widest range of sports timers and a unique functionality to increase
				</div>
				your strength
				and muscle mass gains: <div className={'font-semibold text-timeRed inline-block'}>the
				TEMPO!</div>
			</div>}
		/>
		<AnimatedBanner/>
		<div className={'px-4 max-w-[370px] md:max-w-[1170px] mx-auto '}>
			<Features
				title={<h2>
					Designed in collaboration with
					<div className={'ml-4 font-semibold text-timeRed  inline-block'}>athletes</div>
					<div className={'inline-block'}>
						&nbsp;and&nbsp;
					</div>
					<div className={'font-semibold text-timeRed inline-block'}>coachs.</div>
				</h2>}
				img={AthletDesktop} imgMobile={Athlet}/>
			
			<VideoFeatures
				video={"/assets/videos/VideoLPmuscu.mov"}
				title={<h2 className={''}>
					Focus and push<br/>
					<div>
						<div className={'font-semibold text-timeRed mx-2'}>yourself.</div>
					</div>
				</h2>}
			/>
			
			<DownloadApp
				className={'mt-[85px] md:mb-[100px]'}
				title={<div className={'flex flex-col'}>
					<h3 className={''}>Would you like a 7-day trial?</h3>
					<div className={'font-semibold mt-[36px]'}>Download our app</div>
					<div>right now</div>
				</div>}
			/>
		
		</div>
		<Carousel/>
		<div className={'px-4 max-w-[370px] md:max-w-[1170px] mx-auto '}>
			<AppFeatureWithButtons
				title={<div>
					<div className={'flex justify-center'}>
						<h2 className={'inline-block '}>Discover the secret of
							<div> the greatest coaches:</div>
							<div className={'font-semibold text-timeRed mb-[18px] block ml-4'}>the
								Tempo.
							</div>
						</h2>
					</div>
				</div>}
				mobileTitle={
					<div>
						<div className={'mt-[18px]'}>
							<div className={'font-bold'}>
								No matter your discipline (functional training, bodybuilding,
								powerlifting…) and level, the
							</div>
							<div
								className={'font-semibold text-timeRed inline-block'}>TEMPO
							</div>
							&nbsp;is <div className={'font-semibold inline-block'}>THE </div> training
							parameter not to be neglected. It can help you reach your goals more easily
							<div>
								and effectively.
							</div>
						</div>
					</div>
				}
				content={Content}
			/>
			<Subscriptions/>
			<DownloadApp
				mobileTitle={<div>
					<div className={'font-semibold'}>Download our app</div>
					<div>right now on your phone</div>
				</div>}
			/>
		</div>
		<Reviews/>
	</>)
}

export default Timer
