import MasonryGrid from '@/components/UI/Grid/MasonryGrid'
import Header from '@/components/Header/Header'
import ImgHeader from '@/public/assets/images/femme-casque-audio.webp'
import MasonryImages from '@/public/assets/images/masonry'
import ContactSupport from '@/components/Contact/ContactSupport'
import GridSection from '@/components/UI/Grid/GridSection'
import React from 'react'
import CardImageBottomRight from '@/components/UI/Card/CardImageBottomRight'
import CardImageTopRight from '@/components/UI/Card/CardImageTopRight'
import CardImageBottomFull from '@/components/UI/Card/CardImageBottomFull'
import {useTranslations} from 'next-intl'
import {gridImagePaths} from '@/components/gridImagePaths'
import BasicCard from "@/components/UI/Card/BasicCard/BasicCard";
import {homeCardContent} from "@/messages/home/homeCardContent";


export async function generateMetadata({params}) {
	
	
	const baseURL = `${process.env.NEXT_PUBLIC_SITE_URL}`;
	
	return {
		title: "Athletid",
		description: "Athletid offers innovative solutions, sports timers, tracking systems, dedicated to physical training, bodybuilding, and well-being",
		url: `${baseURL}`,
		openGraph: {
			title: "Athletid",
			description: "Athletid offers innovative solutions, sports timers, tracking systems, dedicated to physical training, bodybuilding, and well-being",
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

export default function Page() {
	const t = useTranslations('home');
	
	const language = 'en';
	
	const getImagePath = (imageKey) => {
		return gridImagePaths[language][imageKey];
	};
	
	return (
		<div>
			<Header
				title={t('header.title')}
				subTitle={t('header.subTitle')}
				imageSrc={ImgHeader}
				imageWidth={' w-[500px] md:w-1/2 '}
				link={'/timer'}
				imageClassName={'object-cover object-top md:!object-left-top'}
			/>
			<div className={'px-4 max-w-[350px] md:max-w-[1170px] mx-auto '}>
				<GridSection
					gridClassName={'md:grid-cols-3 lg:grid-cols-[2fr_1fr_1fr]'}
					title={t('gridSection1.title')}
					subTitle={t('gridSection1.subTitle')}
				>
					<CardImageBottomRight
						title={t('cardImageBottomRight.title')}
						subTitle={t('cardImageBottomRight.subTitle')}
					/>
					<CardImageTopRight
						title={t('cardImageTopRight.title')}
						subTitle={t('cardImageTopRight.subTitle')}
					/>
					<CardImageBottomFull
						title={t('cardImageBottomFull.title')}
						subTitle={t('cardImageBottomFull.subTitle')}
					/>
				</GridSection>
				
				<GridSection
					gridClassName={'md:grid-cols-2 md:grid-rows-2'}
					title={t('gridSection2.title')}
					subTitle={t('gridSection2.subTitle')}
				>
					{homeCardContent.map((value, index) => {
						
						const imagePath = getImagePath(value.imageKey);
						const imagePathMobile = getImagePath(value.imageKeyMobile);
						
						return (
							<BasicCard
								key={index}
								link={value.link}
								tag={value.tag}
								title={value.title}
								subTitle={value.subTitle}
								imageKey={imagePath}
								imageKeyMobile={imagePathMobile}
								paragraphWidth={value.paragraphWidth}
								className={value.className}
								subTitleClassName={value.subTitleClassName}
								buttonClassName={value.buttonClassName}
							/>
						);
					})}
				</GridSection>
			</div>
			<MasonryGrid
				titleMasonry={t('masonryGrid.title')}
				items={MasonryImages}
			/>
			<div className={'px-4  max-w-[350px] md:max-w-[1170px] mx-auto '}>
				<ContactSupport
					title={t('contactSupport.title')}
					subTitle={t('contactSupport.subTitle')}
				/>
			</div>
		</div>
	);
}
