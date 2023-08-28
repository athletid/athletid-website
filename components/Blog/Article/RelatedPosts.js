'use client'
import {Post} from "@/components/Blog/ArchivePosts/Post";
import React, {useEffect, useState} from "react";

export function RelatedPosts(props) {
	
	return (
		<div
			className={
				'space-y-[68px] md:space-y-0 flex flex-col md:grid md:grid-cols-2 md:gap-[30px]'
			}
		>
			{props.relatedPosts?.slice(0, 2).map((value, index) => (
				<Post key={index} sections={props.sections} data={value}/>
			))}
		</div>
	)
}