import React from 'react';
import {useTranslations} from "next-intl";
import Header from "@/components/Header/Header";
import KeyNumbers from "@/components/Timer/KeyNumbers";
import ImgHeader from '@/public/assets/images/timer-v2-header-desktop.webp'
import ImgHeaderMobile from '@/public/assets/images/timer-v2-header-mobile.webp'
import Testimonial from "@/components/Testimonial/Testimonial";
import Feature from "@/components/Feature/Feature";
import ImageSection from "@/components/ImageSection/ImageSection";
import CarouselBgImage from "@/components/UI/Carousel/ArrowCarouselBgImage/CarouselBgImage";
import Carousel from "@/components/UI/Carousel/ArrowCarousel/Carousel";
import FullHeightBgImage from "@/components/Timer/FullHeightBgImage";
import {carouselItems} from "@/messages/timer/carouselItems";
import {subscriptions} from "@/messages/timer/subscriptions";

export async function generateMetadata({params}) {
	
	
	const baseURL = `${process.env.NEXT_PUBLIC_SITE_URL}timer/`;
	
	return {
		title: "Timer by Athletid",
		description: "The best sports timer app is finally available. With unique features such as tempo, breathing, and all the classics like EMOM, Interval, etc. Build your workouts and let yourself be guided.\n",
		url: `${baseURL}`,
		openGraph: {
			title: "Timer by Athletid",
			description: "The best sports timer app is finally available. With unique features such as tempo, breathing, and all the classics like EMOM, Interval, etc. Build your workouts and let yourself be guided.\n",
			url: `${baseURL}`,
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

const Page = () => {
	const t = useTranslations('timer')
	
	return (
		<>
			<Header
				title={t('header.title')}
				subTitle={
					t('header.subTitle')
				}
				imageSrc={ImgHeader}
				imageSrcMobile={ImgHeaderMobile}
				buttons={'downloadButton'}
				imageClassName={'object-cover object-center md:object-top'}
				imageHeight={'md:h-3/4'}
			/>
			<div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
				<KeyNumbers/>
			</div>
			<div className={'md:px-4 md:max-w-[1170px] mx-auto '}>
				<FullHeightBgImage
					title={t("fullHeightBgImage.title")}
					subTitle={t("fullHeightBgImage.subTitle")}
					imageTitle={t("fullHeightBgImage.imageTitle")}
				/>
			</div>
			<div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
				<Carousel
					title={t("carousel.title")}
					imageData={carouselItems}
				/>
			</div>
			<CarouselBgImage imageData={'timer'}/>
			<div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto'}>
				<ImageSection
					imageData={'timer'}
					title={t("imageSection.title")}
					subTitle={
						t("imageSection.subTitle")
					}
				/>
				<Feature
					title={t('feature.title')}
					subTitle={
						t('feature.subTitle')
					}
					titleFeatures={t('feature.titleFeatures')}
					subscriptions={subscriptions}
					imageSrc={"/assets/images/training-recap.webp"}
				/>
			</div>
			<div className={'md:px-4 md:max-w-[1170px] mx-auto '}>
				<Testimonial
					title={t('testimonial.title')}
					subTitle={t('testimonial.subTitle')}
				/>
			</div>
		</>
	)
};

export default Page;