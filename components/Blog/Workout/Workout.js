'use client'
import React, {useEffect, useState} from 'react';
import Author from '@/components/Blog/_child/Author';
import ShareButtons from '@/components/Blog/Article/ShareButtons';
import Image from 'next/image';
import CircleSpinner from '@/components/UI/Spinner/CircleSpinner';
import {RelatedWorkouts} from "@/components/Blog/Workout/RelatedWorkouts";
import {usePathname} from "next/navigation";

function Workout(props) {
	const [workout, setWorkout] = useState(null);
	const [workouts, setWorkouts] = useState([]);
	const [sections, setSections] = useState([]);
	const [author, setAuthor] = useState(null);
	const [difficulty, setDifficulty] = useState("")
	const [relatedWorkouts, setRelatedWorkouts] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	
	
	const currentPath = usePathname();
	
	useEffect(() => {
		if (workout) {
			setDifficulty(workout.difficulty.charAt(0).toUpperCase() + workout.difficulty.slice(1))
		}
	}, [workout])
	
	useEffect(() => {
		if (props.fetchedSections !== null && props.fetchedWorkout !== null && props.fetchedWorkouts !== null) {
			const sectionsSort = props.fetchedSections.sort((a,b) => a.order - b.order);
			setWorkout(props.fetchedWorkout);
			setWorkouts(props.fetchedWorkouts)
			setSections(sectionsSort)
			setAuthor(props.fetchedAuthor)
			setIsLoading(false);
		}
	}, [props.fetchedAuthor, props.fetchedWorkout, props.fetchedWorkouts, props.fetchedSections]);
	
	useEffect(() => {
		if (workouts && workout) {
			setRelatedWorkouts(workouts.filter(
				(item) =>
					item.categories === workout.categories && item.name !== workout.name
			))
		}
	}, [workouts, workout])
	
	console.log(workout)
	
	return (
		<>
			{isLoading ? (
				<CircleSpinner/>
			) : (
				<>
					<div className="">
						<div className="mt-[142px] md:mt-[216px] mb-[64px]">
							<h1 className="">{workout?.name}</h1>
						</div>
						<div className="flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between">
							<div className={'flex flex-col'}>
								<Author author={author}/>
								<div className=" mt-[36px] flex space-x-8">
									<div className={'flex space-x-4 items-center'}>
										<Image src={"/assets/icons/timer.svg"} width={32} height={32} alt={""}/>
										<p className="text-darkGrey">{workout?.duration} minutes</p>
									</div>
									<div className={'flex space-x-4 items-center'}>
										<Image src={"/assets/icons/difficulty.svg"} width={32} height={32} alt={""}/>
										<p className="text-darkGrey">{difficulty}</p>
									</div>
								</div>
							</div>
							<div
								className="flex-col justify-between items-center md:items-start md:justify-start space-y-8">
								<ShareButtons pathname={currentPath}/>
								<div className={'flex justify-center md:justify-between  items-center'}>
									<Image src={"/assets/images/scan-me.webp"} width={125} height={125} alt={'Scan me text'}/>
									{workout.qrCodeImg &&
										<Image src={workout.qrCodeImg} width={130} height={130} alt={'Scan me text'}/>
									}
								</div>
							</div>
						</div>
						<div className="w-full h-[290px] md:h-[575px] relative rounded-small overflow-hidden mt-[64px]">
							<Image
								sizes="100vw"
								fill
								src={workout?.img}
								className="object-cover"
								alt=""
							/>
						</div>
						<div className="mt-[32px] md:mt-[64px] mb-[64px] border-b border-darkGrey">
							{sections?.map((section) => (
								<div key={section.order} className="mb-16">
									<h3 className="mb-8">{section?.subTitle}</h3>
									<p className="whitespace-pre-line">{section?.paragraph}</p>
									{section.img && (
										<div
											className="w-full h-[290px] md:h-[575px] relative rounded-small overflow-hidden mt-[64px]">
											<Image
												sizes="100vw"
												fill
												src={section?.img}
												className="object-cover"
												alt=""
											/>
										</div>
									)}
								</div>
							))}
						</div>
					</div>
					<RelatedWorkouts relatedPosts={relatedWorkouts}/>
				</>
			)}
		</>
	);
}

export default Workout;
