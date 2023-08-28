import React from 'react';
import {useTranslations} from "next-intl";
import Feature from "@/components/Feature/Feature";
import CarouselBgImage from "@/components/UI/Carousel/ArrowCarouselBgImage/CarouselBgImage";
import Carousel from "@/components/UI/Carousel/ArrowCarousel/Carousel";
import ImageSection from "@/components/ImageSection/ImageSection";
import GridSection from "@/components/UI/Grid/GridSection";
import HeaderAthletid from "@/components/Header/HeaderAthletid";
import GridContent from "@/components/Athletid/GridContent";
import {carouselItems} from "@/messages/athletid/carouseltems";
import {subscriptions} from "@/messages/athletid/subscriptions";
import OgImage from "@/public/assets/images/og-image.webp";

export async function generateMetadata({params}) {
	
	const url = `${process.env.NEXT_PUBLIC_SITE_URL}athletid/`;
	
	return {
		title: "Tracking by Athletid",
		description: "The world's first tracking system dedicated to bodybuilding and yoga. Automate the writing of your training journal and get unique statistics!",
		url: url,
		openGraph: {
			title: "Tracking by Athletid",
			description: "The world's first tracking system dedicated to bodybuilding and yoga. Automate the writing of your training journal and get unique statistics!",
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

const Page = () => {
	const t = useTranslations('athletid')
	
	
	return (
		<>
			<HeaderAthletid title={t('header.title')}/>
			<div
				className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto  relative '}
			>
				<GridSection
					gridClassName={''}
					title={t('gridSection.title')}
					subTitle={t('gridSection.subTitle')}
				>
					<GridContent/>
				</GridSection>
				<div className={'px-4 max-w-[1024px] mx-auto'}>
					<ImageSection
						imageData={'apco'}
						title={t('imageSection.title')}
						subTitle={t('imageSection.subTitle')}
					/>
				</div>
				<Carousel noCustomIcons={true} imageData={carouselItems}/>
			</div>
			<CarouselBgImage imageData={'apco'}/>
			<div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto'}>
				<Feature
					title={t('feature.title')}
					subTitle={
						t('feature.subTitle')}
					titleFeatures={t('feature.titleFeatures')}
					subscriptions={subscriptions}
					imageSrc={"/assets/images/session-constructor-cut.webp"}
				/>
			</div>
		</>
	)
};

export default Page;