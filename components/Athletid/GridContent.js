'use client'
import React, {useState} from 'react';
import {gridImagePaths} from "@/components/gridImagePaths";
import {usePathname, } from "next/navigation";
import BasicCard from "@/components/UI/Card/BasicCard/BasicCard";

const GridContent = () => {
	const pathname = usePathname();
	
	
	const getLanguageFromURL = () => {
		
		if (pathname.startsWith('/fr/')) {
			return 'fr';
		}
		return 'en'
	}
	
	const language = getLanguageFromURL()
	
	const getImagePath = (imageKey) => {
		return gridImagePaths[language][imageKey]
	}
	
	const apcoCardContent = [
		{
			title: "All you need.",
			subTitle: "In one app.",
			flipContentTitle: "1 app for all your needs.",
			flipContent: "Discover new workouts, get inspired, share your progress and passion or follow your progress with accurate and complete statistics on your activity. \nYou can even access the services and programs of certified professionals from the marketplace.",
			imageKey: "apcoRockBackground",
			buttons: "toggleButton"
		},
		{
			title: "Recognize the exercises.",
			flipContentTitle: "Unique in the world.",
			flipContent: "We have developed the first on-board system that recognizes the movements you make during your workout. With it, you can concretely see your progress and your evolution and follow all your training sessions. ",
			imageKey: "captorWhiteBackground",
			className: "md:col-span-2 !text-black",
			paragraphWidth: "md:grid md:grid-cols-2",
			imageKeyFlip: "womanRedLine",
			flipImageHeight: 326,
			flipImageWidth: 240,
			buttons: "toggleButton"
		},
		{
			title: "Automatic writing of the \n training log.",
			flipContentTitle: "No more handwriting",
			flipContent: "You can throw away your old workout book. Thanks to our powerful intelligent system, we can automatically write down your workout live.",
			imageKey: "constructionEntrainementApco",
			className: "md:col-span-2",
			paragraphWidth: "md:grid md:grid-cols-2",
			imageKeyFlip: "constructionSeanceFull",
			flipImageHeight: 386,
			flipImageWidth: 190,
			buttons: "toggleButton"
		},
		{
			title: "All your stats.",
			subTitle: "Customizable.",
			flipContentTitle: "Your goals, your stats.",
			flipContent: "Customize your logbook to view statistics tailored to your goals.\nYou can share your progress with your friends and see where they are in their goals to encourage and support them.  ",
			imageKey: "stats",
			buttons: "toggleButton"
		}
	]
	
	const [cardStates, setCardStates] = useState([]);
	
	// ...
	
	const handleCardClick = (index) => {
		const updatedStates = [...cardStates];
		updatedStates[index] = !updatedStates[index];
		setCardStates(updatedStates);
	};
	
	
	
	return (
		<div className={'grid md:grid-cols-3 rows-4 gap-4'}>
			{apcoCardContent.map((value, index) => {
				const imagePath = getImagePath(value.imageKey);
				const imagePathFlip = getImagePath(value.imageKeyFlip);
				return (
					<BasicCard
						key={index}
						title={value.title}
						subTitle={value.subTitle}
						imageKey={imagePath}
						imageKeyFlip={imagePathFlip}
						paragraphWidth={value.paragraphWidth}
						className={value.className}
						flipContent={value.flipContent}
						flipContentTitle={value.flipContentTitle}
						flipImage={value.flipImage}
						flipImageHeight={value.flipImageHeight}
						flipImageWidth={value.flipImageWidth}
						buttons={'toggleButton'}
						onClick={() => handleCardClick(index)}
					/>
				)
			})}
		</div>
	);
};

export default GridContent;