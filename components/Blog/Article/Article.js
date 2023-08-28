'use client'
import React, {useEffect, useState} from 'react';
import Author from '@/components/Blog/_child/Author';
import {IoIosTimer} from 'react-icons/io';
import ShareButtons from '@/components/Blog/Article/ShareButtons';
import Image from 'next/image';
import CircleSpinner from '@/components/UI/Spinner/CircleSpinner';
import {RelatedPosts} from "@/components/Blog/Article/RelatedPosts";
import {usePathname} from "next/navigation";

function Article(props) {
	const [post, setPost] = useState(null);
	const [posts, setPosts] = useState([]);
	const [sections, setSections] = useState([]);
	const [author, setAuthor] = useState(null);
	const [relatedPosts, setRelatedPosts] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	
	
	const currentPath = usePathname();
	useEffect(() => {
		if (props.fetchedSections !== null && props.fetchedPost !== null && props.fetchedPosts !== null) {
			const sectionsSort = props.fetchedSections.sort((a, b) => a.order - b.order);
			setPost(props.fetchedPost);
			setPosts(props.fetchedPosts)
			setSections(sectionsSort)
			setAuthor(props.fetchedAuthor)
			setIsLoading(false);
		}
	}, [props.fetchedAuthor, props.fetchedPost, props.fetchedPosts, props.fetchedSections]);
	
	useEffect(() => {
		if (posts && post) {
			setRelatedPosts(posts.filter(
				(item) =>
					item.categories === post.categories && item.name !== post.name
			))
		}
	}, [posts, post])
	
	return (
		<>
			{isLoading ? (
				<CircleSpinner/>
			) : (
				<>
					<div className="">
						<div className="mt-[142px] md:mt-[216px] mb-[64px]">
							<h1 className="">{post?.name}</h1>
						</div>
						<div className="flex flex-col space-y-8 md:space-y-0 md:flex-row justify-between">
							<Author author={author}/>
							<div
								className="flex md:flex-col justify-between items-center md:items-start md:justify-start md:space-y-4">
								
								{
									post?.duration > 0 &&
									<div className="flex space-x-4 pt-1 order-last md:order-fist">
										<IoIosTimer size={20} color="darkGrey"/>
										<p className="text-darkGrey">{post.duration} minutes read</p>
									</div>
								}
								
								<ShareButtons pathname={currentPath}/>
							</div>
						</div>
						<div className="w-full h-[290px] md:h-[575px] relative rounded-small overflow-hidden mt-[64px]">
							<Image
								sizes="100vw"
								fill
								src={post?.img}
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
					<RelatedPosts relatedPosts={relatedPosts}/>
				</>
			)}
		</>
	);
}

export default Article;
