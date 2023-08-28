import React from 'react'
import Article from "@/components/Blog/Article/Article";
import {fetchAuthor, fetchPost, fetchPosts, fetchSections} from "@/lib/helper";


export async function generateMetadata({params}) {
	
	const post = await fetchPost(params.postSlug)
	const posts = await fetchPosts();
	const sections = post ? await fetchSections(post) : []
	const author = post ? await fetchAuthor(post) : {}
	const baseURL = `${process.env.NEXT_PUBLIC_SITE_URL}posts/`;
	
	return {
		title: post?.name,
		description: sections[0]?.paragraph.substring(0, 100) + "...",
		url: `${baseURL}${params.postSlug}`,
		openGraph: {
			title: post?.name,
			description: sections[0]?.paragraph.substring(0, 100) + "...",
			url: `${baseURL}${params.postSlug}`,
			images: [
				{
					url: post?.img,
					width: 800,
					height: 600,
				},
				{
					url: post?.img,
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
	
	
	const post = await fetchPost(params.postSlug)
	const posts = await fetchPosts();
	const sections = post ? await fetchSections(post) : []
	const author = post ? await fetchAuthor(post) : {}
	
	
	return (
		<div className={'max-w-[350px] md:max-w-[1170px] mx-auto px-4'}>
			<Article fetchedPost={post} fetchedPosts={posts} fetchedSections={sections} fetchedAuthor={author}/>
		</div>
	)
}
