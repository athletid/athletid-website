'use client'
import React from "react";
import {RelatedWorkout} from "@/components/Blog/Workout/RelatedWorkout";

export function RelatedWorkouts(props) {
	
	return (
		<div
			className={
				'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'
			}
		>
			{props.relatedPosts?.slice(0, 2).map((value, index) => (
				<RelatedWorkout key={index} sections={props.sections} data={value}/>
			))}
		</div>
	)
}