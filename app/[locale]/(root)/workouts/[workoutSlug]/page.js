import React from 'react'
import {
	fetchAuthor,
	fetchWorkout,
	fetchWorkouts,
	fetchWorkoutSections
} from "@/lib/helper";
import Workout from "@/components/Blog/Workout/Workout";


export async function generateMetadata({params}) {
	
	const workout = await fetchWorkout(params.workoutSlug)
	const workouts = await fetchWorkouts();
	const sections = workout ? await fetchWorkoutSections(workout) : []
	const author = workout ? await fetchAuthor(workout) : {}
	const baseURL = `${process.env.NEXT_PUBLIC_SITE_URL}workouts/`;
	
	return {
		title: workout?.name,
		description: sections[0]?.paragraph.substring(0, 100) + "...",
		url: `${baseURL}${params.workoutSlug}`,
		openGraph: {
			title: workout?.name,
			description: sections[0]?.paragraph.substring(0, 100) + "...",
			url: `${baseURL}${params.workoutSlug}`,
			images: [
				{
					url: workout?.img,
					width: 800,
					height: 600,
				},
				{
					url: workout?.img,
					width: 1800,
					height: 1600,
					alt: 'My custom alt',
				},
			],
			type: "article"
		},
	}
	
}

export default async function Page({params}) {
	
	
	const workout = await fetchWorkout(params.workoutSlug)
	const workouts = await fetchWorkouts();
	const sections = workout ? await fetchWorkoutSections(workout) : []
	const author = workout ? await fetchAuthor(workout) : {}
	
	
	return (
		<div className={'max-w-[350px] md:max-w-[1170px] mx-auto px-4'}>
			<Workout fetchedWorkout={workout} fetchedWorkouts={workouts} fetchedSections={sections} fetchedAuthor={author}/>
		</div>
	)
}
